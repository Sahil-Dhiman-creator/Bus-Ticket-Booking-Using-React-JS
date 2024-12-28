import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'

const Checkout = () => {
  return (
    <div className='w-full lg:px-28 md:px-16 sm:px-7 px-4 mt-[13ch] mb-[8ch] space-y-10'>
        <div className="grid grid-cols-5 gap-16 items-start">
            <div className="col-span-3 space-y-7 pr-20">
                <h2 className="text-xl text-neutral-800 dark:text-neutral-100 font-medium">
                    Passenger Information
                </h2>
                
                <form className="space-y-5">
                
                <div className="">
                <label htmlFor="fullname" className="block mb-2 font-semibold">
                        Fullname
                    </label>
                    <input 
                        type="text" 
                        id="fullname"
                        placeholder='Enter Fullname'
                        name="fullname" 
                        className="w-full appearence-none text-black dark:text-neutral-100 placeholder:text-neutral-400 dark:placeholder:text-white inline-block bg-blue-500 dark:bg-[#5620ab] px-3 h-12 border border-black rounded-md focus:outline-none focus:bg-neutral-100 dark:focus:bg-neutral-900 dark:border-green-300 hover:dark:border-red-600" 
                    />
                </div>

                <div className="">
                <label htmlFor="email" className="block mb-2 font-semibold">
                        Email Address
                    </label>
                    <input 
                        type="text" 
                        id="email"
                        placeholder='abc@gmail.com'
                        name="email" 
                        className="w-full appearence-none text-black dark:text-neutral-100 placeholder:text-neutral-400 dark:placeholder:text-white inline-block bg-blue-500 dark:bg-[#5620ab] px-3 h-12 border border-black rounded-md focus:outline-none focus:bg-neutral-100 dark:focus:bg-neutral-900 dark:border-green-300 hover:dark:border-red-600" 
                    />
                    <small className="block mt-1 text-xs text-neutral-500 dark:text-neutral-600 font-normal">
                        You Will get Your ticket via this Email Address
                    </small>
                </div>

                <div className="">
                <label htmlFor="phone" className="block mb-2 font-semibold">
                        Phone Number
                    </label>
                    <input 
                        type="number" 
                        id="phone"
                        placeholder='Enter Phone Number'
                        name="phone" 
                        className="w-full appearence-none text-black dark:text-neutral-100 placeholder:text-neutral-400 dark:placeholder:text-white inline-block bg-blue-500 dark:bg-[#5620ab] px-3 h-12 border border-black rounded-md focus:outline-none focus:bg-neutral-100 dark:focus:bg-neutral-900 dark:border-green-300 hover:dark:border-red-600" 
                    />
                </div>

                <div className="">
                <label htmlFor="phone" className="block mb-2 font-semibold">
                        Alternate Number
                    </label>
                    <input 
                        type="number" 
                        id="phone"
                        placeholder='Enter Alternate Number'
                        name="phone" 
                        className="w-full appearence-none text-black dark:text-neutral-100 placeholder:text-neutral-400 dark:placeholder:text-white inline-block bg-blue-500 dark:bg-[#5620ab] px-3 h-12 border border-black rounded-md focus:outline-none focus:bg-neutral-100 dark:focus:bg-neutral-900 dark:border-green-300 hover:dark:border-red-600" 
                    />
                </div>
                </form>
            </div>

            <div className="col-span-2 space-y-8">
                <div className="bg-neutral-200/50 dark:bg-violet-500 rounded-md py-5 px-7">
                <h2 className="text-xl text-center text-neutral-800 dark:text-red-800 font-medium border-b-2 border-neutral-200 dark:border-neutral-800/40 pb-3 mb-4">
                    Your Booking Status
                </h2>

                <div className="space-y-8 pb-3">
                    <div className="space-y-4">
                        <h6 className="text-base text-neutral-700 dark:text-green-500/90 font-medium">
                            Your Destination
                        </h6>
                    <div className="w-full flex items-center gap-x-3">
                        <div className="w-fit text-base font-medium dark:text-red-700">
                            From:- <span className='ml-1 dark:text-neutral-300'>
                                Location 1
                            </span>
                        </div>
                        <div className="flex-1">
                            <div className="w-full h-[1px] border border-dashed border-blue-600 dark:border-red-600">
                            </div>
                        </div>
                        <div className="w-fit text-base font-medium dark:text-red-700">
                            To:- <span className='ml-1 dark:text-neutral-300'>
                                Location 4
                            </span>
                        </div>
                    </div>

                    <div className="w-full flex items-center gap-x-3">
                        <div className="w-fit text-base font-medium dark:text-red-700">
               
                            Arrive at:- <span className='ml-1 dark:text-neutral-300'>
                                03:30 PM
                            </span>
                        </div>
                        <div className="flex-1">
                            <div className="w-full h-[1px] border border-dashed border-blue-600 dark:border-red-600">
                            </div>
                        </div>
                        <div className="w-fit text-base font-medium dark:text-red-700">
                            Depart at:- <span className='ml-1 dark:text-neutral-300'>
                                04:00 PM
                            </span>
                        </div>  
                        </div>
                    </div>
                </div>

                <div className="space-y-4 mt-1">
                    <div className="w-full flex items-center justify-between">
                        <h6 className="text-base text-green-600 dark:text-red-700 font-medium">
                            Total Number of Seats    
                        </h6> 

                        <h6 className="text-base-text-neutral-700 dark:text-neutral-200 font-medium">
                            10 <span className='text-xs text-red-500 dark:text-green-700'>(Driver Side)</span>
                        </h6>    
                    </div>

                    <div className="w-full flex items-center justify-between">
                        <h6 className="text-base text-green-600 dark:text-red-700 font-medium">
                            Total Amount to be paid   
                        </h6> 

                        <h6 className="text-base-text-neutral-700 dark:text-neutral-200 font-medium">
                            Rs. 5000
                        </h6>   
                    </div>       
                </div>
                </div>

                <button className="w-full px-8 h-12 bg-red-600 text-neutral-50 text-base font-normal rounded-md flex items-center justify-center gap-x-2 hover:transition hover:ease-in hover:duration-300 hover:bg-blue-500">
                    Processed to Pay <FaArrowRightLong />
                </button>

            </div>
        </div>
    </div>
  )
}

export default Checkout