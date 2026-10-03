import React from 'react'

const ProveedorCard = () => {
  return (
    <div className="border border-slate-200 rounded-lg overflow-hidden p-5">

        <div className='flex'>
            <div className='bg-gray-200 h-20 w-20 rounded shrink-0'></div>
            <div className='pl-4 flex flex-col w-full'>
                <div className="bg-gray-200 h-4 w-8/12 rounded mb-2"></div>
                <div className="bg-gray-200 h-4 w-8/12 mb-6 rounded"></div>
            </div>
        </div>
        <div className="bg-gray-200 h-4 rounded mb-2 mt-8"></div>
        <div className="bg-gray-200 h-4 rounded mb-6"></div>
        <div className="bg-gray-200 h-5 rounded"></div>
        <div className='flex mt-6'>
            <div className='h-4 w-10 bg-gray-200 mr-4'></div>
            <div className='h-4 w-10 bg-gray-200 mr-4'></div>
            <div className='h-4 w-10 bg-gray-200'></div>
        </div>
    </div>
  )
}

export default ProveedorCard