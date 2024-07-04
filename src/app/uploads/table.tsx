import { uploads } from "@prisma/client";
import Row from "./row";

const Table = ({data}:{data:uploads[]|[]}) => {
  console.log(data);
  return (
    <table className="w-full divide-y divide-gray-300" id="table-uploads">
      <thead>
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
      <tbody className="divide-y divide-gray-200 bg-white" id="table-content">
        {data.length
          ? data.map((post) => <Row key={post.id} dataAll={post} />)
          : <><tr>
          <td>No file found</td>
        </tr></>}
      </tbody>
      
    </table>
  );
};

export default Table;
