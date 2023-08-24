import type { Config } from "drizzle-kit";
export default {
    schema:"./src/db/schema/users.ts",
    out:"./drizzle",
    connectionString:process.env.DATABASE_URL,
    breakpoints:true
    
    

} satisfies Config