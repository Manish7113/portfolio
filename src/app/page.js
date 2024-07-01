'use client'
import { useEffect, useState } from "react";
import About from "./@core/component/about";
import Contact from "./@core/component/contact";
import Experience from "./@core/component/experience";
import Footer from "./@core/component/footer";
import Navbar from "./@core/component/navbar";
import Project from "./@core/component/project";
import Skill from "./@core/component/skills";
import Bio from "./@core/component/bio";

export default function Home() {

  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    setIsLoading(false)

  }, [])
  return (

    <>
      {isLoading ? <p>It is loading</p> : <> <Navbar></Navbar>
        <About></About>
        <Bio></Bio>
        <Skill></Skill>
        <Bio></Bio>
        <Project></Project>
        <Experience></Experience>
        <Contact></Contact>
        <Footer></Footer></>}



    </>
  );
}
