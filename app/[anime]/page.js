'use client';
import React,{useState} from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
import priceData from '../../components/pricelist';

const AnimePage = () => {
  const pathname = usePathname()
  let amount = 100.00;
   const [increment,setIncrement] = useState(1);
  return (
    <div className="flex text-black min-h-full flex-col items-start justify-between p-5">
      <h2 className="text-3xl font-bold mb-2 sticky p-4 shadow-md w-full z-10  top-0 backdrop-filter backdrop-blur-lg">{pathname.substring(1,pathname.length)} ,Durable Toys</h2>
      <div className="flex flex-row w-full justify-around">
        <div className="flex flex-col flex-grow justify-between ">
        <img src={`anime_photo/${pathname.substring(1,pathname.length)}1.jpeg`} alt="Product Image" className="w-48 h-48 mb-4" />
        <img src={`anime_photo/${pathname.substring(1,pathname.length)}2.jpeg`} alt="Product Image" className="w-48 h-48 mb-4" />
        </div>
      <img src={`anime_photo/${pathname.substring(1,pathname.length)}3.jpeg`} alt="Product Image" className="w-96 h-96 items-center mb-4" />
      </div>
      <h2 className="text-2xl font-bold mb-2">Description</h2>

      <p className="text-lg mb-4">This anime toy is a high-quality collectible item imported from China. It measures 10 inches in height and 7 inches in width, making it a perfect addition to any anime fan's collection. The toy is made of durable materials, ensuring it will withstand the test of time. With its vibrant colors and intricate details, it's a must-have for anyone who loves anime. Order now and get it delivered within a week!</p>
      <h2 className="text-2xl font-bold mb-2">Specification</h2>
      <div className="flex flex-col">
        <div className="flex flex-row">
          <span className="text-base font-bold  mb-4">Height:</span>
          <span className="text-base font-bold  mb-4 ml-2">10 inches</span>
        </div>
        <div className="flex flex-row">
          <span className="text-base font-bold  mb-4">Width:</span>
          <span className="text-base font-bold  mb-4 ml-2">7 inches</span>
        </div>
        <div className="flex flex-row">
          <span className="text-base font-bold  mb-4">Origin:</span>
          <span className="text-base font-bold  mb-4 ml-2">China</span>
        </div>
        <div className="flex flex-row">
          <span className="text-base font-bold  mb-4">Materials:</span>
          <span className="text-base font-bold  mb-4 ml-2">Durable</span>
        </div>
        <div className="flex flex-row">
          <span className="text-base font-bold  mb-4">Colors:</span>
          <span className="text-base font-bold  mb-4 ml-2">Vibrant</span>
        </div>
        <div className="flex flex-row">
          <span className="text-base font-bold  mb-4">Details:</span>
          <span className="text-base font-bold  mb-4 ml-2">Intricate</span>
        </div>
        <div className="flex flex-row mb-16">
          <span className="text-base font-bold  mb-4">Delivery:</span>
          <span className="text-base font-bold  mb-4 ml-2">Within a week</span>
        </div>
      </div>
      <div className="flex items-center justify-between  w-full fixed bottom-0 bg-white p-4">
      <button className="mt-4 px-8 py-2 bg-blue-500 text-white rounded ">Purchase</button>
        
        <span className="text-xl font-bold">&#x20B9; {(priceData[pathname.substring(1,pathname.length)] * increment).toFixed(2)}</span>
        <div className="flex items-center px-4">
          <button className="px-4 py-2 bg-gray-500 text-white rounded mr-2" onClick={()=>{setIncrement(increment == 1? 1 : increment-1)}}>-</button>
          <span className="px-4 py-2 bg-gray-200 text-black rounded">{increment}</span>
          <button className="px-4 py-2 bg-gray-500 text-white rounded ml-2" onClick={()=>{setIncrement( increment+1)}} >+</button>
        </div>
      </div>
    </div>
  )
}

export default AnimePage