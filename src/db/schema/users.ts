import { int, mysqlEnum, mysqlTable, serial,text, uniqueIndex, varchar } from 'drizzle-orm/mysql-core';
 
export const users = mysqlTable('users',{
    user_id:serial('user_id').primaryKey(),
    name:text('name'),
    email:varchar('email',{length:254}),
    shopname:text('shopname'),
    password:text('password'),
    phonenumber:varchar("phonenumber",{length:10}),

})