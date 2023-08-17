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


export default function  Template( {trigger , nav}){

    const [pageHeading , setPageHeading] = useState("YourSiteName");
    const [pageDescription , setPageDescription] = useState("Your site description...");
    const [handburger , setHandburger] = useState(true);
    const [pageAboutObjec , setAboutPageObject] = useState({});
    const [pageAboutDescriptionTitle , setPageAboutDescriptionTitle] = useState("It's We Drops product...");
    const [pageAboutDescription , setPageAboutDescription] = useState("Wedrops: Elevating Eye and Ear Care. Discover a range of meticulously crafted drops designed to enhance your eye and ear health. Our premium solutions combine science and care to provide soothing relief and lasting well-being.");
    const [pageImage , setPageImage] = useState("https://d2hg8ctx8thzji.cloudfront.net/healthpanda.net/wp-content/uploads/2020/02/5_effective_treatment_options_for_dry_eyes-715x505.jpg");
    const [pageBgImage , setPageBgImage]  = useState("https://images.pexels.com/photos/531880/pexels-photo-531880.jpeg");
    const [pageImageAlignLeft , setPageImageAlignLeft] = useState(true);
    const [pageCompanyName , setPageCompanyName] = useState("YourCompanyName");

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
                <div className={`w-[20rem] ${(handburger)?"visible":"hidden"}`}>
                    {/* left section content */}
                    <div className="p-3 flex flex-col gap-10 overflow-y-auto  h-full">
                        <div className="flex flex-col gap-2">
                            <label>Company Name</label>
                            <input 
                            maxLength={15}
                            onChange={(e) => setPageCompanyName(e.target.value)}
                            className="border p-2 rounded m-1" 
                            placeholder="Default Home Page"/>
                        </div>
                        <div className="flex flex-col gap-2">
                            <label>Heading</label>
                            <input 
                            maxLength={35}
                            onChange={(e) => setPageHeading(e.target.value)}
                            className="border p-2 rounded m-1" 
                            placeholder="Default Home Page"/>
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