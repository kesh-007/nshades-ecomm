import { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const options : NextAuthOptions = {
    providers : [
        Credentials({
            name : "Credentails",
            credentials : {
                username : {
                    label : "username",
                    type : "text",
                    placeholder : "Enter your name : ",
                },
                password : {
                    label : "Password",
                    type : "password",
                    placeholder : "Enter your password",
                }
            },
            async authorize(credentials) {
                const user = { name : "harishm" , password : "123"}
                if (credentials?.username === user.name && credentials?.password === user.password){
                    return user
                }
                else{
                    return null
                }
            }
        }),
    ]
}