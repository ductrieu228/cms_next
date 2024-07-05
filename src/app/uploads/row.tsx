import { uploads } from "@prisma/client";
import Image from "next/image";
import { format } from "date-fns";

const Row = ({ dataAll }: { dataAll: uploads }) => {
  var image_symbol_path = "/uploads/icons8-file.svg"
  if(dataAll.file_path?.includes("documents")){
    if(dataAll.file_path?.includes(".doc")){
      image_symbol_path = "/uploads/icons8-word.svg";
    }
    else
    image_symbol_path = "/uploads/icons8-document.svg";
  }
  else if(dataAll.file_path?.includes(".eps")){
    image_symbol_path = "/uploads/icons8-eps-96.png";
  }
  else if(dataAll.file_path?.includes(".tiff")){
    image_symbol_path = "/uploads/icons8-tiff-file-96.png";
  }
  else if(dataAll.file_path?.includes(".heic") || dataAll.file_path?.includes(".heif")){
    image_symbol_path = "/uploads/icons8-heic-80.png";
  }
  else if(dataAll.file_path?.includes("fonts")){
    image_symbol_path = "/uploads/icons8-font-96.png";
  }
  else if(dataAll.file_path?.includes("powerpoints")){
    image_symbol_path = "/uploads/icons8-powerpoint.svg";
  }
  else if(dataAll.file_path?.includes("pdfs")){
    image_symbol_path = "/uploads/icons8-pdf-96.png";
  }
  else if(dataAll.file_path?.includes("excels")){
    image_symbol_path = "/uploads/icons8-excel.svg";
  }
  else if(dataAll.file_path?.includes("archives")){
    image_symbol_path = "/uploads/icons8-archive-96.png";
  }
  else if(dataAll.file_path?.includes("audios")){
    image_symbol_path = "/uploads/icons8-audio-96.png";
  }
  else if(dataAll.file_path?.includes("videos")){
    image_symbol_path = "/uploads/icons8-video-96.png";
  }
  
  else if(dataAll.file_path?.includes("images")){
    image_symbol_path = "/tmp/" + dataAll.file_path;
  }
  return (
    <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-semibold text-gray-900">
        
        <Image
          width={32}
          height={32}
          className="w-8 h-auto "
          src={image_symbol_path}
          alt="Text file"
        />
      </td>

      <td className="whitespace-nowrap px-3 py-4 text-sm  text-gray-500">
        {dataAll.file_name}
      </td>

      <td className="whitespace-nowrap px-3 py-4 text-sm  text-gray-500">
        <span className="">{dataAll.file_path}</span>
      </td>
      <td className="whitespace-nowrap px-3 py-4 text-sm  text-gray-500 text-center">
        {dataAll.capacity} KB
      </td>

      <td className="whitespace-nowrap px-3 py-4 text-sm  text-center text-gray-500">
        {format(
          new Date(dataAll.created_at ? dataAll.created_at : ""),
          "yyyy-MM-dd HH:mm:ss"
        )}
      </td>

      <td className="flex justify-end  px-3 py-4 whitespace-nowrap border-none h-[65.5px]">
        <div className="my-0 flex items-center h-8">
          <a
            className="px-4 py-1.5 text-gray-900 bg-white border border-gray-400 hover:bg-gray-100 rounded-lg  me-2 mx-auto my-0 h-full"
            href="#"
          >
            Download
          </a>
          <a
            href=""
            className="px-4 py-1.5 text-gray-900 bg-white border border-gray-400 hover:bg-gray-100 rounded-lg  me-2 mx-auto my-0 h-full"
          >
            Draft
          </a>
          <a
            href=""
            className="px-4 py-1.5 text-gray-900 bg-white border border-gray-400 hover:bg-gray-100 rounded-lg  me-2 mx-auto my-0 h-full"
          >
            Public
          </a>
          <a
            href=""
            className="px-4 py-1.5 text-gray-900 bg-white border border-gray-400 hover:bg-gray-100 rounded-lg  me-2 mx-auto my-0 h-full"
          >
            削除
          </a>
        </div>
      </td>
    </tr>
  );
};

export default Row;
