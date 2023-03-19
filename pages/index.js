import Head from 'next/head'
import Title from '../components/index/title'
import Resume from '../components/index/resume'
import Navbar from '../components/navbar'
import Contact from '../components/index/contact'
import 'tailwindcss/tailwind.css'
import React, { useState, useEffect } from "react";
export default function Home() {

  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => {
    setOffsetY(window.pageYOffset)
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <Head>
        <title>Gan Mongklakorn</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='h-auto bg-white'>
          <Navbar offsetY={offsetY}/>
          <Title offsetY={offsetY}/>
        <Resume offsetY={offsetY}/>
        <Contact  offsetY={offsetY}/>
      </div>
    </>
  )
}
