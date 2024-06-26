"use client";
import React from 'react'
import HeadDash from '../components/HeadDash';
import Link from 'next/link'

const page = () => {
  return (
    <>
    <HeadDash/> 
    
    <div className="flex justify-center items-center h-screen">
    <Link href="/manualtrade">
       <button className="bg-blue-400 hover:bg-white hover: border border-blue-400 hover:text-blue-400  text-white rounded-lg font-bold cursor-pointer px-6 py-2 mr-10" >Manual Trade <br></br>Import</button>
     </Link>
     </div>
     
    
    
    </>
  )
}

export default page
