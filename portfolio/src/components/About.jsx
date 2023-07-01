import React from 'react'
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';

const About = () => {
  return (
    <aside id='about' className="ml:0 bg-white md:ml-40 lg:ml-40 md:top-0 border border-gray-200 overflow-x-hidden flex flex-col md:flex-row justify-content-between items-center ">
    <div className="mt-10 max-w-sm p-10 md:mx-40 rounded-xl overflow-hidden  flex flex-col items-center md:items-start">
      <div className='text-center md:text-left text-sm md:text-base'>
        <h2 className='mb-3 text-xl md:text-3xl text-gray-900 text-bold'>I'm <span className='text-indigo-500'>Aser Hailu</span>, a Web developer</h2>
        <p className='text-xs md:text-sm'>As a web developer and front-end developer, I am passionate about web development and creating engaging and user-friendly websites that deliver exceptional user experiences. With a strong background in HTML, CSS, JavaScript, and React, I have a proven track record of delivering high-quality web development projects on time and within budget.</p>
        <br />
        <p className=' text-xs md:text-sm md:max-w-md'>In addition to my work as a web developer, I am also interested in competitive programming. I enjoy the challenge of solving complex data structure and algorithm problems, and I am always looking for ways to improve my problem-solving skills and knowledge.</p>
        <br />
        <p className='text-xs md:text-sm md:max-w-md'>Whether I am working on a web development project or participating in a coding competition related to web development, I am committed to delivering the best possible web development results and exceeding expectations.</p>
      </div>
    </div>
    <div className="mt-20 max-w-sm rounded-xl overflow-hidden md:max-w-l">
      <div className='text-center md:text-left text-sm '>
                <ul>
            <li><span className='text-gray-900'>Name</span>: Aser Hailu</li>
            <br />
            <hr />
            <li><span className='text-gray-900'>Age</span> : 21</li>
            <br />
            <hr />
            <li> <span className='text-gray-900'>Born in</span>: Arsi negelle, Ethiopia</li>
            <br />
            <hr />
            <li><a href='mailto:aserhailu2020@gmail.com' className='text-indigo-500 mt-2'><span><FaEnvelope /></span> aserhailu2020@gmail.com</a></li>
            <br />
            <hr />
            <li> <a href='tel:+251975192086' className='text-indigo-500 mt-1'><FaPhoneAlt /> +251 975 19 20 86</a></li>
            <br />
            <hr />
            <li className='text-indigo-500 mt-1'><FaMapMarkerAlt /> Addis Ababa, Ethiopia</li>
            <br />
            </ul>
      </div>
    </div>
  </aside>
  )
}

export default About