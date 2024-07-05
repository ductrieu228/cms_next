"use client";
import { upload } from "@/libs/actions";
import Image from "next/image";
import { useRef, useState  } from "react";

const FormUpload = ({ callback }: { callback: Function[] }) => {
  const [dragActive, setDragActive] = useState<boolean>(false);
  const inputRef = useRef<any>(null);
  const [files, setFiles] = useState<any>([]);
  function handleChange(e: any) {
    e.preventDefault();
    console.log("File has been added");
    if (e.target.files && e.target.files[0]) {
      console.log(e.target.files);
      for (let i = 0; i < e.target.files["length"]; i++) {
        setFiles((prevState: any) => [...prevState, e.target.files[i]]);
      }
    }
  }


  const handleSubmitFile = async (e: any) => {
    if (files.length === 0) {
      // no file has been submitted
      callback[1]("No file found");
    } else {
      // write submit logic here
      const formData = new FormData();
      files.forEach((file:File) => {
        formData.append('files', file);
      });
      const res = await upload(formData);
      if(res.success){
        callback[0](true);
        setTimeout(()=>{
          window.location.href= "/uploads"
        }, 1000);
      }else{
        callback[1](res.info)
      }
    }
  }

  function handleDrop(e: any) {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      for (let i = 0; i < e.dataTransfer.files["length"]; i++) {
        setFiles((prevState: any) => [...prevState, e.dataTransfer.files[i]]);
      }
    }
  }

  function handleDragLeave(e: any) {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
  }

  function handleDragOver(e: any) {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(true);
  }

  function handleDragEnter(e: any) {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(true);
  }

  function removeFile(fileName: any, idx: any) {
    const newArr = [...files];
    newArr.splice(idx, 1);
    setFiles([]);
    setFiles(newArr);
  }

  function openFileExplorer() {
    inputRef.current.value = "";
    inputRef.current.click();
  }
  return (
    <div className="formbold-main-wrapper">
      <div className="formbold-form-wrapper">
        <form
          className={`${
            dragActive ? "border-4 border-blue-300" : "border-none"
          }  flex flex-col`}
          onDragEnter={handleDragEnter}
          onSubmit={(e) => e.preventDefault()}
          onDrop={handleDrop}
          onDragLeave={handleDragLeave}
          onDragOver={handleDragOver}
        >
          <div className="pt-4">
            <label className="formbold-form-label formbold-form-label-2">
              Upload File
            </label>

            <div className="formbold-mb-5 formbold-file-input">
              <input
                type="file"
                multiple={true}
                className="h-fit w-fit"
                ref={inputRef}
                onChange={handleChange}
              />

              <label htmlFor="file">
                <div>
                  <span className="formbold-drop-file"> Drop files here </span>
                  <span className="formbold-or"> Or </span>
                  <span className="formbold-browse" onClick={openFileExplorer}> Browse </span>
                </div>
              </label>
            </div>
          </div>
          <div className="flex flex-col p-3">
          {files.map((file: any, idx: any) => (
            <div key={idx} className="flex flex-row justify-between space-x-5 p-1 text-[#6888e5] font-bold text-sm ">
              <span className="">{file.name}</span>
              <span
                className="cursor-pointer"
                onClick={() => removeFile(file.name, idx)}
              >
                <Image
                  src="/icons8-wastebasket-64.png"
                  alt=""
                  width={24}
                  height={24}
                />
              </span>
            </div>
          ))}
        </div>

          <button onClick={handleSubmitFile} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
            Upload
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormUpload;
