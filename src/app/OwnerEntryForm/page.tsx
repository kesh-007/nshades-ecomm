"use client"

import { useState } from "react";
import React, { useEffect } from 'react';
import $ from 'jquery';


function PhoneSection(props:any){

    const [OTP , setOTP] = useState(props.otp);
    const [verify , setVerify] = useState(false);
    const [verifyOtp , setVerifyOtp] = useState("");
    const [resend , setResend] = useState(false);
    const [number , setNumber] = useState("");


    function isNumeric(inputStr:any) {
        return /^[0-9]+$/.test(inputStr);
      }

    function handleVerify(){
        console.log(number)
        if(isNumeric(number)){
            setVerify(!verify);
        }
    }

    function handleResendOtp(){
        setResend(!resend);
        console.log("new otp" , OTP);
    }

    
    useEffect(() => {
        
        const settings = {
          async: true,
          crossDomain: true,
          url:
            `https://www.fast2sms.com/dev/bulkV2?authorization=TEeXoeD2q62KfGqQTpkvdgJIiLuwqIW4UbelR7WdPUT6i0oIDmpHVKMNuhgN&variables_values=${String(OTP)}&route=otp&numbers=${number}`,
          method: 'GET',
        };
    
        // Make the AJAX request using jQuery's $.ajax() method
        $.ajax(settings)
          .done(function (response:any) {
            console.log(response);
          });
      }, [verify , OTP]);

    return (
        <>
        <div className="flex w-full flex-col">

                        <div className="flex justify-center flex-col items-start m-[0.5rem]">
                            <label>Phone</label>
                            <div className="flex max-sm:w-full flex-col mt-5">
                                <div className="flex items-center border-[2px] border-gray-200 rounded-lg">
                                    <p className="my-2 px-1 border-gray-200">+91</p>
                                    <input maxLength={10} type={"tel"} className=" w-full md:w-[50vh] px-2 rounded my-2 outline-none" onChange={(e)=>{
                                        setNumber(e.target.value)
                                        
                                    }}></input>
                                </div>
                                {
                                    (number.length == 10)?
                                        (verify == false)?
                                            <button className="text-blue-500 text-lg rounded mx-auto my-2" onClick={handleVerify}>Verify phone number</button>
                                        :
                                                <div className="w-full flex justify-between items-center mt-5">
                                                        <p className="text-gray-500 text-sm  md:text-md">We've just sent you a verification code.</p>
                                                        <button className="text-blue-500 text-sm md:text-md rounded" onClick={()=>setOTP(Math.floor(1000 + Math.random() * 9000))}>Resend OTP</button>           
                                                </div>
                                    :
                                        <></>
                                }
                            </div>
                        </div>
                        
                        <div>
                            
                        {(verify)?
                            <div>
                                
                                <div className="flex sm:w-1/5  justify-center flex-col items-start m-[0.5rem]">
                                    <label>OTP Verification</label>
                                    <input type={"tel"} maxLength={4} className="outline w-full outline-gray-200 p-2 rounded my-2" onChange={(e) => setVerifyOtp(e.target.value)}></input>
                                </div>
                            </div>
                            :
                            <></>
                            }
                        </div>
                </div>
                
                <div className="flex justify-end">
            
                    {
                        (OTP != Number(verifyOtp))?
                        
                            <button className="p-2 bg-gray-400 text-white rounded px-10 mb-3" disabled>Submit</button>
                        :
                    
                            <button className="p-2 bg-blue-500 text-white rounded px-10 mb-3">Submit</button>
                    }
                </div>
        </>
    );
}


export default function OwnerEnteryForm(){

    const [firstName , setFirstName] = useState("");
    const [lastName , setLastName] = useState("");
    const [zipcode , setZipCode] = useState("");
    const [state , setState] = useState("Select");
    const [address , setAddress] = useState("");
    const [suit , setSuit] = useState("");
    const [city , setCity] = useState("");

    
    const otp = Math.floor(1000 + Math.random() * 9000);


    console.log(otp);
    const indianStates = [
        {code: "NON", name : "Select"},
        { code: "AP", name: "Andhra Pradesh" },
        { code: "AR", name: "Arunachal Pradesh" },
        { code: "AS", name: "Assam" },
        { code: "BR", name: "Bihar" },
        { code: "CT", name: "Chhattisgarh" },
        { code: "GA", name: "Goa" },
        { code: "GJ", name: "Gujarat" },
        { code: "HR", name: "Haryana" },
        { code: "HP", name: "Himachal Pradesh" },
        { code: "JH", name: "Jharkhand" },
        { code: "KA", name: "Karnataka" },
        { code: "KL", name: "Kerala" },
        { code: "MP", name: "Madhya Pradesh" },
        { code: "MH", name: "Maharashtra" },
        { code: "MN", name: "Manipur" },
        { code: "ML", name: "Meghalaya" },
        { code: "MZ", name: "Mizoram" },
        { code: "NL", name: "Nagaland" },
        { code: "OD", name: "Odisha" },
        { code: "PB", name: "Punjab" },
        { code: "RJ", name: "Rajasthan" },
        { code: "SK", name: "Sikkim" },
        { code: "TN", name: "Tamil Nadu" },
        { code: "TG", name: "Telangana" },
        { code: "TR", name: "Tripura" },
        { code: "UP", name: "Uttar Pradesh" },
        { code: "UT", name: "Uttarakhand" },
        { code: "WB", name: "West Bengal" }
      ];
      
      

    return (
        <div className="h-screen px-10 md:px-20 pt-5">
            <div className="h-full">
                <div className="flex text-lg flex-col justify-center items-center">
                    <p><b>Add an address so you can get paid.</b></p>
                    <p className="text-sm text-gray-500">This will be used as your default business address.</p>
                </div>
                <div className="flex flex-col justify-center mt-10">
                    <div className="flex justify-center flex-col items-center">
                    <div className="block sm:flex w-full">
                        <div className="flex justify-center flex-col w-full items-start m-[0.5rem]">
                            <p>First name</p>
                            <input type={"text"} className="outline p-2 outline-gray-200 rounded my-2 w-full" onChange={(e) =>setFirstName(e.target.value)}></input>
                        </div>
                        <div className="flex justify-center flex-col w-full items-start m-[0.5rem]">
                            
                            <label>Last name</label>
                            <input type={"text"} className="outline outline-gray-200 p-2 rounded my-2 w-full" onChange={(e) =>setLastName(e.target.value)}></input>
                        </div>
                    </div>
                    <div className="flex w-full"> 
                        <div className="flex justify-center w-full flex-col items-start m-[0.5rem]">
                            <label>Address</label>
                            <textarea rows={4} className="outline outline-gray-200 p-2  w-full rounded my-2 resize-none" onChange={(e) =>setAddress(e.target.value)}></textarea>
                        </div>

                        <div className="flex justify-center w-full  flex-col items-start m-[0.5rem]">
                            
                            <label>Suit</label>
                            <textarea rows={4} className="outline outline-gray-200 p-2  w-full rounded my-2 resize-none" onChange={(e) =>setSuit(e.target.value)}></textarea>

                        </div>
                    </div>
                    
                    <div className="flex w-full">

                        <div className="flex justify-center w-full flex-col items-start m-[0.5rem]">
                            <label>City</label>
                            <input type={"text"} className="outline w-full outline-gray-200  p-2 rounded my-2" onChange={(e) =>setCity(e.target.value)}></input>
                        </div>
                        <div className="flex justify-center flex-col w-full items-start m-[0.5rem]">
                            <label>State</label>
                            <select className="w-full p-2 m-[0.5rem] border-[2px] border-gray-100 rounded" onChange={(e) =>setState(e.target.value)}>
                                {
                                    indianStates.map((state)=>(
                                        <option key={state.code}>{state.name}</option>
                                    ))
                                }
                            </select>
                        </div>
                        
                            <div className="flex w-full justify-center flex-col items-start m-5">
                                <label>ZIP</label>
                                <input className="outline outline-gray-200 w-full p-2 rounded my-2" onChange={(e) =>setZipCode(e.target.value)}></input>
                            </div>
                    </div>
                        <PhoneSection otp={otp}/>
                    </div>
                </div>
            </div>

        </div>
    );
}