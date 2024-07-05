"use client"
import Swal from 'sweetalert2'
import "./form.css";
import FormUpload from "./Form";
import { useEffect, useState } from "react";

const CreateUpload = () => {
  const [send, setSend] = useState<boolean>(false);

  useEffect(() => {
    if(send){
      Swal.fire({
        title: "Good job!",
        text: "Files Uploads",
        icon: "success"
      });
    }
  }, [send]);

  return (
    <FormUpload callback={setSend}/>
  );
};

export default CreateUpload;
