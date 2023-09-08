import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination} from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './../index.css';


function Example4() {
    const [isActive,setIsActive] = useState("close");

  return (
    <>
        <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={50}
            slidesPerView={3}
            navigation
            pagination={{ clickable: true }}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            >
                {
                    Array(50).fill().map((e,i)=>{
                        return(
                            <SwiperSlide key={i}>Slide{i+1}</SwiperSlide>
                        )
                    })
                }
            </Swiper>
            <button onClick={()=>{setIsActive(isActive === "open" ? "close" : "open")}}>클릭</button>
            {/* toggle 사용하려면 꼭 삼항연산자사용 */}
            <span>{isActive}</span>
            {/* <p className={isActive === "open" ? "active" : "" } style={{display: isActive === "open" ? "block" : "none"}}>Lorem ipsum dolor sit amet.</p> */}
            {/* 모든변수에는 삼항연산자를 쓸 수 있음 classname tage 요소에도 쓸 수 있음 
            테일윈드에서 스타일 적용할때는 {`text-center font-bold... ${삼항연산자}`}*/}
            {
                isActive === "open" &&
                <p className={`text-center font-bold border ${isActive === "open" ? "active" : ""}`}>Lorem ipsum dolor sit amet.</p>
            }
    </>
  )
}

export default Example4