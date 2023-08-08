"use client"

// import dynamic from "next/dynamic";
import { useState } from "react";
// import { useDropzone } from "react-dropzone";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdAccountCircle } from "react-icons/md";


import {IoMdArrowDropdown} from "react-icons/io";
import {IoMdArrowDropup} from "react-icons/io";

import {RxDashboard} from "react-icons/rx";
import {HiOutlineShoppingBag} from "react-icons/hi";
import {LuSettings} from "react-icons/lu";
import {AiOutlineUser} from "react-icons/ai";


import 'react-quill/dist/quill.snow.css';


function SideMenu({ icon , menuName , options }) {

    const [menuPressed, setMenuPressed] = useState(false);
    
    return (
      <div
        className="flex flex-col"
      >
        <div 
        
        onClick={() => setMenuPressed(!menuPressed)}
        className="flex w-full justify-between items-center active:bg-orange-300 p-3">
          <div>
              {icon}
          </div>
          <p className="m-1"><b>{menuName}</b></p>
  
          {
              (!menuPressed)?
                  <IoMdArrowDropdown/>
              :
                  <IoMdArrowDropup/>
          }
        </div>
        <div className="w-full flex justify-center">
          {menuPressed ? (
            <div className=" w-full ml-5">
              {options.map((option:any, index:any) => (
                <div className="flex items-center active:bg-orange-300 hover:bg-orange-200">
                  <div>
                      {option.icon}
                  </div>
                  <p className=" py-3 w-full px-3">{option.name}</p>
                </div>
              ))}
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
    );
  }

function SideBar({handBurger , callback}){

    const options = [
        {icon : <RxDashboard/> , name : "Dashboard" , optionlist : [] },
        
        {icon : <HiOutlineShoppingBag/> , name : "Products" , optionlist : [
          {icon : <HiOutlineShoppingBag/> , name : "All Products"},
          {icon : <RxDashboard/> , name : "Inventory"},
          {icon : <HiOutlineShoppingBag/> , name : "Transfers"},
          {icon : <RxDashboard/> , name : "Collections"},
        ] },
        
        {icon : <HiOutlineShoppingBag/> , name : "Orders" , optionlist : [
          {icon : <HiOutlineShoppingBag/> , name : "All Orders"},
          {icon : <RxDashboard/> , name : "Drafts"},
          {icon : <HiOutlineShoppingBag/> , name : "Checkouts" }
          
        ] },
        
        {icon : <RxDashboard/> , name : "Categories" , optionlist : ["option1" , "option2"] },

        {icon : <AiOutlineUser/> , name : "Admins" , optionlist : ["option1" , "option2"] },

        {icon : <LuSettings/> , name : "Settings" , optionlist : ["option1" , "option2"] },
        
      ];
      
    return (
      <>
      {(handBurger)?
        <div className="bg-yellow-100 sm:block absolute md:static left-0 z-[100] top-0 bottom-0 shadow-lg shadow-black-500/20 p-5 sm:p-3">
              <div className="px-3">
                <GiHamburgerMenu onClick={() => callback(!handBurger)} className="md:hidden"/>
              </div>
          <div className="py-4">
            {options.map((option , index) => (
              <SideMenu icon={option.icon} menuName={option.name} options={option.optionlist} key={index}/>
              
            ))}
          </div>
        </div>
          :
                <></>
              }
        </>

    );
}

  export default function Main({pages}) {

    const [handBurger , setHandBurger] = useState(false);
  
    return (
      <div className="h-screen">
        <div className="flex w-full shadow-lg shadow-black-500/50 justify-between iterms-center rounded-bl-xl rounded-br-xl p-5">
            
          <div className="flex items-center gap-4">
              <GiHamburgerMenu size={20} onClick = {()=> setHandBurger(!handBurger)} className="cursor-pointer"/>
              
                <p className="text-lg hidden sm:block">
                    <b>NShades</b>
                </p>
          </div>
          <p className="text-lg sm:hidden">
            <b>NShades</b>
          </p>
          <div className="flex">
            
            <MdAccountCircle size={35} />
          </div>
        </div>
  
        <div className="flex h-screen">
      
          {
            (handBurger)?<SideBar handBurger={handBurger} callback={setHandBurger}/>:<></>
          }
        
          <div className="w-full h-full  overflow-y-scroll scroll whitespace-nowrap">
            {pages}
          </div>
        </div>
      </div>
    );
  }
  
