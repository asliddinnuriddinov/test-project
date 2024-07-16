'use client'
import Container from '@/components/common/container/Container'
import React, { useEffect } from 'react'
import BlogCard from '../blogCard/BlogCard'
import initializeAOS from '@/aos/aosSetup'

const Blog = () => {

    useEffect(()=>{
        initializeAOS()
    },[])
  return (
    <div className='md:pt-64 pt-20 pb-10 bg-cover bg-center' style={{backgroundImage:`url(./assets/blogs.png)`}}>
        <Container>
            <div>
                <h2 data-aos='fade-right' data-aos-duration='700' data-aos-delay='260' className='xl:text-6xl lg:text-5xl sm:text-4xl text-3xl max-w-[1020px] font-semibold'>
                    Полезные статьи
                </h2>
                <p data-aos='zoom-in' data-aos-duration='700' data-aos-delay='260' className='lg:text-xl sm:text-lg text-sm font-semibold mt-6 max-w-[700px] md:mb-20 mb-10'>
                На нашем сайте мы публикуем новости отрасли и исследовательские статьи. Будьте в курсе новостей и интересных статей.
                </p>

                <div data-aos='fade-right' data-aos-duration='700' data-aos-delay='260' className='grid md:grid-cols-3 grid-cols-1 gap-10'>
                    <BlogCard ind={1} img={'./assets/blog-1.png'} title={"Something Something Something"}/>
                    <BlogCard ind={2} img={'./assets/blog-2.png'} title={"Почему следует принимать пищевые добавки?"}/>
                    <BlogCard ind={3} img={'./assets/blog-3.png'} title={"Пищевые ингредиенты Европа 2023 Франкфурт"}/>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default Blog