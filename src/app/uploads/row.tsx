import { uploads } from "@prisma/client";
import Image from "next/image";
import { format } from "date-fns";

const Row = ({ dataAll }: { dataAll: uploads }) => {
  return (
    <tr>
      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-semibold text-gray-900">
        <Image
          width={32}
          height={32}
          className="w-8 h-8"
          src="/uploads/icons8-document.svg"
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
