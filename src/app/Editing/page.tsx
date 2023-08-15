"use client"
import { useCallback, useState } from "react";


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
import DropzoneComponent from "~/components/ui/DragAndDropField";


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
              <div className="md:py-10 h-[19rem]">
                <QuillEditor  className="h-full max-lg:hidden"  theme="snow" value={value} onChange={setValue}  />
                <textarea placeholder="Enter the Description" className="border border-dashed md:hidden rounded-md bg-gray-100 w-full h-full resize-none outline-none p-2"/>
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
            <div className="flex flex-col space-y-1.5 w-full gap-2">
              <Label htmlFor="pricing">Add pricing</Label>
              <Label className="text-gray-400">Add the price of your product</Label>
              <Input id="pricing" placeholder="" className="lg:w-full"/>
            </div>
            <div className="flex flex-col space-y-1.5 w-full gap-2">
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
        <div className="w-full h-full p-5 flex flex-col gap-10">
            <div className="w-full">
                <p><b>Edit Product Details</b></p>
                <p className="text-gray-400">Edit details about the product that you've posted.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-12 sm:gap-2">
                <AddProducts/>
                <div>
                  <CardWithForm/>
                </div>
            </div>
              <div className="my-5 flex h-1/9 flex-col gap-3">
                <p className="text-black"><b>Add Pictures</b></p>
                <p className="text-gray-500">Upload image of your product</p>
                  <div className="flex p-5 gap-3 flex-col w-full h-full rounded border my-2 p-2">
                      <p>Media</p>
                      <div className="flex justify-stretch items-stretch w-full h-full border border-dashed">
                          <DropzoneComponent/>
                      </div>
                  </div>
              </div>
            <div>
                <AdditionalDetails/>
            </div>
            <div className="flex w-full md:justify-end justify-center p-2 py-5 gap-5">
                <button className="border border-[#ec4755] text-[#ec4755] hover:scale-110 p-3 rounded">Discord Changes</button>
                <button className="bg-[#ec4755] text-white p-3 px-5 rounded hover:scale-110">Save Changes</button>
             </div>
        </div>
    );
}



export default function Editing() {

  return (
    <div className="h-screen">

        <div className="w-full h-full  overflow-y-scroll scroll whitespace-nowrap">
            <MainSection/>
        </div>
    </div>
  );
}
