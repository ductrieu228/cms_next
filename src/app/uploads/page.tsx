"use server"
import prisma from "@/libs/client";
import Data from "./data";

const Uploads = async () => {

  const dataF = await prisma.uploads.findMany();

  return (
    <Data data={dataF} />
  );
};

export default Uploads;
