
import {RxDashboard} from "react-icons/rx";
import {HiOutlineShoppingBag} from "react-icons/hi";
import {LuSettings} from "react-icons/lu";
import {AiOutlineUser} from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { useEffect, useState } from "react";
import Inventory from "~/app/Inventory/page";
import Order from "~/app/Orders/page";
import ProductsPage from "~/app/ProductsPage/page";
import Editing from "~/app/Editing/page";
import Template from "./Template";
import OrderDetails from "~/app/OrdersDetails/page";


function SideMenu({ id , icon , menuName , options , onClick , sidebar_trigger ,show_default_nav , open , current_page}) {

  // const [menuPressed, setMenuPressed] = useState(0);
  const [selectedOption , setSelectedOption] = useState(false);
  const [data , setData] = useState("data");


  function handlePageSelection(option){
    if (option === "Inventory"){
      onClick(<Inventory/>);
    }
    else if (option === "All Orders"){
      onClick(<Order/>);
    }
    else if (option === "All Products"){
      onClick(<Editing 
        title={"Add Product"} 
        description={"Add the details about the product you're going to post."}
        data = {data}
        />)
    }
    else if (option === "Checkouts"){
      onClick(<OrderDetails/>)
    }
    else if (option === "Edit Page"){
      sidebar_trigger(false);
      show_default_nav(false);
      onClick(<Template trigger={sidebar_trigger} nav = {show_default_nav} current_page = {current_page}/>)
    }
  }
  
  
  return (
    <div
      className="flex flex-col "
    >
      <div 
      
      // onClick={() => setMenuPressed(id)}
      className="flex w-full justify-between items-center active: p-3">
        <div>
            {icon}
        </div>
        <p className="m-1 active:underline"><b>{menuName}</b></p>

        {
            // (!menuPressed)?
            (!open)?
                <IoMdArrowDropdown/>
            :
                <IoMdArrowDropup/>
        }
      </div>
      <div className="w-full flex justify-center">
        {/* {(menuPressed == id) ? ( */}
        { open ? (
          <div className=" w-full ml-5 ">
            {options.map((option:any, index:any) => (
              <div 

              onClick={() => {
                handlePageSelection(option.name)
                setSelectedOption(!selectedOption)
              }} 
              className={`flex items-center justify-end hover:bg-red-700 px-2 ml-5`}>
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

    const [handBurger , setHandBurger] = useState(true);
    const [currentPage , setCurrentPage] = useState(page);
    const [showNav , setShowNav] = useState(true); 
    const [isMobile, setIsMobile] = useState(false);
    const [menuOpen , setMenuOpen] = useState(null);

    useEffect(() => {
      function handleResize() {
        setIsMobile(window.innerWidth <= 768);
        setHandBurger(window.innerWidth > 768);
         // Adjust the breakpoint as needed
      }
  
      // Initial check
      handleResize();
  
      // Add event listener to update when window is resized
      window.addEventListener('resize', handleResize);
  
      // Clean up the event listener when component unmounts
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);

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

        {icon : <LuSettings/> , name : "Settings" , optionlist : [{icon : <HiOutlineShoppingBag/> , name : "Edit Page"} , "option2"] },
        
      ];

      function handleMenuClick(index){
        
        setMenuOpen(index == menuOpen ? null : index);
      
    }

    return (
      <div className="w-screen h-screen overflow-y-scroll">
        <div className={`p-3 gap-5 flex items-cetner border ${(showNav)?"visible":"hidden"}`}>
            <button onClick={()=>setHandBurger(!handBurger)}>
                <GiHamburgerMenu/>
            </button>
            <span className="font-bold text-lg">NShades</span>
        </div>
        <div className="h-full flex">
          <div className={`bg-[#ec4755] text-white p-2 px-5 w-[17rem] max-sm:absolute z-[1] top-0 bottom-0 p-2 ${(handBurger)?"visible":"hidden"}` }>
            {/* Side bar container */}
            <div className="sm:hidden">
                <button onClick={()=> setHandBurger(!handBurger)}>
                    <GiHamburgerMenu/>
                </button>
            </div>
            {options.map((option , index) => (
              <div onClick={()=>handleMenuClick(index)}>
                <SideMenu 
                      id = {index + 1}
                      icon={option.icon} 
                      menuName={option.name} 
                      options={option.optionlist} 
                      key={index}
                      onClick = {setCurrentPage}
                      open={(menuOpen === index)}
                      sidebar_trigger={setHandBurger}
                      show_default_nav = {setShowNav}
                      current_page={setCurrentPage}
                  />
              </div>
                  
            ))}
            
          </div>
          <div className="w-full overflow-y-scroll">
              {/* {console.log(currentPage)} */}
              {currentPage}
          </div>
        </div>
      </div>
    );
}
