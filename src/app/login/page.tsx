"use client"
import Link from "next/link"
import React, { useState } from "react";
import { useRouter } from "next/navigation";
// import { axios } from "axios";



export default function LoginPage() {
const [user,setUser] = useState({
    email:"",
    password:"",
  
})

const onLogin = () => {}



    return (
        <>
      <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-black text-white">
        <hr />       
        <h1>Login</h1>
      
              <label htmlFor="email"> email</label>
        <input 
        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
        id="email"
        type="email"
        value={user.email}
            onChange={(e) =>setUser({...user,email:e.target.value})} 
            placeholder="email"
            />
              <label htmlFor="password"> password</label>
        <input 
        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
        id="password"
        type="password"
        value={user.password}
            onChange={(e) =>setUser({...user,password:e.target.value})} 
            placeholder="password"
            />

        <button onClick={onLogin} className="p-2 border border-gray-300 rounded-lg
        mb-4 focus:outline-none focus:border-gray-600"> Login Here</button>

        <Link href="/signup">Signup here</Link>

      </div>
        </>
    )
}