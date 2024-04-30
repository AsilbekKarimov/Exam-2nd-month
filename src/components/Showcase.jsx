import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

const Swipe = () => {
  const [slide, setSlide] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://dummyjson.com/products/")
      .then((res) => res.json())
      .then((data) => {
        setSlide(data.products);
        setLoading(false); 
      });
  }, []);

  const FilteredSlides = slide.filter((slide) => slide.rating > 4.7);

  return (
    <div className="w-[85%] mx-auto py-10">
      <p className="font-bold text-[30px] mb-[20px]">
        Top Products
      </p>
      {loading ? (
        <div className="flex items-center justify-center w-full h-[550px]">
          <span className="loading loading-spinner loading-lg"></span>
        </div>
      ) : (
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          autoplay={{ delay: 1000 }}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation, Autoplay]}
          className="mySwiper w-full h-[550px] rounded-3xl"
        >
          {FilteredSlides.map((slide, id) => (
            <SwiperSlide key={id}>
              <img
                src={slide.thumbnail}
                className="cover w-full h-full"
                alt=""
              />
              
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
};

export default Swipe;
