import React from 'react'

const Contact = () => {
  return (
    <aside id='contact' className="ml:0 bg-gray-50 md:ml-40 lg:ml-40 md:top-0   overflow-x-hidden flex flex-col  justify-content-between items-center mx:auto p-10">
    <div className="mt-10 max-w-sm p-10 md:mx-auto rounded-xl overflow-hidden  flex flex-col items-center md:items-start">
        <h2 className='mx-auto text-center text-5xl text-gray-900 font-bold'>Get in Touch</h2>    
    </div>
    <div className=' mx-auto flex flex-col justify-around mt-2' >
    <div className='flex flex-col md:flex-row'>
        <div className='my-2'>
            <label className="label">Name</label>
            <input type="text" placeholder="Type here" className="input  w-60 md:w-80 bg-white" />
        </div>   
        <div className='my-2'>
            <label className="label">Email</label>
            <input type="email" placeholder="Type here" className="input ml-3 w-60 md:w-80 bg-white" />
        </div> 
    </div>

    <div className='flex flex-col md:flex-row' >
        <div className='my-2'>
            <label className="label">Description</label>
            <textarea className="textarea textarea-boarded textarea-xl w-60 md:w-80 bg-white max-w-xs bg-white px-10 py-3 mr-2 my-2 " placeholder="type here"></textarea>
        </div>  
        <div className='my-2'>
            <button className='my-16 mx-10 text-gray-200 bg-gray-900 w-40 md:w-60 hover:bg-custom-50 hover:border-gray-700 hover:text-gray-700 border rounded-lg transition duration-500 ease-in-out px-10 py-3 mr-2 my-2'>Submit</button>
        </div>
    </div>
    

    </div>
    </aside>
  )
}

export default Contact