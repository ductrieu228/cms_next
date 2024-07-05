"use client"
import Table from "./table";
import Find from "./find";
import { useState } from "react";
import { uploads } from "@prisma/client";

const Data = ({data}:{data:uploads[]}) => {
  const [dataForComponentB, setDataForComponentB] = useState<uploads[]>(data);

  const handleUpdateData = (data:uploads[]) => {
    setDataForComponentB(data); // Cập nhật dữ liệu cho Component B
  };

  return (
    <div className="">
      <div className="flex h-screen gap-8 mt-4 p-2">
        <div className="max-w-full w-screen mx-auto space-y-6">
          <div className="p-4 bg-white shadow border border-gray-200">
            <div className="w-full">
              <Find onUpdateData={handleUpdateData} />

              <div className="flow-root">
                <div className="mt-8 overflow-x-auto">
                  <div className="inline-block min-w-full py-2 align-middle">
                    <Table data={dataForComponentB}/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Data;
