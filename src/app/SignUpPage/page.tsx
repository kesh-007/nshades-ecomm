"use client"

import { useState } from "react";

export default function SignUpPage(){

    const [email , setEmail] = useState("");
    const [password , setPassword] = useState("");
    const [confirmPassword , setConfirmPassword] = useState("");

    return (
        <div className="bg-yellow-100 p-5 h-screen">
            <div className="w-full flex rounded-2xl h-full">
                <div className="bg-white p-10 w-full">
                    <p><b className="text-2xl">NShades</b></p>
                    <p className="mt-10 text-yellow-500"><b>Sign Up</b></p>
                    <p className="text-sm text-gray-400 mt-2">Sign up to create an account</p>
                    <div className="mt-10 flex flex-col">

                        <div className="w-full mb-5 sm:mb-5">
                            <p className="text-gray-400 w-full">Email</p>
                            <input type={"email"} className="flex outline outline-gray-200 w-full mt-2 p-2 sm:p-3" onChange={(e) => setEmail(e.target.value)}></input>
                        </div>

                        <div className="w-full mb-5 sm:mb-5">
                            <p className="text-gray-400 w-full">Password</p>
                            <input type={"password"} className="flex outline outline-gray-200 w-full mt-2 p-2 sm:p-3" onChange={(e) => setPassword(e.target.value)}></input>
                        </div>
                        <div className="w-full sm:mb-5">
                            <p className="text-gray-400 w-full">Confirm password</p>
                            <input type={"password"} className="flex outline outline-gray-200 w-full mt-2 p-2 sm:p-3" onChange={(e) => setConfirmPassword(e.target.value)}></input>
                        </div>
                        <div className="w-full flex my-5 mb-4 mt-20 sm:my-10 justify-center">
                            <button className="bg-yellow-500 text-white font-bold w-full p-3" onClick={(e) => {console.log(email , password , confirmPassword)}}>Sign Up</button>
                        </div>

                        <div className="flex justify-center mt-10 sm:mt-5">
                            <p className="text-gray-400 text-sm sm:text-lg">Click this to sign up for the NShades Stores <button className="text-yellow-500 outline px-1 mx-2 rounded outline-gray-300">Sign Up</button></p>
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
                <div className="bg-yellow-200 w-full hidden md:block">
                    {/*Place the right-side content hear*/}
                </div>
            </div>
        </div>
    );

}