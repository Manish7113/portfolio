'use client'
import { Icon } from "@iconify/react";

export default function About() {
    return (
        <div className="aboutParent">
            <div className="subParent" >
                <div className="aboutContent container d-flex justify-content-center align-items-start flex-column gap-4">
                    <div className="d-flex justify-content-center align-items-start flex-column">
                        <p className="headingAbout fs-xxl white roboto-bold p-0 m-0">Hi`I M <span className="red">Manish</span> </p>
                        <p className="p-0 m-0 subHeading fs-mdd white">Build your dream site & control it like a boss! Fun tools, fast clicks!
                        </p>
                    </div>

                    <div className="d-flex justify-content-start align-items-center gap-3 flex-wrap">
                        <button className="main-btn bg-red white fs-lgg fw-500 d-flex justify-content-center  align-items-center gap-2"><Icon icon="hugeicons:job-link" /> Hire me</button>
                        <button className="main-btn-outlined white fs-lgg fw-500 d-flex justify-content-center  align-items-center gap-2"><Icon icon="line-md:email" /> Mail </button>

                    </div>
                </div>

            </div>

        </div>
    )
}