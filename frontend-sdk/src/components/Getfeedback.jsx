import React, { useEffect } from 'react'
import Navbar from './Navbar'
import { useState } from 'react'
import axios from 'axios'
export default function Getfeedback() {
    const [data,setData]=useState([])
useEffect(()=>{
   
    const getfeed=async ()=>{
        const cname=window.localStorage.getItem('catername');
        console.log(cname);
        const res=await axios.post("http://localhost:3001/auth/getfeed",{cname:cname})
        console.log(res.data)
        console.log(res.data[0])
        setData(res.data);
        console.log(data)
    }
getfeed()

},[])
  return (
    <>
    <Navbar/>
    <div class="border border-solid border-gray-400 p-4 h-max">
     
    {data?.map((data) => (
    <>
    <h1>{data.uname}</h1>
    <h1>{data.feed}</h1>
    <hr />
    </>
))}
     
    </div>

    
    
    </>
  )
}
