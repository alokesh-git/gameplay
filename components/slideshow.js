"use client";
import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import priceData from './pricelist';
import 'swiper/css'; // Import Swiper styles
import Image from 'next/image'; // Correct import for Next.js Image
import Link from 'next/link';

const Slideshow = ({ propdata }) => {
  // State to hold the current index
  const [currentIndex, setCurrentIndex] = useState(0);

  // Array of image paths based on the propdata
  const images = [`${propdata}1.jpeg`, `${propdata}2.jpeg`, `${propdata}3.jpeg`];

  useEffect(() => {
    // Function to change the image index
    const changeImage = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    // Set interval to change image every 500ms
    const intervalId = setInterval(changeImage, 500);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, [images]);

  return (
    
      <div >
        <div className="card items-center justify-center w-60 h-40 bg-white m-2 rounded-full  shadow-inherit bg-contain bg-no-repeat relative">
          <Image
            src={`/anime_photo/${images[currentIndex]}`}
            alt="Slideshow Image"
            layout="fill"
            objectFit="contain"
            // className="absolute"
          />
        </div>
        <Link href={`/${propdata}`} className=" mx-4 my-2 px-4 py-2 rounded-lg bg-orange-500 text-white font-semibold ">Buy Now (Rs ${priceData[propdata]})</Link>
      </div>
  );
};

export default Slideshow;
