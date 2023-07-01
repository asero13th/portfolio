import React from 'react'
import { ProgressBar } from 'daisyui';

const Services = () => {
  return (
    <aside id='skills' className="pb-20 ml:0 bg-anotherCustom-50 md:ml-40 lg:ml-40 md:top-0 borer border-gray-200 overflow-x-hidden flex flex-col  justify-content-between items-center mx:auto">
        <div className="mt-10 max-w-sm p-10 md:mx-auto rounded-xl overflow-hidden  flex flex-col items-center md:items-start">
            <h2 className='mx-auto text-center text-5xl text-gray-900 font-bold'>My skills</h2>    
        </div>
        <div className='flex flex-col md:flex-row justify-around mt-5' >

            <div>
              <div><h3 className='mx-auto text-center mb-2 text-gray-900 font-bold'>node.js</h3></div>
            <div className="radial-progress mx-10" style={{"--value":60}}>60%</div>
            </div>
            <div>
              <div><h3 className='mx-auto text-center mb-2 text-gray-900 font-bold'>React</h3></div>
            <div className="radial-progress mx-10" style={{"--value":80}}>80%</div>
            </div>
            <div>
              <div><h3 className='mx-auto text-center mb-2 text-gray-900 font-bold font-bold'>Next js</h3></div>
            <div className="radial-progress mx-10" style={{"--value":30}}>30%</div>
            </div>
            <div>
              <div><h3 className='mx-auto text-center mb-2 text-gray-900 font-bold'>Express </h3></div>
            <div className="radial-progress mx-10" style={{"--value":50}}>50%</div>
            </div>
        </div>
        <div className='flex flex-col md:flex-row justify-around mt-10' >

            <div>
              <div><h3 className='mx-auto text-center mb-2 text-gray-900 font-bold'>Python</h3></div>
            <div className="radial-progress mx-10" style={{"--value":80}}>80%</div>
            </div>
            <div>
              <div><h3 className='mx-auto text-center mb-2 text-gray-900 font-bold'>Html</h3></div>
            <div className="radial-progress mx-10" style={{"--value":80}}>80%</div>
            </div>
            <div>
              <div><h3 className='mx-auto text-center mb-2 text-gray-900 font-bold'>tailwind</h3></div>
            <div className="radial-progress mx-10" style={{"--value":70}}>70%</div>
            </div>
            <div>
              <div><h3 className='mx-auto text-center mb-2 text-gray-900 font-bold'>Bootsrap </h3></div>
            <div className="radial-progress mx-10" style={{"--value":85}}>85%</div>
            </div>
        </div>
        <div className='flex flex-col md:flex-row justify-around mt-10' >

            <div>
              <div><h3 className='mx-auto text-center mb-2 text-gray-900 font-bold'>Git</h3></div>
            <div className="radial-progress mx-10" style={{"--value":60}}>60%</div>
            </div>
            
        </div>

    </aside>
  )
}

export default Services