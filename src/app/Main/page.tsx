"use client"

// import dynamic from "next/dynamic";
import { useState } from "react";
// import { useDropzone } from "react-dropzone";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdAccountCircle } from "react-icons/md";

import 'react-quill/dist/quill.snow.css';
import SideBar from "~/components/ui/SideBar";


  export default function Main({pages}) {

  
    return (
      <SideBar page = {pages}/>
    );
  }
  