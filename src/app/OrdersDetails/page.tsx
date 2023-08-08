"use client"

import { useState } from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { toast } from "react-hot-toast";

import Select from '@mui/material/Select';
import { FormControl, InputLabel, MenuItem } from "@mui/material";

export default function  OrderDetails(){

    const billDetails = [
    {
        subtotal_items : 2,
        subtotal_price : 385.00,
        shipping_name : "priority mail",
        shipping_price : 60,
        
    },

];

    const [option , setOption] = useState("More");

    return (
        <div className="h-screen px-5 py-3 w-full">
            <section className="mb-10 mt-5">
                <p className="text-orange-500 my-3">Order's Details {">"}</p>
                <p className=""><b>Order's Details</b></p>
            </section>
            <section>
                <p className="text-orange-500 font-bold mb-5">Payment section</p>
                <div className="sm:flex w-full gap-5">
                    <div className="flex flex-col w-full shadow-lg shadow-500/50 rounded p-3"> 
                        <div className="border-b">
                            <div className="p-3">
                                <p className="font-bold">Payment Authorized </p>
                            </div>
                        </div>
                        <div className="flex flex-col">
                            {/*middle secton */}
                            {
                            billDetails.map((index , value) => (
                                
                            <div className="flex justify-between w-full p-3">
                                <p className="font-bold">Subtotal</p>
                                <p className="text-gray-500">2 items</p>
                                <p>Rs . 385.00</p>
                            </div>
                            ))}
                        </div>
                            <div>
                                <div className="p-3 border-y">
                                    <p className="font-bold">Paid by customer</p>
                                </div>
                                <div className="p-3 flex justify-end">
                                    <div className="flex gap-5">
                                    <FormControl className="w-[100px]">
                                        <InputLabel id="demo-simple-select-label">More</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={option}
                                            label={"More"}
                                            onChange={(e) => setOption(e.target.value)}
                                        >
                                            <MenuItem value={10}>Ten</MenuItem>
                                        </Select>
                                    </FormControl>

                                        <button className="bg-orange-500 p-3 text-white rounded">Finish Payment</button>
                                    </div>
                                </div>
                            </div>
                    </div>
                    
                    <Card email={"example.com"} shippingAddress = {"shipping address"} BillingAddress = {"billing address"}/>
                </div>
            </section>
            <section>
                <TimeLine/>
            </section>
        </div>
    );

}


function  TimeLine(){

    const [discription , setDiscription] = useState("");

    const handleKeyDown = (event) => {
        // Access the pressed key using event.key
        if (event.key === 'Enter') {
            let data = new Date()
            if (discription.length === 0){
                toast.error("Please Type something." , {duration : 1000});
                return null;
            }
            setEvents([{
                date : data.getDate() +"-"+data.getMonth() +"-"+ data.getFullYear() ,
                 description : discription} , ...events]);
            toast.success("Event has added");
            setDiscription("");
            
        }

      };

    const [events , setEvents] = useState([
        {
          date: "2023-08-01",
          description: "Description of Event 1",
        },
        {
          date: "2023-08-05",
          description: "Description of Event 2",
        },
      ]);
    
      return (
        <div className="w-full rounded flex flex-col my-5 bg-gray-200 shadow-lg shadow-gray-20/500 p-3">

            <div className="w-[100%] border rounded">
                <input value={discription} placeholder="Leave a commet" onKeyDown={(e) => handleKeyDown(e)} className="w-full p-3 outline-none rounded" onChange={(e) => setDiscription(e.target.value)}></input>
            </div>
            
            <VerticalTimeline>
      {
        events.map((event, index) => (
            <VerticalTimelineElement
            key={index}
            date={event.date}
            dateClassName="date"
            iconStyle={{ background: "#f56a6a", color: "#fff" }}
            contentStyle={{ textAlign: "left", paddingLeft: "2rem" }}            
            >
            <h3 className="vertical-timeline-element-title">Event</h3>
            <p className="vertical-timeline-element-description">{event.description}</p>
            </VerticalTimelineElement>
      ))}
    </VerticalTimeline>
        </div>
    );

}

function Card({email , shippingAddress , BillingAddress}){
    return (
        
    <div className="sm:block hidden flex flex-col shadow-md shadow-gray-300 rounded-lg w-fit flex-1">
        <div className="p-l-3 border-b px-10 p-3 w-full">
            <p className="font-bold">Contact</p>
            <p className="text-gray-500 w-full">{email}</p>
        </div>
        <div className="border-y px-10 p-3 w-full">
            <p className="font-bold">Shipping address</p>
            <p className="text-gray-500 w-full">{shippingAddress}</p>
        </div>
        <div className="border-t px-10 p-3">
            <p className="font-bold">Billing Address</p>
            <p className="text-gray-500">{BillingAddress}</p>
        </div>
    </div>
    );
}