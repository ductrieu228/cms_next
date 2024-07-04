"use server";

import { uploads } from "@prisma/client";
import prisma from "./client";

export const uploadTable = async (value: string) => {
  try {
    const response:uploads[] = await prisma.uploads.findMany({
      where: {
        file_name: {
          contains: value,
        },
      },
    });
    return response;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
export const uploadTableAll = async () => {
  try {
    const response:uploads[] = await prisma.uploads.findMany();
    return response;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
