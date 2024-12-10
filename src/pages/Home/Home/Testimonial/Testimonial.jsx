import SectionTittle from "../../../../components/SectionTittle/SectionTittle";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper/modules";
import 'swiper/css/navigation';


import 'swiper/css';
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'










const Testimonial = () => {
    const[reviews,setReviews]=useState([]);
    useEffect(() =>{
        fetch('http://localhost:5000/reviews')
        .then(res=>res.json())
        .then(data=> setReviews(data))

    },[])
    return (
        <section className="my-20">
            <SectionTittle
            subheading="what our client say"
            heading="Testimonial"
            
            ></SectionTittle>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
       
        {
            reviews.map(reviews =>  <SwiperSlide
            key={reviews._id}
            
            >
             <div className=" flex flex-col items-center my-16 mx-20 m-24">
             <Rating
      style={{ maxWidth: 180 }}
      value={reviews.rating}
      readOnly
    />
    
   
    
                <p className="py-8">{reviews.details}</p>
                <h3 className="text-2xl text-orange-400">{reviews.name}</h3>
             </div>


            </SwiperSlide>)
        }
      </Swiper>
        </section>
    );
};

export default Testimonial;