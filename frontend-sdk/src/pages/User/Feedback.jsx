import React from 'react'
import Navbar from '../../components/Navbar'
import { useState } from 'react'
import axios from 'axios'
export default function Feedback() {
    const [cname,setCname]=useState('')
    const [feedback,setFeedback]=useState('')
    function submitfeed(){
        console.log("hiii")
        console.log(cname);
        console.log(feedback)
        const uname=window.localStorage.getItem('Uname')
        const res=axios.post("http://localhost:3001/auth/feedback",{cname:cname,feedback:feedback,uname:uname})
        alert("feedback sent")
    }
  return (
    <>
    <Navbar/>
    <div className='my-12 mx-24'>
    <form>
    <div class="grid gap-6 mb-6 md:grid-cols-2">
        <div>
            <label for="catername" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Cater name</label>
            <input onChange={(e)=>{setCname(e.target.value)}} type="text" id="catername" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required />
        </div>
        </div>
        </form>
        </div>
<div className='my-12 mx-8'>    
<form>
   <div class="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
       <div class="px-4 py-2 bg-white rounded-t-lg dark:bg-gray-800">
           <label for="comment" class="sr-only">Your feedback</label>
           <textarea onChange={(e)=>{setFeedback(e.target.value)}}id="comment" rows="4" class="w-full px-0 text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400" placeholder="Write a feedback..." required ></textarea>
       </div>
       <div class="flex items-center justify-between px-3 py-2 border-t dark:border-gray-600">
           <button onClick={submitfeed} class="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-red-700 rounded-lg focus:ring-4 focus:ring-red-200 dark:focus:ring-red-900 hover:bg-red-800">
               Post feedback
           </button>
           <div class="flex ps-0 space-x-1 rtl:space-x-reverse sm:ps-2">
               
           </div>
       </div>
   </div>

</form>
</div> 


   
    </>
  )
}
