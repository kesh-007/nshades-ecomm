"use client"

import { useState } from "react";
import Image from '../../../public/assets/images/LandingSVG.svg';
import config from "../../config/index.json";
import { AiFillEye, AiOutlineEye } from "react-icons/ai";

export default function SignUpPage(){

    const [email , setEmail] = useState("");
    const [password , setPassword] = useState("");
    const [confirmPassword , setConfirmPassword] = useState("");
    const [showPassword , setShowPassword] = useState(false);
    
  const { mainHero } = config; 
    return (
        <div className=" md:p-5 h-full">
            <div className="w-full flex rounded-2xl h-full ">
                <div className="bg-white p-10 w-[70rem] gap-2 flex flex-col">
                    <div className="flex justify-center m-3">
                    <p><b className="text-3xl font-bold">NShades</b></p>

                    </div>
                    <p className="mt-1 text-[#ec4755] text-2xl "><b>Sign Up</b></p>
                    <p className="text-sm text-gray-400 mt-2">Sign up to create an account</p>
                    <div className="mt-10 flex flex-col">

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

                        <div className="flex justify-center mt-10 sm:mt-5">
                            <p className="text-gray-400 text-sm sm:text-lg">Click this to sign up for the NShades Stores <button className="text-[#ec4755] outline px-1 mx-2 rounded outline-gray-300">Sign Up</button></p>
                        </div>
                        
                        
                        {/*<div>
                            <p className="text-gray-400">Email</p>
                            <input type={"email"} className="flex outline outline-gray-200 w-500 mt-2 p-3"></input>
                        </div>
                        <div>
                            <p className="text-gray-400">Password</p>
                            <input type={"password"} className="outline outline-gray-200 w-full mt-2 p-3"></input>
                        </div>
                        <div>
                            <p className="text-gray-400">Confirm password</p>
                            <input type={"password"} className="outline outline-gray-200 w-full mt-2 p-3"></input>
                        </div>
                        <div className="flex mt-20 justify-center">
                            <button className="bg-yellow-500 text-white font-bold px-40 p-2 py-4">Sign Up</button>
                        </div>
                        <div className="flex justify-center mt-5">
                            <p className="text-gray-400">Click this to sign up for the NShades Stores <button className="text-yellow-500 outline px-1 mx-2 rounded outline-gray-300">Sign Up</button></p>
    </div>*/}
                    </div>

                </div>
                <div className=" w-full hidden md:block">
                    {/*Place the right-side content hear*/}
                    <img
                        src={mainHero.img}
                    />
                </div>
            </div>
        </div>
    );

}