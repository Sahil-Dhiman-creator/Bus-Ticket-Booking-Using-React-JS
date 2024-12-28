import React from 'react'

const Search = () => {
  return (
    <div className='w-full lg:px-28 md:px-16 sm:px-7 px-4 my-[8ch]'>
        <div className="w-full bg-neutral-100 rounded-md dark:bg-[#0f0f0f] p-8 border border-red-700 dark:border-green-800">
            <div className="grid grid-cols-3 gap-x-10 gap-y-12 items-end">

                <div className="">
                    <label htmlFor="from" className="block mb-2 font-semibold">
                        From
                    </label>
                    <select 
                        name="from" 
                        id="from" 
                        className="w-full appearence-none text-neutral-800 dark:text-neutral-100 placeholder:text-neutral-400 dark:placeholder:text-neutral-600 inline-block bg-red-700/60 dark:bg-neutral-900/60 px-3 h-12 border border-blue-900 rounded-md focus:outline-none focus:bg-neutral-100 dark:focus:bg-neutral-900 dark:border-red-800"
                    >
                        <option value="">Select Location</option>
                        <option value="location1">Location 1</option>   
                        <option value="location2">Location 2</option>   
                        <option value="location3">Location 3</option>   
                    </select>
                </div>
                
                <div className="">
                    <label htmlFor="to" className="block mb-2 font-semibold">
                        To
                    </label>
                    <select 
                        name="to" 
                        id="to" 
                        className="w-full appearence-none text-neutral-800 dark:text-neutral-100 placeholder:text-neutral-400 dark:placeholder:text-neutral-600 inline-block bg-green-700/60 dark:bg-neutral-900/60 px-3 h-12 border border-blue-900 rounded-md focus:outline-none focus:bg-neutral-100 dark:focus:bg-neutral-900 dark:border-blue-800"
                    >
                        <option value="">Select Location</option>
                        <option value="location4">Location 4</option>   
                        <option value="location5">Location 5</option>   
                        <option value="location6">Location 6</option>   
                    </select>
                </div>

                <div className="">
                <label htmlFor="date" className="block mb-2 font-semibold">
                        Choose Date
                    </label>
                    <input 
                        type="date" 
                        id="date" 
                        name="date" 
                        className="w-full appearence-none text-neutral-800 dark:text-neutral-100 placeholder:text-neutral-400 dark:placeholder:text-neutral-600 inline-block bg-orange-500 dark:bg-neutral-500/60 px-3 h-12 border border-black rounded-md focus:outline-none focus:bg-neutral-100 dark:focus:bg-neutral-900 dark:border-white" 
                    />
                </div>

                <div className="">
                <label htmlFor="time" className="block mb-2 font-semibold">
                        Choose Date
                    </label>
                    <input 
                        type="time" 
                        id="time" 
                        name="time" 
                        className="w-full appearence-none text-neutral-800 dark:text-neutral-100 placeholder:text-neutral-400 dark:placeholder:text-neutral-600 inline-block bg-[#714dbe] dark:bg-yellow-600/85 px-3 h-12 border border-black rounded-md focus:outline-none focus:bg-neutral-100 dark:focus:bg-neutral-900 dark:border-orange-500" 
                    />
                </div>

                <div className="">
                <label htmlFor="seat" className="block mb-2 font-semibold">
                        Total Seat
                    </label>
                    <input 
                        type="number" 
                        id="seat"
                        placeholder='Enter seat'
                        name="seat" 
                        className="w-full appearence-none text-black dark:text-neutral-100 placeholder:text-neutral-400 dark:placeholder:text-white inline-block bg-blue-500 dark:bg-[#5620ab] px-3 h-12 border border-black rounded-md focus:outline-none focus:bg-neutral-100 dark:focus:bg-neutral-900 dark:border-green-300" 
                    />
                </div>

                <div className="">
                    <button className="w-full px-4 h-12 bg-green-700 hover:bg-red-600 text-neutral-50 text-base font-normal rounded-md">
                        Check Availability
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Search