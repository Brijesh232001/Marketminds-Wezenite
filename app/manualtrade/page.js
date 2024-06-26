"use client";
import React from 'react'
import HeadDash from '../components/HeadDash';
import { MdOutlineAccessTime } from "react-icons/md";
import { GiCircle } from "react-icons/gi";
import { TbCash } from "react-icons/tb";
import { PiDeviceTabletSpeakerLight } from "react-icons/pi";
import { AiOutlineRise } from "react-icons/ai";
import { IoBarChartOutline } from "react-icons/io5";
import { useState } from "react";
import dayjs from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { MobileDateTimePicker } from '@mui/x-date-pickers/MobileDateTimePicker';

const page = () => {
  const [open_time, setOpenTime] = useState("");
    const [open_price, setOpenPrice] = useState("");
    const [close_time, setCloseTime] = useState("");
    const [close_price, setClosePrice] = useState(null);
    const [side, setSide] = useState("");
    const [symbol, setSymbol] = useState("");
    const [volume, setVolume] = useState(null);
    const [stop_loss, setStopLoss] = useState(null);
    const [take_profit, setTakeProfit] = useState(null);
    const [error, setError] = useState([]);
    const [success, setSuccess] = useState(false);
    const [open_price_error, setOpenPriceError] = useState(false);
    const [close_price_error, setClosePriceError] = useState(false);
    const [take_profit_error, setTakeProfitError] = useState(false);
    const [stop_loss_error, setStopLossError] = useState(false);
    const [volume_error, setVolumeError] = useState(false);

    const handleSubmit = async (e) => {
      e.preventDefault();
    
      try {
        const res = await fetch("https://7q7g1qslnc.execute-api.us-east-1.amazonaws.com/dev/manual_input", {
          method: "POST",
          headers: {
            "Content-type": "application/json",
            "X-Amz-Content-Sha256": "beaead3198f7da1e70d03ab969765e0821b24fc913697e929e726aeaebf0eba3",
            "X-Amz-Date": "20240529T174321Z",
            "Authorization": "AWS4-HMAC-SHA256 Credential=AKIA5FTZFY4RXHQFOR46/20240529/us-east-1/execute-api/aws4_request, SignedHeaders=content-length;content-type;host;x-amz-content-sha256;x-amz-date, Signature=9895aa7fdbe49ff8d4318dc0f668368f12b23c3eee7e59f49f88acd6353d35bd",
          },
          body: JSON.stringify({
            userid: 1111111,
            open_time: "2024-4-15 10:33:38",
            open_price: 2.11787462057665,
            close_time: "2024-4-15 10:35:38",
            close_price: 4.12615558497623,
            side: "short",
            symbol: "ASD",
            volume: 18.272690917718,
            stop_loss: 13.12615558497623,
            take_profit: 14.10196898245423,
          }),
        });
    
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
    
        const { msg, success } = await res.json();
        setError(msg);
        setSuccess(success);
    
        if (success) {
          setOpenTime("");
          setOpenPrice("");
          setCloseTime("");
          setClosePrice("");
          setSide("");
          setSymbol("");
          setVolume("");
          setStopLoss("");
          setTakeProfit("");
        }
      } catch (error) {
        console.error("Error submitting form:", error);
        setError([error.message]);
        setSuccess(false);
      }
    };
    
  

  return (
    <>
    <HeadDash/>

    <section class="text-gray-600 body-font">

    <div class="container px-5 py-10 mx-auto">
    <div class="text-center ">
      <h1 class=" text-2xl font-medium title-font text-gray-900 mb-4">Manual Trade Import</h1>
      <div class="flex mt-6 justify-center">
        <div class="w-16 h-1 rounded-full bg-blue-400 inline-flex"></div>
      </div>
    </div>
    </div>

  {/* This is a Comment */}
    <form onSubmit={handleSubmit}>
    <div class=" grid grid-cols-2 max-w-3xl mx-auto gap-4">

    <div class="md:w-full px-3 mb-6 md:mb-0 relative justify-between ">
      <label class="block  tracking-wide text-grey-darker text-md font-medium mb-2" for="grid-first-name">
        Asset
      </label>
      <GiCircle  className="w-8 h-8 py-auto px-auto ml-2 mt-2 absolute text-blue-400" />
      <PiDeviceTabletSpeakerLight  className="w-4 h-4 py-auto px-auto ml-4 mt-4 absolute text-blue-400" />
      <input id="symbol" onChange={(e) => setSymbol(e.target.value)} value={symbol} class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded-lg py-3 px-12 mb-3"  type="text" placeholder="Enter"/>
    </div>
    <br></br>

    <div class="md:w-full px-3 mb-6 md:mb-0 relative justify-between ">
  <label class="block  tracking-wide text-grey-darker text-md font-medium mb-2" for="grid-first-name">
    Time Entered
  </label>
  
  <LocalizationProvider dateAdapter={AdapterDayjs}>
    <DemoContainer components={['MobileDateTimePicker']}>
      <DemoItem>
      <MobileDateTimePicker
  defaultValue={dayjs(open_time)}
  onChange={(value) => setOpenTime(value.format())}
/>

      </DemoItem>
    </DemoContainer>
  </LocalizationProvider>
</div>


    <div class="md:w-full px-3">
      <label class="block  tracking-wide text-grey-darker text-md font-medium mb-2" for="grid-last-name">
        Time Exited
      </label>
      
      <LocalizationProvider dateAdapter={AdapterDayjs}>
    <DemoContainer components={['MobileDateTimePicker']}>
      <DemoItem >
        <MobileDateTimePicker
          defaultValue={dayjs(close_time)} // Assuming open_time is already defined
          onChange={(value) => setCloseTime(value.format())} // Assuming setOpenTime is your state updater function
        />
        
      </DemoItem>
    </DemoContainer>
  </LocalizationProvider>
    </div>

    

    <div class="md:w-full px-3">
      <label class="block  tracking-wide text-grey-darker text-md font-medium mb-2" for="grid-last-name">
        Entry Price 
      </label>
      <GiCircle  className="w-8 h-8 py-auto px-auto ml-2 mt-2 absolute text-blue-400" />
      <TbCash  className="w-4 h-4 py-auto px-auto ml-4 mt-4 absolute text-blue-400" />
      <input
  id="open_price"
  autoComplete='off'
  onKeyPress={(e) => {
    const currentValue = e.target.value;
    const keyPressed = String.fromCharCode(e.which);

    // Check if the input is already in the correct format or if the key pressed is a digit, a dot, or a backspace
    if (!/^\d+(?:\.\d{0,2})?$/.test(currentValue + keyPressed) && e.which !== 8) {
      // Prevent the default action (typing)
      e.preventDefault();
      // Set error state to true for "Entry Price"
      setOpenPriceError(true);
    } else {
      // Reset the error state for "Entry Price"
      setOpenPriceError(false);
    }
  }}
  onChange={(e) => {
    const inputValue = e.target.value;
    // Allow only one digit before the decimal point and up to two digits after the decimal point
    const formattedValue = inputValue.replace(/^(\d{1})?(\.\d{0,2})?$/, '$1$2');
    setOpenPrice(formattedValue);
  }}
  value={open_price}
  className={`appearance-none block w-full bg-grey-lighter text-grey-darker border ${open_price_error ? 'border-red-500' : 'border-grey-lighter'} rounded-lg py-3 px-12`}
  type="text"
  placeholder="Enter"
/>
{/* Conditionally render the error message for "Entry Price" */}
{open_price_error && <div className="text-red-600">Type Correct Format</div>}
    </div>






    <div class="md:w-full px-3 mb-6 md:mb-0 relative justify-between ">
      <label class="block  tracking-wide text-grey-darker text-md font-medium mb-2" for="grid-first-name">
       Exit Price
      </label>
      <GiCircle  className="w-8 h-8 py-auto px-auto ml-2 mt-2 absolute text-blue-400" />
      <TbCash  className="w-4 h-4 py-auto px-auto ml-4 mt-4 absolute text-blue-400" />
      <input
  id="close_price"
  autoComplete='off'
  onKeyPress={(e) => {
    const currentValue = e.target.value;
    const keyPressed = String.fromCharCode(e.which);

    // Check if the input is already in the correct format or if the key pressed is a digit, a dot, or a backspace
    if (!/^\d+(?:\.\d{0,2})?$/.test(currentValue + keyPressed) && e.which !== 8) {
      // Prevent the default action (typing)
      e.preventDefault();
      // Set error state to true for "Close Price"
      setClosePriceError(true);
    } else {
      // Reset the error state for "Close Price"
      setClosePriceError(false);
    }
  }}
  onChange={(e) => {
    const inputValue = e.target.value;
    // Allow only one digit before the decimal point and up to two digits after the decimal point
    const formattedValue = inputValue.replace(/^(\d{1})?(\.\d{0,2})?$/, '$1$2');
    setClosePrice(formattedValue);
  }}
  value={close_price}
  className={`appearance-none block w-full bg-grey-lighter text-grey-darker border ${close_price_error ? 'border-red-500' : 'border-grey-lighter'} rounded-lg py-3 px-12`}
  type="text"
  placeholder="Enter"
  
/>
{/* Conditionally render the error message for "Close Price" */}
{close_price_error && <div className="text-red-600">Type Correct Format</div>}
    </div>









    <div class="md:w-full px-3">
      <label class="block  tracking-wide text-grey-darker text-md font-medium mb-2" for="grid-last-name">
        Take Profit Level
      </label>
      <GiCircle  className="w-8 h-8 py-auto px-auto ml-2 mt-2 absolute text-blue-400" />
      <TbCash  className="w-4 h-4 py-auto px-auto ml-4 mt-4 absolute text-blue-400" />
      <input
  id="take_profit"
  autoComplete='off'
  onKeyPress={(e) => {
    const currentValue = e.target.value;
    const keyPressed = String.fromCharCode(e.which);

    // Check if the input is already in the correct format or if the key pressed is a digit, a dot, or a backspace
    if (!/^\d+(?:\.\d{0,2})?$/.test(currentValue + keyPressed) && e.which !== 8) {
      // Prevent the default action (typing)
      e.preventDefault();
      // Set error state to true for "Close Price"
      setTakeProfitError(true);
    } else {
      // Reset the error state for "Close Price"
      setTakeProfitError(false);
    }
  }}
  onChange={(e) => {
    const inputValue = e.target.value;
    // Allow only one digit before the decimal point and up to two digits after the decimal point
    const formattedValue = inputValue.replace(/^(\d{1})?(\.\d{0,2})?$/, '$1$2');
    setTakeProfit(formattedValue);
  }}
  value={take_profit}
  className={`appearance-none block w-full bg-grey-lighter text-grey-darker border ${take_profit_error ? 'border-red-500' : 'border-grey-lighter'} rounded-lg py-3 px-12`}
  type="text"
  placeholder="Enter"
  
/>
{/* Conditionally render the error message for "Close Price" */}
{take_profit_error && <div className="text-red-600">Type Correct Format</div>}
    </div>








    <div class="md:w-full px-3 mb-6 md:mb-0 relative justify-between ">
      <label class="block  tracking-wide text-grey-darker text-md font-medium mb-2" for="grid-first-name">
        Stop Loss Level
      </label>
      <GiCircle  className="w-8 h-8 py-auto px-auto ml-2 mt-2 absolute text-blue-400" />
      <TbCash  className="w-4 h-4 py-auto px-auto ml-4 mt-4 absolute text-blue-400" />
      <input
  id="stop_loss"
  autoComplete='off'
  onKeyPress={(e) => {
    const currentValue = e.target.value;
    const keyPressed = String.fromCharCode(e.which);

    // Check if the input is already in the correct format or if the key pressed is a digit, a dot, or a backspace
    if (!/^\d+(?:\.\d{0,2})?$/.test(currentValue + keyPressed) && e.which !== 8) {
      // Prevent the default action (typing)
      e.preventDefault();
      // Set error state to true for "Close Price"
      setStopLossError(true);
    } else {
      // Reset the error state for "Close Price"
      setStopLossError(false);
    }
  }}
  onChange={(e) => {
    const inputValue = e.target.value;
    // Allow only one digit before the decimal point and up to two digits after the decimal point
    const formattedValue = inputValue.replace(/^(\d{1})?(\.\d{0,2})?$/, '$1$2');
    setStopLoss(formattedValue);
  }}
  value={stop_loss}
  className={`appearance-none block w-full bg-grey-lighter text-grey-darker border ${stop_loss_error ? 'border-red-500' : 'border-grey-lighter'} rounded-lg py-3 px-12`}
  type="text"
  placeholder="Enter"
  
/>
{/* Conditionally render the error message for "Close Price" */}
{stop_loss_error && <div className="text-red-600">Type Correct Format</div>}
    </div>











    <div class="md:w-full px-3">
      <label class="block  tracking-wide text-grey-darker text-md font-medium mb-2" for="grid-last-name">
        Volume 
      </label>
      <GiCircle  className="w-8 h-8 py-auto px-auto ml-2 mt-2 absolute text-blue-400" />
      <IoBarChartOutline  className="w-4 h-4 py-auto px-auto ml-4 mt-4 absolute text-blue-400" />
      <input
  id="volume"
  autoComplete='off'
  onKeyPress={(e) => {
    const currentValue = e.target.value;
    const keyPressed = String.fromCharCode(e.which);

    // Check if the input is already in the correct format or if the key pressed is a digit, a dot, or a backspace
    if (!/^\d+(?:\.\d{0,2})?$/.test(currentValue + keyPressed) && e.which !== 8) {
      // Prevent the default action (typing)
      e.preventDefault();
      // Set error state to true for "Close Price"
      setVolumeError(true);
    } else {
      // Reset the error state for "Close Price"
      setVolumeError(false);
    }
  }}
  onChange={(e) => {
    const inputValue = e.target.value;
    // Allow only one digit before the decimal point and up to two digits after the decimal point
    const formattedValue = inputValue.replace(/^(\d{1})?(\.\d{0,2})?$/, '$1$2');
    setVolume(formattedValue);
  }}
  value={volume}
  className={`appearance-none block w-full bg-grey-lighter text-grey-darker border ${volume_error ? 'border-red-500' : 'border-grey-lighter'} rounded-lg py-3 px-12`}
  type="text"
  placeholder="Enter"
  
/>
{/* Conditionally render the error message for "Close Price" */}
{volume_error && <div className="text-red-600">Type Correct Format</div>}
    </div>









    <div className="md:w-full px-3 mb-6 md:mb-0 relative justify-between">
  <label className="block tracking-wide text-grey-darker text-md font-medium mb-2" htmlFor="side">
    Side
  </label>
  
  <div className="relative">
  <GiCircle  className="w-8 h-8 py-auto px-auto ml-2 mt-2 absolute text-blue-400" />
      <AiOutlineRise  className="w-4 h-4 py-auto px-auto ml-4 mt-4 absolute text-blue-400" />
    <select id="side" onChange={(e) => setSide(e.target.value)} value={side} className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg py-3 px-12">
      <option value="">Select Side</option>
      <option value="Long">Long</option>
      <option value="Short">Short</option>
    </select>
    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-grey-darker">
      <svg className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
        <path d="M10 12l-8 8h16l-8-8z" />
      </svg>
    </div>
  </div>
</div>


    

    <br></br> 
    
      </div>
      
      <div className="flex justify-center items-center">
      <button type="submit" className="bg-blue-400 text-white rounded-lg font-bold cursor-pointer px-6 py-2 mr-10 w-30">Submit</button>
      </div>
      
  </form>
  </section>
  <div className="bg-slate-100 flex flex-col">
        {error &&
          error.map((e, index) => (
            <div
            key={index}
              className={`${
                success ? "text-green-800" : "text-red-600"
              } px-5 py-2`}
            >
              {e}
            </div>
          ))}
      </div>









  
    
    </>
  )
}

export default page
