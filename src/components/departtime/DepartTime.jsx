import React, { useState } from 'react'

const Departtime = () => {

     const [departBus , setDepartBus] = useState('');
    
        const handleDepartBusChange = (e) => {
            setDepartBus(e.target.value);
          };

  return (
    <div className='w-full space-y-4'>
    {
        !departBus
        ?
        (
            <div className='w-full grid grid-cols-2 gap-10'>
                        {/* First Select Box */}
            <div className="">
                <label htmlFor="departbus" className="block mb-2 font-semibold">
                    Depart Bus Time
                </label>
                <select 
                    name="departbus" 
                    value={departBus}
                    onChange={handleDepartBusChange}
                    id="departbus" 
                    className="w-full appearence-none text-neutral-800 dark:text-neutral-100 placeholder:text-neutral-400 dark:placeholder:text-neutral-600 inline-block bg-red-700/60 dark:bg-neutral-900/60 px-3 h-11 border border-blue-900 rounded-md focus:outline-none focus:bg-neutral-100 dark:focus:bg-neutral-900 dark:border-red-800"
                >
                    <option value="">Select a Time</option>
                    <option value="04:00 AM">04:00 AM</option>   
                    <option value="05:00 AM">05:00 AM</option>   
                    <option value="06:00 AM">06:00 AM</option>   
                </select>
            </div>
                 
            </div>
        )
        :
        (
            <div className="space-y-5">
                <h1 className="text-xl text-neutral-800 dark:text-neutral-100 font-medium">
                    Your Destination
                </h1>
                <div className="w-full flex items-center gap-x-3">
                    <div className="w-fit text-base font-semibold">
                        Bus Depart At:-- <span className='ml-1.5 font-medium'>{departBus}</span>
                    </div>
                </div>
            </div>
        )
    }
</div>
  )
}

export default Departtime