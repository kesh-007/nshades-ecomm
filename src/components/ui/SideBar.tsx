
import {RxDashboard} from "react-icons/rx";
import {HiOutlineShoppingBag} from "react-icons/hi";
import {LuSettings} from "react-icons/lu";
import {AiOutlineUser} from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { use, useState } from "react";
import Inventory from "~/app/Inventory/page";
import Order from "~/app/Orders/page";


function SideMenu({ icon , menuName , options }) {

  const [menuPressed, setMenuPressed] = useState(false);
  
  return (
    <div
      className="flex flex-col hover:scale-110"
    >
      <div 
      
      onClick={() => setMenuPressed(!menuPressed)}
      className="flex w-full justify-between items-center active: p-3">
        <div>
            {icon}
        </div>
        <p className="m-1 active:underline"><b>{menuName}</b></p>

        {
            (!menuPressed)?
                <IoMdArrowDropdown/>
            :
                <IoMdArrowDropup/>
        }
      </div>
      <div className="w-full flex justify-center">
        {menuPressed ? (
          <div className=" w-full ml-5 ">
            {options.map((option:any, index:any) => (
              <div className="flex items-center justify-end active:bg-orange-300 hover:bg-red-700 px-2 ml-5">
                <div>
                    {option.icon}
                </div>
                <p className=" p-3 w-full">{option.name}</p>
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


export default function SideBar({page}){

    const [handBurger , setHandBurger] = useState(false);
    const [pageSelection , setPageSelection] = useState(null);
    const [currentPage , setCurrentPage] = useState(page);

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
      
    // return (
    //   <div>
    //     <section className="p-3 flex items-center gap-5 shadow-lg shadow-gray-500/20 h-[4rem]">
    //       <button onClick={() => setHandBurger(!handBurger)}>
    //           <GiHamburgerMenu/>
    //       </button>
    //       <span className="font-bold text-lg">NShades</span>
    //     </section>
      
    //   {(handBurger)?
    //     <div className="bg-[#ec4755] h-screen text-white sm:block absolute md:static left-0  top-0 bottom-0 p-5 sm:p-3 w-[17rem]">
    //           <div className="px-3">
    //             <GiHamburgerMenu onClick={() => callback(!handBurger)} className="md:hidden"/>
    //           </div>
    //       <div className="py-4">
    //         {options.map((option , index) => (
    //           <SideMenu icon={option.icon} menuName={option.name} options={option.optionlist} key={index}/>
    //         ))}
    //       </div>
    //     </div>
    //       :
    //       <></>
    //     }
    //     </div>
    // );

    function handlePageSelection(option){
      if (option === "Inventory"){
        setCurrentPage(<Inventory/>);
      }
      else if (option === "Orders"){
        setCurrentPage(<Order/>);
      }
    }

    return (
      <div className="w-screen h-screen">
        <div className="p-3 gap-5 flex items-cetner shadow-lg shadow-gray-500/20">
            <button onClick={()=>setHandBurger(!handBurger)}>
                <GiHamburgerMenu/>
            </button>
            <span className="font-bold text-lg">NShades</span>
        </div>
        <div className="h-full flex">
          <div className={`bg-[#ec4755] text-white p-2 px-5 w-[17rem] ${(handBurger)?"visible":"hidden"}` }>
            {/* Side bar container */}
            {options.map((option , index) => (
              <div onClick={() => handlePageSelection(option.name)}>
                  <SideMenu 
                      icon={option.icon} 
                      menuName={option.name} 
                      options={option.optionlist} 
                      key={index}
                  />
              </div>
            ))}
            
          </div>
          <div className="w-full">
              {currentPage}
          </div>
        </div>
      </div>
    );
}
