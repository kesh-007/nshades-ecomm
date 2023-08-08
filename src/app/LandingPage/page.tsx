"use client"

function NavBar(){
    return (
        <div className="flex shadow-md bg-white w-full justify-between items-center p-2 px-10 text-xl rounded-bl-2xl rounded-br-2xl">
                <div>
                    <p><b>NShades</b></p>
                </div>
                <div className="flex text-lg hidden sm:flex">
                    <div className="w-full ml-5">
                        <input placeholder="Enter location" className="p-2  outline w-full outline-gray-200 rounded-l-lg"></input>
                    </div>
                    
                    <div className="w-full mr-5">
                        <input placeholder="Search Product" className="p-2 outline w-full outline-gray-200 rounded-r-lg"></input>
                    </div>
                </div>
                <div className="flex text-sm">
                    <button className="bg-black rounded-3xl text-white p-2 px-5 mx-10">Sign Up</button>
                    <button className="rounded-3xl border p-2 px-5 ">Sign In</button>
                </div>
        </div>
    );
}

export default function LandingPage(){

    const top_card_details = [
    {name : "card2" , image : "https://tse1.mm.bing.net/th?id=OIP.2U3fVBus4LxbbNfP58CQSwHaEK&pid=Api&P=0&h=180"},
    {name : "card2" , image : "https://tse1.mm.bing.net/th?id=OIP.8zwne0-QVfHUjEIVE0SgMwHaE8&pid=Api&P=0&h=180"},
    {name : "card2" , image : "https://tse1.mm.bing.net/th?id=OIP.jKH_RfWfNJYHKzfHSoVtqQHaFj&pid=Api&P=0&h=180"},
    {name : "card2" , image : "https://tse2.explicit.bing.net/th?id=OIP.9rX_TFJr_1M-zCjp635pWAHaE8&pid=Api&P=0&h=180"},
    {name : "card2" , image : "https://tse1.mm.bing.net/th?id=OIP.2U3fVBus4LxbbNfP58CQSwHaEK&pid=Api&P=0&h=180"},
    {name : "card2" , image : "https://tse1.mm.bing.net/th?id=OIP.8zwne0-QVfHUjEIVE0SgMwHaE8&pid=Api&P=0&h=180"},
    {name : "card2" , image : "https://tse1.mm.bing.net/th?id=OIP.jKH_RfWfNJYHKzfHSoVtqQHaFj&pid=Api&P=0&h=180"},
    {name : "card2" , image : "https://tse2.explicit.bing.net/th?id=OIP.9rX_TFJr_1M-zCjp635pWAHaE8&pid=Api&P=0&h=180"},
    
];

    const bottom_card_details = [
        
    {name : "card2" ,
     image : "https://tse1.mm.bing.net/th?id=OIP.2U3fVBus4LxbbNfP58CQSwHaEK&pid=Api&P=0&h=180" ,
    detail : "ABCD  " 
    },

    {name : "card2" ,
     image : "https://tse1.mm.bing.net/th?id=OIP.8zwne0-QVfHUjEIVE0SgMwHaE8&pid=Api&P=0&h=180" ,
     detail : "ABCD",
    },
    {name : "card2" ,
     image : "https://tse1.mm.bing.net/th?id=OIP.2U3fVBus4LxbbNfP58CQSwHaEK&pid=Api&P=0&h=180" ,
    detail : "ABCD  " 
    },

    {name : "card2" ,
     image : "https://tse1.mm.bing.net/th?id=OIP.8zwne0-QVfHUjEIVE0SgMwHaE8&pid=Api&P=0&h=180" ,
     detail : "ABCD",
    },

    ];

    return (
        <div className="h-screen">
            <NavBar/>
            
            <div className="flex mt-5  sm:hidden">
                    <div className="w-full ml-5">
                        <input placeholder="Enter location" className="p-2  outline w-full outline-gray-200 rounded-l-lg"></input>
                    </div>
                    
                    <div className="w-full mr-5">
                        <input placeholder="Search Product" className="p-2 outline w-full outline-gray-200 rounded-r-lg"></input>
                    </div>
                </div>
            <div className="sm:mt-5">
                <p className="font-bold text-xl px-8 mt-5">Products</p>
                <div className="w-full overflow-x-scroll scroll whitespace-nowrap mt-1 p-4">
                    {top_card_details.map((details , index) => (
                        <CardTop key={index} name={details.name} image={details.image}/>
                    ))}
                </div>
            </div>
            <div >
                <p className="font-bold text-xl px-8 mt-5">Shops</p>
                <div className="h-full w-full overflow-x-scroll scroll whitespace-nowrap mt-2 p-4">
                    {bottom_card_details.map((details , index) => (
                        <CardBottom key={index} name={details.name} image={details.image} details={details.detail}/>
                    ))}
                </div>
            </div>
        </div>
    );
}

function CardTop({name , image , details}){

    return (
        <div className= "shadow-lg shadow-gray-500/50 w-[40%] sm:w-[20%] inline-block mx-2 sm:mx-5 h-[250px]  rounded-xl outline outline-gray-300">
            <div className="flex flex-col items-center  h-full">        
                <div className="object-fill h-full relative">
                    <img src={image} className="max-w-[100%] h-full hover:bg-black object-cover rounded-xl border-none"></img>
                    <div className="absolute rounded-xl  inset-0 bg-black opacity-0 hover:opacity-50 transition-opacity"></div>
                    <div className="flex items-center justify-center absolute rounded-xl  inset-0 bg-black opacity-0 hover:opacity-50 transition-opacity">
                        <p className="text-white text-xl font-bold">{name}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

function CardBottom({name , image , details}){

    return (
        <div className= "shadow-lg shadow-gray-500/50 inline-block mx-2 sm:mx-5 h-[250px]  rounded-xl outline outline-gray-300">
            <div className="flex flex-col items-center  h-full">        
                <div className="object-fill h-full relative">
                    <img src={image} className="max-w-[100%] h-full hover:bg-black object-cover rounded-xl border-none"></img>
                    <div className="absolute rounded-xl  inset-0 bg-black opacity-0 hover:opacity-50 transition-opacity"></div>
                    <div className="flex items-center justify-center absolute rounded-xl  inset-0 bg-black opacity-0 hover:opacity-50 transition-opacity">
                        <p className="text-white text-xl font-bold">{name}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}