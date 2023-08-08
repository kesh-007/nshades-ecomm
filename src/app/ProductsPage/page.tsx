"use client"

//import { Dropdown } from "@nextui-org/react";
//import { Navbar } from "@nextui-org/react";

// Icons : RxDashboard , HiOutlineShoppingBag , LuSettings , AiOutlineUser

import { useCallback, useState } from "react";
import {useDropzone}  from "react-dropzone";
import 'react-quill/dist/quill.snow.css';
import dynamic from 'next/dynamic';
import React from "react";
/*
import Inventory from "./Inventory";
import Order from "./Orders";
import OrderDetails from "./OrdersDetails";
import Editing from "./Editing";

*/
const DropzoneComponent: React.FC = () => {
  const [droppedFiles, setDroppedFiles] = useState<File[]>([]);

  const onDrop = useCallback((acceptedFiles:File[]) => {
    // Update the state with the dropped files
    
    const files = acceptedFiles.map((file:File) => Object.assign(file , {
      preview: URL.createObjectURL(file)
    }))

    setDroppedFiles([...droppedFiles , ...files])
    
  },[droppedFiles]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    multiple : true,
  });

  return (
    <div {...getRootProps()} className={`dropzone ${isDragActive ? 'active' : ''} w-full bg-gray-100 h-[400px] p-2 flex items-center justify-center`}>
      <input {...getInputProps()} />

      {(droppedFiles.length == 0)?
      (isDragActive) ? (
        <p>Drop the files here...</p>
      ) : (
        <p>Drag 'n' drop some files here, or click to select files</p>
      ):
      <></>
      }

      {/* Display the dropped files with previews */}
      {droppedFiles.length > 0 && (
        <div className="w-full h-full overflow-y-scroll scroll whitespace-nowrap">
          <ul className="grid grid-cols-5">
            {droppedFiles.map((file) => (
              <li className="flex" key={file.name}>
                {file.type.startsWith('image/') ? (
                  <img src={file.preview} alt={file.name} className="object-cover" />
                ) : (
                  <></>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default function ProductsPage(){
  const [value, setValue] = useState('');
  const QuillEditor = dynamic(() => import('react-quill'), { ssr: false });

  return (
        <div className="w-full h-full gap-5 px-5  ">
          
            <div className="w-full py-5">
                <p><b>Add Product</b></p>
                <p className="text-gray-400">Add the details about the product you're going to post.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-2">
                <div className="w-full p-3 shadow-lg rounded">
                    <div>
                      <p className="font-bold">Title</p>
                      <input className="p-2 my-2 w-full outline-none border-gray-200 border rounded" placeholder="Short sleeve t shirt"/>
                    </div>
                    <div className="">
                      <p className="font-bold mb-3">Description</p>
                      <div className="h-2/3">
                        <QuillEditor  style={{"height" : "80%" }} theme="snow" value={value} onChange={setValue} />
                      </div>
                    </div>
                </div>
                <div className=" sm:w-1/2 w-full flex flex-col shadow-lg shadow-black-500/50 p-5 rounded">
                  <p className="mb-10"><b>Organization</b></p>
                  <div className="flex flex-col overflow-y-scroll scroll whitespace-nowrap ">
                    <label>Product type</label>
                    <input className="p-2 my-2 outline-none border border-gray-300 rounded" placeholder="e.g Shirts"/>
                    <label>Vendor</label>
                    <input className="p-2 my-2 outline-none border border-gray-300 rounded" placeholder="e.g Nike"/>
                    <label>Collections</label>
                    <input className="p-2 my-2 outline-none border border-gray-300 rounded" placeholder="Search for collections"/>
                  </div>
                </div>
            </div>
              <div className="my-5 flex h-1/9 flex-col gap-3">
                <p className="text-black"><b>Add Pictures</b></p>
                <p className="text-gray-500">Upload image of your product</p>
                  <div className="flex p-5 gap-3 flex-col w-full h-full rounded shadow-lg my-2 p-2">
                      <p>Media</p>
                      <div className="flex justify-stretch items-stretch w-full h-full border border-dashed">
                          <DropzoneComponent/>
                      </div>
                  </div>
              </div>
            <div className="flex flex-col gap-3">
              <div className="my-5 mt-3">
                  <p><b>Additional details</b></p>
              </div>
              <div className="grid grid-cols-2 p-5 gap-5 items-center shadow-lg shadow-black-500/50">
                    <div className="flex flex-col gap-5">
                        <p><b>Add pricing</b></p>
                        <p className="text-gray-400">Add the price of your product</p>
                        <div className="flex w-full border border-dashed p-3 rounded">
                          <p>box1</p>
                        </div>
                    </div>
                <div className="flex h-full w-full flex-col gap-5">
                    <p><b>Add pricing</b></p>
                    <div className="text-wrap">
                      <p className=" text-gray-400">Add the quantity of availiability of your product.</p>
                    </div>
                    <div className="flex w-full border border-dashed p-3 rounded">
                      <p>box1</p>
                    </div>
                </div>
              </div>
            </div>
            
            <div className="flex w-full justify-end p-2 py-5 gap-5">
                <button className="border border-orange-500 text-orange-500 hover:scale-110 p-3 rounded">Discord</button>
                <button className="bg-orange-500 text-white p-3 px-5 rounded hover:scale-110">Save</button>
             </div>
        </div>
    );
}

