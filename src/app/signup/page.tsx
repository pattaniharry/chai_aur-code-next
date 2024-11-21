"use client"
import Link from "next/link"
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
// import { axios } from "axios";



export default function SignupPage() {
  const router = useRouter();
const [user,setUser] = useState({
    email:"",
    password:"",
    username:"",
})
const [buttonDisabled, setButtonDisabled] = React.useState(false);
const [loading , setLoading] = useState(false);

useEffect(() => {
 if(user.email.length>0 && user.username.length>0 && user.password.length>0){
  setButtonDisabled(false)

 }
 else{
  setButtonDisabled(true)
 }

}, [user])


const onSignup = async () => {

  try {
    
  } catch (error) {
    
  }finally{
    setLoading(false)
  }

}





    return (
        <>
      <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-black text-white">
        <hr />       
        <h1>{loading ? "Processing" : "Sign Up"}</h1>
        <label htmlFor="username"> username</label>
        <input 
        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
        id="username"
        type="text"
        value={user.username}
            onChange={(e) =>setUser({...user,username:e.target.value})} 
            placeholder="username"
            />
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

        <button onClick={onSignup} className={`p-2 border border-gray-300 rounded-lg
        mb-4 focus:outline-none ${buttonDisabled ? "bg-red-700" : "bg-inherit" } focus:border-gray-600`}>{buttonDisabled? "No Sign up": "Sign up"}</button>

        <Link href="/login">Login here</Link>

      </div>
        </>
    )
}