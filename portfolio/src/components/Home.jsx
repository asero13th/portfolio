import React, {useState, useEffect} from 'react';
import aserPhoto from '../assets/my-photoes/cropedme.png';
import "../styles/Home.css";

function Home() {
    const [text, setText] = useState('');

    useEffect(() => {
      const words = "I'm Aser Hailu";
      let i = 0;
      const intervalId = setInterval(() => {
        setText(words.slice(0, i));
        i++;
        if (i > words.length) {
          clearInterval(intervalId);
        }
      }, 100);
    }, []);

  return (
    <aside id='home' className="ml-0 bg-custom-50  md:ml-40 top-0  border border-gray-200 shadow-lg overflow-x-hidden md:pb-40 items-center md:items-start">
      <div className="mt-7">
        <div className="max-w-md mx-auto rounded-xl overflow-hidden md:max-w-2xl">
          <div className="md:flex">
            <div className="custom-image-shape-container mt-5">
                <div className="rounded-full bg-blue-100  custom-background-shape">
                    <img className=" object-cover md:h-full md:w-48 z-10 custom-image-css" src={aserPhoto} alt="Aser Hailu" />
                </div>
             
            </div>
            <div className="p-4 mt-14  ml-5">
              <div className="uppercase tracking-wide text-4xl font-bold text-indigo-500 mb-2">Welcome</div>
              <div>
              <h1 className="text-7xl font-bold text-gray-900 mb-4">{text}</h1>
              <p className="text-gray-600 text-lg mb-4">A software engineer based in Addis Ababa, Ethiopia</p>
              </div>
              <div className='flex flex-col sm:flex-row'>
                <button className='text-gray-200 bg-gray-900 px-10 py-3 mr-2 my-2 hover:bg-custom-50 hover:border-gray-700 hover:text-gray-700 border rounded-lg transition duration-500 ease-in-out'>Hire me</button>
                <button className='border border-gray-900 px-10 py-3 my-2 hover:bg-gray-900 hover:border-gray-700 hover:text-gray-200 rounded-lg transition duration-500 ease-in-out'>
                    <a href="/path/to/cv.pdf" download>Download cv</a>
                </button>
            </div>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default Home;