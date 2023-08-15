"use client"
import { useState } from "react";
import {mainHero } from "../../config/index.json";
import { AiFillEye, AiOutlineEye } from "react-icons/ai";

export default function NshadesStorePage(){

    const [email , setEmail] = useState("");
    const [password , setPassword] = useState("");
    const [confirmPassword , setConfirmPassword] = useState("");
    const [storeName , setStoreName] = useState("");
    const [showPassword , setShowPassword] = useState(false);

    return (
        <div className=" p-5 h-screen">
            <div className="w-full flex rounded-2xl h-full">
                <div className="bg-white max-md:p-10 w-full w-[70rem]">
                    <p><b className="text-2xl flex max-sm:justify-center">NShades Stores</b></p>
                    <p className="mt-10 text-[#ec4755]"><b>Sign Up</b></p>
                    <p className="text-sm text-gray-400 mt-2">Sign up to create an account</p>
                    <div className="mt-10 flex flex-col">
 
                        <div className="w-full mb-5 sm:mb-5">
                            <p className="text-gray-400 w-full">Your Store's Name</p>
                            <input type={"email"} className="flex outline outline-gray-200 w-full mt-2 p-2 sm:p-3" onChange={(e) => setStoreName(e.target.value)}></input>
                        </div>

                        <div className="w-full mb-5 sm:mb-5">
                            <p className="text-gray-400 w-full">Email</p>
                            <input type={"email"} className="flex outline outline-gray-200 w-full mt-2 p-2 sm:p-3" onChange={(e) => setEmail(e.target.value)}></input>
                        </div>

                        <div className="w-full mb-5 sm:mb-5">
                            <p className="text-gray-400 w-full mb-2">Password</p>
                            <div className="flex items-center outline outline-gray-200 pr-2">
                                <input type={(showPassword)?"text":"password"} className="flex outline-none w-full p-2 sm:p-3" onChange={(e) => setPassword(e.target.value)} maxLength={25} minLength={8}></input>
                                <div className = {(password.length == 0)?"hidden":"visiable"} onClick={()=>setShowPassword(!showPassword)}  >
                                    {(!showPassword)?<AiFillEye className=" h-[1.5rem] w-[1.5 rem]"/>:<AiOutlineEye/>}
                                </div>
                            </div>
                            
                        </div>
                        
                        <div className="w-full sm:mb-5">
                            <p className="text-gray-400 w-full mb-2">Confirm password</p>
                            {/* <input type={"password"} className="flex outline outline-gray-200 w-full mt-2 p-2 sm:p-3" onChange={(e) => setConfirmPassword(e.target.value)}></input> */}
                            <div className="flex items-center outline outline-gray-200 pr-2">
                                <input disabled = {(password.length == 0)?true:false} type={(showPassword)?"text":"password"} className="flex outline-none w-full p-2 sm:p-3" onChange={(e) => setConfirmPassword(e.target.value)} maxLength={25} minLength={8}></input>
                                <div className={(confirmPassword.length == 0)?"hidden":"visiable"} onClick={()=>setShowPassword(!showPassword)}  >
                                    {(!showPassword)?<AiFillEye className=" h-[1.5rem] w-[1.5 rem]"/>:<AiOutlineEye/>}
                                </div>
                            </div>
                            
                        </div>
                        <div className="w-full flex my-5 mb-4 mt-10 sm:my-10 justify-center">
                            <button disabled = {((password.length != 0 || confirmPassword.length != 0) && (password === confirmPassword))?false:true} className={`${((password.length != 0 || confirmPassword.length != 0) && (password === confirmPassword))?"bg-[#ec4755] hover:bg-red-600":"bg-gray-300"} rounded-lg  text-white font-bold w-full p-3 `} onClick={(e) => {console.log(email , password , confirmPassword)}}>Sign Up</button>
                        </div>
                    </div>

                </div>
                <div className="w-full hidden md:block">
                    {/*Place the right-side content hear*/}
                    <img src={mainHero.img} className="transform scale-x-[-1]"/>
                </div>
            </div>
        </div>
    );

}