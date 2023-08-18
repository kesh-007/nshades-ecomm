import { useState } from "react";
import TemplatePage from "./CustomSite";
import { GiHamburgerMenu } from "react-icons/gi";
//import Link from "next/link";


import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from "~/components/ui/select"

import {Input} from "~/components/ui/input";
import { Label } from "~/components/ui/label";


export default function  Template( {trigger , nav}){

    const [pageHeading , setPageHeading] = useState("SiteName");
    const [pageDescription , setPageDescription] = useState("Site description...");
    const [handburger , setHandburger] = useState(true);
    const [pageAboutObjec , setAboutPageObject] = useState(null);
    const [pageAboutDescriptionTitle , setPageAboutDescriptionTitle] = useState("");
    const [pageAboutDescription , setPageAboutDescription] = useState("");
    const [pageImage , setPageImage] = useState(null);
    const [pageBgImage , setPageBgImage]  = useState(null);
    const [pageImageAlignLeft , setPageImageAlignLeft] = useState(true);
    const [pageCompanyName , setPageCompanyName] = useState("CompanyName");

    function handlePreview(event){

        let file = event.target.files[0];

        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
              setPageBgImage(reader.result);
            };
            reader.readAsDataURL(file);
          }
    }

    function handlePreviewAbout(event){
        let file = event.target.files[0]
        if (file){
            const reader = new FileReader();
            reader.onload = () => {
                setPageImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    }

    return (
        <div className="h-screen w-screen">
            <div className="w-full flex justify-between p-3 items-center">
                <div className="flex items-center gap-5">
                    <div onClick={()=> setHandburger(!handburger)}>
                        <GiHamburgerMenu/>
                    </div>
                    <p className="font-bold" onClick={() => {
                        setHandburger(false)
                        trigger(true)
                        nav(true)
                        
                    }}>NShades</p>
                </div>
                <div className="flex gap-5">
                    <button className="text-[#ec4755] p-2 rounded">Live</button>
                    <button className="bg-[#ec4755] text-white p-2 rounded">Save</button>
                </div>
            </div>
            <div className="h-full flex">
                <div className={`w-[20rem] ${(handburger)?"visible":"hidden"} max-sm:absolute z-[2] bg-white max-sm:w-[100%]`}>
                    {/* left section content */}
                    <div className="p-3 flex flex-col gap-10 overflow-y-auto  h-full">
                        <div className="flex flex-col gap-2">
                            <label>Company Name</label>
                            <input 
                            maxLength={15}
                            onChange={(e) => setPageCompanyName(e.target.value)}
                            className="border p-2 rounded m-1" 
                            placeholder="ex. Google"/>
                        </div>
                        <div>
                            <div className="grid w-full max-w-sm items-center gap-1.5">
                            <Label htmlFor="picture">Background Image</Label>
                            <Input id="picture" type="file" onChange={handlePreview} />
                            </div>
                        </div>
                        
                        <div>
                            <div className="grid w-full max-w-sm items-center gap-1.5">
                            <Label htmlFor="picture">About Image</Label>
                            <Input id="picture" type="file" onChange={handlePreviewAbout} />
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <label>Heading</label>
                            <input 
                            maxLength={35}
                            onChange={(e) => setPageHeading(e.target.value)}
                            className="border p-2 rounded m-1" 
                            placeholder="ex. search the wen in a way you want.."/>
                        </div>
                        <div className="flex flex-col gap-2">
                            <label>Text</label>
                            <textarea 
                            cols={80}
                            maxLength={80}
                            onChange={(e) => setPageDescription(e.target.value)}
                            className = "border resize-none outline-none p-2 h-[10rem]" placeholder={pageDescription}/>
                        </div>
                        <div className="flex flex-col gap-2 w-full">
                            <label>Align Image</label>
                            {/* <select
                            className="border p-2 rounded m-1" 
                            placeholder="Default Home Page" onChange={(e) => setPageImageAlignLeft(!pageImageAlignLeft)}>
                                <option>Left</option>
                                <option>Right</option>
                            </select> */}
                            <Select onValueChange={(e) => setPageImageAlignLeft((e === "left")? true : false) }>
                                <SelectTrigger className="outline-none">
                                    <SelectValue placeholder="Alignment" />
                                </SelectTrigger>
                                <SelectContent className="w-full">
                                    <SelectGroup >
                                        <SelectLabel>Alignment</SelectLabel>
                                        <SelectItem value="left" >Left</SelectItem>
                                        <SelectItem value="right">Right</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="flex flex-col gap-2">
                            <label>Layout</label>
                            <input 
                            className="border p-2 rounded m-1"
                             placeholder="Default Home Page"/>
                        </div>
                        <div className="flex flex-col gap-2">
                            <label>Section height</label>
                            <input  className="border" placeholder="Default Home Page"/>
                        </div>
                        <div className="flex flex-col gap-2">
                            <label>Text Size</label>
                            <input className="border" placeholder="Default Home Page"/>
                        </div>
                        <div className="flex flex-col gap-2">
                            <label>Button Text</label>
                            <input placeholder="Default Home Page"/>
                        </div>
                        <div className="flex flex-col gap-2">
                            <label>Button Link</label>
                            <input placeholder="Default Home Page"/>
                        </div>
                        
                    </div>
                </div>
                <div className="w-full">
                    {/* right section content */}
                    <div className="h-full bg-gray-500">
                        <TemplatePage 
                        heading = {pageHeading} 
                        bgimage={pageBgImage}
                        description={pageDescription}
                        image = {pageImage}
                        about_description={pageAboutDescription}
                        image_align = {pageImageAlignLeft}
                        about_description_title={pageAboutDescriptionTitle}
                        company_name={pageCompanyName}
                        /> {/*GENERATED TEMPLATE PAGE*/}
                    </div>
                </div>
            </div>
        </div>
    );

}