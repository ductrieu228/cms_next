"use client";
import Table from "./table";
import Find from "./find";
import { useState, useEffect } from "react";
import { uploads } from "@prisma/client";
import { delMultipleFile } from "@/libs/actions";
import Swal from "sweetalert2";

const Data = ({ data }: { data: uploads[] }) => {
  const [dataForComponentB, setDataForComponentB] = useState<uploads[]>(data);
  const [idDel, setIdDel] = useState<number[]>([]);
  const [status, setStatus] = useState<boolean>(false);

  var updateRow = (id: number|number[]) => {
    var temp:number[] = [];
    temp = idDel;
    if(typeof(id)=="number"){
      if (temp.includes(id)) {
        const index = temp.indexOf(id);
        temp.splice(index, 1);
      } else {
        temp.push(id);
      }
    }
    else{

      if(JSON.stringify(temp.sort()) !== JSON.stringify(id.sort())){
        temp = id
      }else{
        temp = [];
      }
    }
    setIdDel(temp);
    console.log(temp)
    if (temp.length) {
      setStatus(true);
    } else {
      setStatus(false);
    }
  };

  const confirmDel = async () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await delMultipleFile(idDel);
        if (res.success) {
          Swal.fire({
            title: "Good job!",
            text: "Files deleted",
            icon: "success",
          });
          if (typeof res.info != "string") setDataForComponentB(res.info);
        } else {
          Swal.fire({
            title: "Error!",
            text: "Can not delete",
            icon: "error",
          });
        }
      }
    });
  };

  return (
    <div className="flex h-screen gap-8 mt-4 p-2 ">
      <div className="max-w-full w-screen mx-auto space-y-6">
        <div className="p-4 bg-white shadow border border-gray-200">
          <div className="w-full">
            <Find
              onUpdateData={setDataForComponentB}
              status={status}
              callback={confirmDel}
            />

            <div className="relative overflow-x-auto mt-2 sm:rounded-lg">
              <Table
                data={dataForComponentB}
                callback={updateRow}
                update={setDataForComponentB}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Data;
