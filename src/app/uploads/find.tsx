"use client";

import { uploadTable, uploadTableAll } from "@/libs/actions";
import { uploads } from "@prisma/client";
import { useState, useEffect } from "react";
const Find = ({ onUpdateData }: { onUpdateData: Function }) => {
  const [input, setInput] = useState<string | "">("");
  const [results, setResults] = useState<uploads[]>([]);

  const handleKeyPress = (event:any) => {
    if (event.key === 'Enter') {
      // Handle your logic here, e.g., submit form or trigger an action
      onUpdateData(results);
    }
  };


  useEffect(() => {
    const getData = async () => {
      if (input) {
        try {
          const response = await uploadTable(input);
          if (response) setResults(response);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }
    };
    const getAllData = async () => {
      try {
        const response = await uploadTableAll();
        if (response) setResults(response);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    if (input != "") {
      getData();
    } else {
      getAllData();
    }
  }, [input]);

  function handleChange(e: any) {
    setInput(e.target.value);
  }

  return (
    <div className="sm:flex sm:items-center relative">
      <div className="xl:w-48 md:w-30 sm:w-24 lg:w-40">
        <h1 className="text-base font-semibold leading-6 text-gray-900">
          {"ファイル"}
        </h1>
      </div>
      <div className="sm:flex-auto">
        <input
          type="text"
          id="search-input"
          className="w-full xl:w-5/6 2xl:ml-6 lg:ml-2 md:ml-1 border border-gray-300 shadow-sm py-1 px-2"
          placeholder="名前"
          value={input}
          onChange={handleChange}
          onKeyPress={handleKeyPress}
        />
      </div>
      <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
        <a
          type="button"
          href="#"
          className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          追加
        </a>
      </div>
    </div>
  );
};

export default Find;
