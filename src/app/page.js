'use client'
import About from "./@core/component/about";
import Contact from "./@core/component/contact";
import Experience from "./@core/component/experience";
import Footer from "./@core/component/footer";
import Navbar from "./@core/component/navbar";
import Project from "./@core/component/project";
import Skill from "./@core/component/skills";

export default function Home() {
  return (
  <>
    <Navbar></Navbar>
    <About></About>
    <Skill></Skill>
    <Project></Project>
    <Experience></Experience>
    <Contact></Contact>
    <Footer></Footer>
    
    
    </>
  );
}
