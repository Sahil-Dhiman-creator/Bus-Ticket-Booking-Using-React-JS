import React, { useState } from "react";
import { GiSteeringWheel } from "react-icons/gi";
import { MdOutlineChair } from "react-icons/md";
import { RiMoneyRupeeCircleLine } from "react-icons/ri";

const Seat = ({ seatNumber, isSelected, onClick }) => {
  return (
    <MdOutlineChair
      className={`text-3xl -rotate-90 cursor-pointer ${
        isSelected ? "text-blue-600" : "text-neutral-600 dark:text-neutral-300"
      }`}
      onClick={onClick}
    />
  );
};

const Seats = () => {
  const totalSeats = 41;
  const [selectedSeats, setSelectedSeats] = useState([]);

  const handleSeatClick = (seatNumber) => {
    if (selectedSeats.includes(seatNumber)) {
      setSelectedSeats(selectedSeats.filter((seat) => seat !== seatNumber));
    } else {
      if (selectedSeats.length < 10) {
        setSelectedSeats([...selectedSeats, seatNumber]);
      } else {
        alert("You can select only 10 seats at a time.");
      }
    }
  };

  const renderSeats = () => {
    let seats = [];
    for (let i = 1; i <= totalSeats; i++) {
      seats.push(
        <Seat
          key={i}
          seatNumber={i}
          isSelected={selectedSeats.includes(i)}
          onClick={() => handleSeatClick(i)}
        />
      );
    }
    return seats;
  };

  return (
    <div className="space-y-5">
      <h2 className="text-xl text-neutral-800 dark:text-neutral-100 font-medium">
        Choose a Seat
      </h2>

      {/* Seat Layout */}
      <div className="w-full flex justify-between">
        <div className="flex-1 w-full flex">
          <div className="w-full flex-1 flex gap-x-5 items-stretch">
            {/* Steering Wheel */}
            <div className="w-10 h-full border-r-2 border-dashed border-neutral-300 dark:border-red-600">
              <GiSteeringWheel
                className="text-3xl mt-6 text-green-600 -rotate-90"
              />
            </div>

            {/* Seats Layout */}
            <div className="flex flex-col items-center ">
              <div className="flex-1 space-y-4">
                <div className="w-full grid grid-cols-10 gap-x-3">
                  {renderSeats().slice(0, 10)}
                </div>
                <div className="w-full grid grid-cols-10 gap-x-3">
                  {renderSeats().slice(10, 20)}
                </div>
                <div className="w-full grid grid-cols-10 gap-x-3">
                  <div className="col-span-9"></div>
                  {renderSeats().slice(20, 21)}
                </div>
                <div className="w-full grid grid-cols-10 gap-x-3">
                  {renderSeats().slice(21, 31)}
                </div>
                <div className="w-full grid grid-cols-10 gap-x-3">
                  {renderSeats().slice(31, 41)}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Instructions and Information */}
        <div className="space-y-3 w-28">
          <div className="flex items-center gap-x-2">
            <MdOutlineChair className="text-lg text-neutral-500 -rotate-90" />
            <p className="text-neutral-900 dark:text-neutral-200 text-sm font-normal">
              Available
            </p>
          </div>
          <div className="flex items-center gap-x-2">
            <MdOutlineChair className="text-lg text-red-500 -rotate-90" />
            <p className="text-neutral-900 dark:text-neutral-200 text-sm font-normal">
              Booked
            </p>
          </div>
          <div className="flex items-center gap-x-2">
            <MdOutlineChair className="text-lg text-blue-600 -rotate-90" />
            <p className="text-neutral-900 dark:text-neutral-200 text-sm font-normal">
              Selected
            </p>
          </div>
          <div className="flex items-center gap-x-2">
            <RiMoneyRupeeCircleLine className="text-lg text-green-500" />
            <p className="text-neutral-900 dark:text-neutral-200 text-sm font-normal">
              Rs. 750
            </p>
          </div>
        </div>
      </div>

      {/* Selected Seats */}
      {
        selectedSeats.length > 0 && 
        <div className="!mt-10">
            <h3 className="text-lg font-bold ">
                Selected Seats:
            </h3>
            <div className="flex flex-wrap ">
                {selectedSeats.map((seat) => (
                    <div className="w-10 h-10 rounded-md ml-1.5 text-lg font-medium bg-blue-500 dark:bg-violet-600/30 flex items-center justify-center">
                        {seat}
                    </div>
                ))}
            </div>
        </div>
      }

      {/* Calculating Price */}
      {
        selectedSeats.length > 0 && 
        <div className="!mt-5 flex items-center gap-x-4">
            <h3 className="text-lg font-bold dark:text-green-500">
                Total Fair Amount:
            </h3>
            <p className="text-lg font-medium dark:text-red-500">
                Rs. {selectedSeats.length * 750}
            </p>
            <span className="text-sm text-black dark:text-yellow-500 font-normal">
                (Including all of the taxes)
            </span>
        </div>
      }
    </div>
  );
};

export default Seats;
