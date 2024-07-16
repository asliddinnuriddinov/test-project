'use client'
import Blog from "@/components/home/blog/Blog";
import Hero from "@/components/home/hero/Hero";
import { useEffect, useState } from "react";
import Loading from "./Loading";


export default function Home() {
  const [load,setLoad]=useState(false)
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLoad(true);
    }, 2000);
  
    return () => clearTimeout(timeoutId)
  }, []);
  return load? (
    <>
    <Hero/>
    <Blog/>
    </>
  ):<Loading/>;
}
