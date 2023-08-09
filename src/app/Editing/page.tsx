"use client"
import { useCallback, useState } from "react";

import {useDropzone}  from "react-dropzone";

import 'react-quill/dist/quill.snow.css';

import dynamic from 'next/dynamic';

const QuillEditor = dynamic(() => import('react-quill'), { ssr: false });

import * as React from "react"

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle, 
} from "~/components/ui/card"
import { Input } from "~/components/ui/input"
import { Label } from "~/components/ui/label"


function CardWithForm() {
  return (
    <Card className="w-[350px] h-full">
      <CardHeader>
        <CardTitle>Organization</CardTitle>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Product Type</Label>
              <Input id="name" placeholder="Name of your product Type" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="vendor">Vendor</Label>
              <Input id="vendor" placeholder="Vendor Name"></Input>
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="collections">Collections</Label>
              <Input id="collections" placeholder="Search for collection"></Input>
            </div>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}

function AddProducts(){
  const [value, setValue] = useState('');

  return (
    <Card className="w-[350px] w-full">
      <CardHeader>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Title</Label>
              <Input id="name" placeholder="Name of your project" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="framework">Description</Label>
              <div className="py-10 h-[19em]">
                <QuillEditor  className="h-full"  theme="snow" value={value} onChange={setValue}  />
              </div>
            </div>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}

function AdditionalDetails(){
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Additional Details</CardTitle>
      </CardHeader>
      <CardContent>
        <form>
          <div className="w-full items-center gap-4 flex justify-between flex-col sm:flex-row ">
            <div className="flex flex-col space-y-1.5 w-full">
              <Label htmlFor="pricing">Add pricing</Label>
              <Label className="text-gray-400">Add the price of your product</Label>
              <Input id="pricing" placeholder="" className="lg:w-full"/>
            </div>
            <div className="flex flex-col space-y-1.5 w-full">
              <Label htmlFor="quantity">Add quantity</Label>
              <Label className="text-gray-400">Add the quantity of availiability of your product.</Label>
              <Input id="quantity" placeholder="" className="lg:w-full"></Input>
            </div>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}

function MainSection(){
    return (
        <div className="w-full h-full gap-5 px-5 ">

            <div className="w-full py-5">
                <p><b>Edit Product Details</b></p>
                <p className="text-gray-400">Edit details about the product that you've posted.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-2">
                <AddProducts/>
                <div>
                  <CardWithForm/>
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
            <div>
                <AdditionalDetails/>
            </div>
            <div className="flex w-full justify-end p-2 py-5 gap-5">
                <button className="border border-orange-500 text-orange-500 hover:scale-110 p-3 rounded">Discord Changes</button>
                <button className="bg-orange-500 text-white p-3 px-5 rounded hover:scale-110">Save Changes</button>
             </div>
        </div>
    );
}

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




export default function Editing() {

  return (
    <div className="h-screen">

        <div className="w-full h-full  overflow-y-scroll scroll whitespace-nowrap">
            <MainSection/>
        </div>
    </div>
  );
}
