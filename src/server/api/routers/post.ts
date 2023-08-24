import { z } from "zod";
import { db } from "~/db";
import { users } from "~/db/schema/users";
import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from "~/server/api/trpc";

 export  const  PostRouter = createTRPCRouter({
  post:publicProcedure
  .input(z.object({text:z.string()}))
  .mutation(async ({input})=>{
    await db.insert(users).values({
      name:input.text,
    })
    console.log(users)
  })

}) 