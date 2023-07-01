import React from 'react'
import Card from './Card'
const myprojects = [
    {
        id : 1,
        url:"https://ethio-job-finder.vercel.app/",
        description: "a job search website made by react js for frontend frame work and firebase for backend , authentication and database", 
        projectType: "Web Project",
        name: "Job search Website"
    },
    {
        id : 2,
        url:"https://habesha-delivery.vercel.app/home",
        description: "a food delivery website made by react js for frontend frame work with tailwind css for styling with good user interface and user experience",
        name: "Habeshan food delivery Website"
    },
    {
        id : 3,
        url:"https://gdsc-aastu-club.web.app/",
        description: "a website for google student developer club made by react js for frontend frame work with tailwind css for styling with good user interface and user experience",
        name: "Google developer student club website"
    },
]
const Portfolio = () => {
  return (
    <aside id='contact' className=" ml:0 bg-white md:ml-40 lg:ml-40 md:top-0   overflow-x-hidden flex flex-col  justify-content-between items-center mx:auto p-10">
    <div className="mt-10 max-w-sm p-10 md:mx-auto rounded-xl overflow-hidden  flex flex-col items-center md:items-start">
        <h2 className=' text-center text-5xl text-gray-900 font-bold'>My Projects</h2>    
    </div>
   
    <div className=" max-w-4xl p-10 md:mx-auto flex flex-col md:flex-row">
    {myprojects.map((skill) => {
        return <Card project={skill}/>
    })}
</div>
    
    </aside>
  )
}

export default Portfolio