// import Link from "next/link";
// import { createPost } from "~/app/actions";
// import { getServerAuthSession } from "~/server/auth";
// import { api } from "~/trpc/server";
// import DataTableDemo from './orders/page' 

import  Main  from "./Main/page";
import OrderDetails from "./OrdersDetails/page";
import Order from "./Orders/page";
import Inventory from "./Inventory/page";

import  { Toaster } from 'react-hot-toast';
// Orders page
// Orders details page
// inventory page
// signup page
//landing page.

export default async function Home() {

  return (
    <main className=" ">
      <Main pages={<Order/>}/>
      <Toaster />
    </main>
  );
}

