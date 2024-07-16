'use client'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { CiSearch } from "react-icons/ci";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiCloseLine } from "react-icons/ri";
import Container from '../container/Container';
import { FaChevronDown } from 'react-icons/fa';




const Nav = () => {
    const [navbarSolid,setNavbarSolid]=useState(false)
    const [isOpen,setIsOpen]=useState(false)
    const [isMd,setIsmd]=useState(false)
    const langCode='ru'


    const liStyle=`text-[16px] pb-2 border-b-[1px] border-b-transparent transition-all duration-300 ${navbarSolid?'text-black hover:border-b-black':'text-white hover:border-b-white'}`

    useEffect(() => {
        const handleScroll = () => {
            const isTop = window.scrollY < 100;
            const size=window.innerWidth>=1024;
            size&&setIsOpen(false)
            setIsmd(!size)
            setNavbarSolid(!isTop); 
        };
    
        handleScroll();
    
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize',handleScroll)
    
        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.addEventListener('resize',handleScroll)
        };
    }, []);

    useEffect(() => {
        // Function to toggle body scroll based on isOpen state
        const toggleBodyScroll = () => {
          document.body.style.overflow = isOpen ? 'hidden' : 'unset';
        };
    
        // Call the function when isOpen changes
        toggleBodyScroll();
    
        // Cleanup
        return () => {
          document.body.style.overflow = 'unset'; // Ensure scroll is re-enabled when component unmounts
        };
      }, [isOpen]);
  return (
    <nav className={`${navbarSolid||isOpen&&isMd ? 'bg-white' : 'bg-transparent'} py-6 fixed top-0 left-0 w-full z-30 transition-colors duration-500`}>
        <Container>
        <div className='flex items-center'>
        <div className='flex-1'>
            <Link href={'/'}>
                <img className='w-full max-w-[120px] object-contain' src="./assets/logo.svg" alt="" />
            </Link>
        </div>
        <div className='lg:flex items-center gap-7 hidden'>
            <ul className='flex items-center gap-7'>
                <li>
                    <Link href={'/'} className={liStyle}>
                        Главная
                    </Link>
                </li>
                <li>
                    <Link href={'/'} className={liStyle}>
                        О нас
                    </Link>
                </li>
                <li>
                    <Link href={'/'} className={liStyle}>
                        Продукты
                    </Link>
                </li>
                <li>
                    <Link href={'/'} className={liStyle}>
                        Контакты
                    </Link>
                </li>
                <li>
                    <Link href={'/'} className={liStyle}>
                        Новости
                    </Link>
                </li>
            </ul>

            <div className={`flex items-center gap-4 border-[1px] ${navbarSolid?'border-black':'border-white'} rounded-3xl pl-4`}>
                <CiSearch className={`${navbarSolid?'text-black':'text-white'} text-4xl`}/>
                <form className='h-full w-full'>
                    <input className={`h-full w-full outline-none border-none bg-transparent ${navbarSolid?'text-black placeholder:text-black':'text-white placeholder:text-white'}`} type="text" placeholder='Search...' />
                </form>
            </div>

            
            <div className="relative group cursor-pointer">
              <p className={`text-[13px] lg:text-[16px] uppercase ${navbarSolid?'text-black':'text-white'} flex items-center gap-1`}>{langCode} <FaChevronDown/></p>
              <div className="flex-col gap-1 bg-black overflow-hidden text-white rounded-xl w-[55px] absolute transition-all duration-300 transform scale-0 top-full left-1/2 -translate-x-1/2 opacity-0 group-hover:scale-100 group-hover:opacity-100 group-hover:flex">
                <button className="hover:bg-white pt-2 hover:text-black w-full">
                  EN
                </button>
                <button className="hover:bg-white hover:text-black w-full">
                  RU
                </button>
                <button className="hover:bg-white pb-2 hover:text-black w-full">
                  UZ
                </button>
              </div>
            </div>
        </div>


            <button onClick={e=>setIsOpen(true)} className={`lg:hidden block ${navbarSolid?'text-black':'text-white'} text-3xl`}>
                <GiHamburgerMenu/>
            </button>
            </div>
        </Container>

        
            <div className={`h-[100vh] w-[300px] p-5 bg-white fixed lg:hidden top-0 right-0 z-50 transition-transform duration-500 ease-in-out ${isOpen?'translate-x-[0%]':'translate-x-[350px]'}`}>
                <button className='text-3xl border-[1px] border-black' onClick={e=>{setIsOpen(false);}}>
                    <RiCloseLine />
                </button>
                <ul className='flex flex-col gap-4 mt-6'>
                <li>
                    <Link href={'/'} className={`text-black text-lg`}>
                        Главная
                    </Link>
                </li>
                <li>
                    <Link href={'/'} className={`text-black text-lg`}>
                        О нас
                    </Link>
                </li>
                <li>
                    <Link href={'/'} className={`text-black text-lg`}>
                        Продукты
                    </Link>
                </li>
                <li>
                    <Link href={'/'} className={`text-black text-lg`}>
                        Контакты
                    </Link>
                </li>
                <li>
                    <Link href={'/'} className={`text-black text-lg`}>
                        Новости
                    </Link>
                </li>
            </ul>

            <div className={`flex items-center gap-2 border-[1px] border-black rounded-3xl pl-2 mt-6 py-2`}>
                <CiSearch className={`text-black text-2xl`}/>
                <form className='h-full w-full'>
                    <input className={`h-full w-full outline-none border-none bg-transparent text-black placeholder:text-black`} type="text" placeholder='Search...' />
                </form>
            </div>

            <div className='flex items-center gap-5 mt-10'>
                <button className={`pb-1 border-b-[1px] ${langCode==='en'?'text-black border-b-black':'text-gray-500 border-b-transparent'}`}>
                    EN
                </button>
                <button className={`pb-1 border-b-[1px] ${langCode==='ru'?'text-black border-b-black':'text-gray-500 border-b-transparent'}`}>
                    RU
                </button>
                <button className={`pb-1 border-b-[1px] ${langCode==='uz'?'text-black border-b-black':'text-gray-500 border-b-transparent'}`}>
                    UZ
                </button>
            </div>

            </div>
        
        <div className={`bg-black  opacity-50 z-40 w-full h-full lg:hidden fixed top-0 left-0 ${isOpen?'block':'hidden'}`}></div>
        
    </nav>
  )
}

export default Nav