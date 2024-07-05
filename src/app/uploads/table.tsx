import { uploads } from "@prisma/client";
import Row from "./row";

const Table = ({data}:{data:uploads[]|[]}) => {
  return (
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400" id="table-uploads">
      <thead className="text-xs text-gray-700 uppercase bg-blue-100 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th
            scope="col"
            className="py-3 pl-4 pr-3 text-left text-xs font-semibold uppercase tracking-wide text-gray-500"
          ></th>

          <th
            scope="col"
            className="py-3 pl-4 pr-3 text-left text-xs font-semibold uppercase tracking-wide text-gray-500"
          >
            名前
          </th>

          <th
            scope="col"
            className="py-3 pl-4 pr-3 text-left text-xs font-semibold uppercase tracking-wide text-gray-500"
          >
            パス名
          </th>
          <th
            scope="col"
            className="py-3 pl-4 pr-3 text-center text-xs font-semibold uppercase tracking-wide text-gray-500"
          >
            サイズ
          </th>

          <th
            scope="col"
            className="py-3 pl-4 pr-3 text-center text-xs font-semibold uppercase tracking-wide text-gray-500"
          >
            更新日時
          </th>

          <th
            scope="col"
            className="px-3 py-3 text-left text-xs font-semibold uppercase tracking-wide text-gray-500"
          ></th>
        </tr>
      </thead>
      <tbody  id="table-content">
        {data.length
          ? data.map((post) => <Row key={post.id} dataAll={post} />)
          : <><tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
          <td>No file found</td>
        </tr></>}
      </tbody>
      
    </table>
  );
};

export default Table;
