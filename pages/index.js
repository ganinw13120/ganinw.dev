import Head from 'next/head'
import Title from '../components/index/title'
import Description from '../components/index/description'
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
      <Title offsetY={offsetY}/>
      <Description offsetY={offsetY}/>
    </>
  )
}
