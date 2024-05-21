import React from 'react'

export default function Hero() {
  return (
    <div className='w-full h-[90vh]'>
      <img src="https://images.unsplash.com/photo-1471922694854-ff1b63b20054?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt=""className='w-full h-full object-cover'/>

      <div className='max-w-[1140px] m-auto'>
        <div className='absolute top-[40%] w-full md:-[50%] max-w-[600px] h-full flex flex-col text-red-600 p-4'>
            <h1 className='font-bold text-4xl'>Find Your Special Trip</h1>
            <h2 className='text-4xl py-4 italic'>With Weekaway</h2>
            <p className='text-xl'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad itaque illum accusantium recusandae labore quis sint atque nemo aliquid porro corporis debitis, quos quidem sunt facilis soluta. Saepe, dignissimos quae.
            </p>
        </div>
      </div>
    </div>
  )
}
