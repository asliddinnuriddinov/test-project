'use client'
import Link from 'next/link'
import React from 'react'
import { FaLongArrowAltRight } from "react-icons/fa";

const BlogCard = ({img,title,ind}) => {
  return (
    <div className='p-6 relative h-[324px] overflow-hidden group rounded-2xl'>
        <img className='absolute top-0 left-0 w-full h-full object-cover' src={img} alt="" />
        <div style={ind==1?{display:"block"}:{display:"none"}} className="before:bg-[rgba(0,0,0,.5)] before:absolute before:top-0 before:left-0 before:w-full before:h-full"></div>
        <div className='relative flex flex-col items-start justify-between h-full'>
            <h3 className='text-white text-xl'>
                {title}
            </h3>

            <Link className='flex items-center text-white gap-2 text-xl hover:gap-5 transition-all duration-300' href={'/'}>
                Читать
                <FaLongArrowAltRight/>
            </Link>
        </div>
    </div>
  )
}

export default BlogCard