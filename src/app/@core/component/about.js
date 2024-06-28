'use client'
import { Icon } from "@iconify/react";

export default function About(){
    return (
      <div className="aboutParent">
        <div>
            <p className="headingAbout">Hi` I M Manish </p>
            <p>Get Your website in few days with reliable technology and efficeint practice</p>
            <button><Icon icon="hugeicons:job-link" /> Hire me</button>
            <button><Icon icon="line-md:email" /> Mail </button>
        </div>

      </div>
    )
}