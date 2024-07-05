"use server"
import prisma from "@/libs/client";
import Data from "./data";

const Uploads = async () => {

  const dataF = await prisma.uploads.findMany({
    orderBy:{
      created_at: "desc"
    }
  });

  return (
    <Data data={dataF} />
  );
};

export default Uploads;
