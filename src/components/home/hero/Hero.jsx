'use client'
import initializeAOS from '@/aos/aosSetup';
import Container from '@/components/common/container/Container'
import Link from 'next/link'
import React, { useEffect } from 'react'
import { FaRegCirclePlay } from "react-icons/fa6";

const Hero = () => {

    useEffect(()=>{
        initializeAOS()
    },[])
  return (
    <div style={{backgroundImage:`url(./assets/hero.jpg)`}} className='bg-cover bg-center h-[100vh] w-full relative'>
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60"></div>

        <Container>
            <div className='h-[100vh] flex flex-col justify-center md:justify-end sm:pb-32 text-white relative'>
                <h1 data-aos='zoom-in' data-aos-duration='700' data-aos-delay='300' className='xl:text-6xl lg:text-5xl sm:text-4xl text-3xl max-w-[1020px] font-semibold'>
                Экологически чистые продукты из богатой флоры <span className='text-main'>Узбекистана</span>
                </h1>
                <p data-aos='fade-right' data-aos-duration='700' data-aos-delay='340' className='lg:text-xl sm:text-lg text-sm font-semibold my-14 max-w-[700px]'>
                    Мы не просто создаём проекты, мы создаем новые возможности. Строя объекты государственного масштаба, мы строим будущее.
                </p>

                <div data-aos='fade-up' data-aos-duration='700' data-aos-delay='300' className='flex items-center gap-10 sm:ml-7'>

                <a className="relative border-[1px] border-main block h-[45px] sm:h-[55px] w-[130px] sm:w-[190px] lg:h-[60px] lg:w-[205px] group" href="tel:+998997777777">
                    <span className='w-full font-bold text-white h-full sm:text-[16px] text-[12px] absolute flex items-center justify-center group-hover:left-0 group-hover:bottom-0 left-[-10%] sm:left-[-10%] bottom-[-20%] transition-all duration-500 bg-transparent group-hover:bg-main border-[1px] border-main'>
                    Связаться с нами
                    </span>
                </a>
                <Link className="relative border-[1px] border-main block h-[45px] sm:h-[55px] w-[130px] sm:w-[190px] lg:h-[60px] lg:w-[205px] group" href="/">
                    <span className='w-full font-bold h-full sm:text-[16px] text-[12px] absolute flex items-center gap-2 justify-center group-hover:left-0 group-hover:bottom-0 left-[-10%] bottom-[-20%] transition-all duration-500 border-[1px] bg-main border-main'>
                    Смотреть о нас <FaRegCirclePlay className='text-xl'/>
                    </span>
                </Link>

                </div>
            </div>
        </Container>
    </div>
  )
}

export default Hero