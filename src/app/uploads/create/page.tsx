"use client"
import Swal from 'sweetalert2'
import "./form.css";
import FormUpload from "./Form";
import { useEffect, useState } from "react";


const CreateUpload = () => {
  const [send, setSend] = useState<boolean>(false);
  const [err, setErr] = useState<string>("");


  useEffect(() => {
    if(send){
      Swal.fire({
        title: "Good job!",
        text: "Files Uploads",
        icon: "success"
      });
    }
    if(err){
      Swal.fire({
        title: "Error!",
        text: err,
        icon: "error"
      });
      setErr("");
    }

  }, [send, err]);

  return (
    <FormUpload callback={[setSend, setErr]}/>
  );
};

export default CreateUpload;
