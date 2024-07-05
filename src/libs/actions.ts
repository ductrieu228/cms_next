"use server";

import { uploads } from "@prisma/client";
import prisma from "./client";
import { promises as fsPromises, constants } from "fs";
import { join, dirname } from "path";
import { Buffer } from "buffer";

export const uploadTable = async (value: string) => {
  try {
    const response: uploads[] = await prisma.uploads.findMany({
      where: {
        file_name: {
          contains: value,
        },
      },
      orderBy: {
        created_at: "desc",
      },
    });
    return response;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
export const uploadTableAll = async () => {
  try {
    const response: uploads[] = await prisma.uploads.findMany({
      orderBy: {
        created_at: "desc",
      },
    });
    return response;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

export const upload = async (data: FormData) => {
  "use server";
  const files: File[] = Array.from(data.getAll("files")) as File[];
  if (files.length === 0) {
    return { success: false, info: "No files uploaded" };
  }

  async function ensureDirectoryExists(filePath: string) {
    const directory = dirname(filePath);

    try {
      await fsPromises.access(directory, constants.F_OK); // Check if directory exists
    } catch (error) {
      // Directory doesn't exist, create it
      await fsPromises.mkdir(directory, { recursive: true });
    }
  }
  const determineFolder = (
    mimeType: string,
    extension: string
  ): string | null => {
    switch (true) {
      case [
        "image/jpeg",
        "image/png",
        "image/jpg",
        "image/gif",
        "image/svg+xml",
        "image/bmp",
        "image/webp",
        "image/tiff",
        "application/postscript",
        "image/x-icon",
      ].includes(mimeType) ||
        (["heic", "heif"].includes(extension) &&
          mimeType == "application/octet-stream"):
        return "images";
      case [
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        "application/vnd.oasis.opendocument.text",
        "text/plain",
      ].includes(mimeType):
        return "documents";
      case mimeType === "application/pdf":
        return "pdfs";
      case [
        "application/vnd.ms-excel",
        "text/csv",
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      ].includes(mimeType):
        return "excels";
      case [
        "application/vnd.ms-powerpoint",
        "application/vnd.openxmlformats-officedocument.presentationml.presentation",
      ].includes(mimeType):
        return "powerpoints";
      case [
        "application/zip",
        "application/x-zip-compressed",
        "application/x-compressed",
        "application/x-7z-compressed",
      ].includes(mimeType):
        return "archives";
      case ["audio/mpeg", "audio/wav", "audio/aac", "audio/flac"].includes(
        mimeType
      ):
        return "audios";
      case [
        "video/mp4",
        "video/x-msvideo",
        "video/quicktime",
        "video/x-matroska",
        "video/x-ms-wmv",
      ].includes(mimeType):
        return "videos";
      case [
        "font/ttf",
        "font/otf",
        "font/woff",
        "font/woff2",
        "font/sfnt",
        "application/font-woff",
      ].includes(mimeType) ||
        (["ttf", "otf", "woff", "woff2"].includes(extension) &&
          mimeType == "application/octet-stream"):
        return "fonts";
      default:
        return null;
    }
  };

  for (const file of files) {
    const mimeType = file.type;
    const extension = file.name.split(".").pop()?.toLowerCase() || "";
    const folder = determineFolder(mimeType, extension);

    if (!folder) {
      return { success: false, info: "Unsupported file type" };
    }
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Decode the file name to ensure UTF-8 encoding is handled correctly
    const fileName = decodeURIComponent(escape(file.name));
    const filePath = join("./public/tmp", folder, fileName);
    const path_db = folder + "/" + fileName;
    const check = await prisma.uploads.findFirst({
      where: {
        file_path: path_db,
      },
    });
    if (!check) {
      // Ensure the directory exists before writing the file
      await ensureDirectoryExists(filePath);

      // Write the file to the specified path
      await fsPromises.writeFile(filePath, buffer);
      var time = new Date();
      await prisma.uploads.create({
        data: {
          file_name: fileName,
          file_type: mimeType,
          file_path: path_db,
          capacity: file.size / 1024,
          user_id: 1,
          created_at: time,
          updated_at: time,
          status: "public",
        },
      });
    } else {
      return { success: false, info: "file exist" };
    }
  }
  return { success: true };
};

export const delFile = async (Id:number) =>{
  try{
    var path = await prisma.uploads.findFirst({
      where:{
        id: Id
      },
      select:{
        file_name:true
      }
    })
    
    if(typeof(path)!="object") return {
      success: false,
      info: "not found file"
    }
    const filePath = join("./public/tmp", path);
    // await fsPromises.unlink(filePath);
    await prisma.uploads.delete({
      where:{
        id: Id
      }
    })
  }catch(e){
    return {
      success: false,
      info: e
    }
  }
  return {success:true}
}