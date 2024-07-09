" use client";
import { uploads } from "@prisma/client";
import Row from "./row";
import { useEffect, useState } from "react";

const Table = ({
  data,
  callback,
  update,
}: {
  data: uploads[] | [];
  callback: Function;
  update: Function;
}) => {
  const [checkAll, setCheckAll] = useState<boolean>(false);
  var allId: number[] = [];
  const [allCheck, setAllCheck] = useState<boolean[]>(data.length ? new Array(data.length).fill(false): [false]);
  data.forEach((e) => {
    allId.push(e.id);
  });

  const handleSelectAllChange = () => {
    setCheckAll(!checkAll);
    setAllCheck(new Array(data.length?data.length:1).fill(!checkAll));
    callback(allId);
  };

  const updateIndex = (index:number, value:boolean) => {
    setAllCheck(prevArray => {
      const newArray = [...prevArray];
      newArray[index] = value;
      return newArray;
    });
  };
  const allTrue = (arr:boolean[]) => arr.every(value => value === true);

  const handleSlectOne = (id:number)=>{
    if(checkAll){
      setCheckAll(false)
    }
    updateIndex(allId.indexOf(id), !allCheck[allId.indexOf(id)])
    callback(id)
  }

  useEffect(()=>{
    if(allTrue(allCheck)){
      setCheckAll(true);
    }
  }, [allCheck])

  return (
    <table
      className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 mt-6"
      id="table-uploads"
    >
      <thead className="text-xs text-gray-700 uppercase bg-blue-100 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th
            scope="col"
            className="py-3 pl-4 pr-3 text-left text-xs font-semibold uppercase tracking-wide text-gray-500"
          >
            <input
              type="checkbox"
              value=""
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              checked={checkAll}
              onChange={handleSelectAllChange}
            />
          </th>
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
      <tbody id="table-content">
        {data.length ? (
          data.map((post) => (
            <Row
              key={post.id}
              dataAll={post}
              callback={update}
              handleClick1={handleSlectOne}
              checked={allCheck[allId.indexOf(post.id)]}
            />
          ))
        ) : (
          <>
            <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
              <td>No file found</td>
            </tr>
          </>
        )}
      </tbody>
    </table>
  );
};

export default Table;
