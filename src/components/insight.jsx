'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import Image from 'next/image';

const Insight = () => {
  return (
    <section className="bg-gray-200">
      <div className="text-center py-12 px-4">
        <h2 className="text-gray-800 text-2xl md:text-4xl font-bold uppercase mb-4">
          The Ultimate Destination For Stock Market Insight
        </h2>
        <p className="text-gray-700 text-base md:text-2xl font-normal mb-6">
          Join 1 million Traders & Investors who trust Nifty Trader for smart trading & real-time stock insights.
        </p>
        <button
          type="button"
          className="text-gray-800 font-medium border border-gray-800 px-6 py-3 rounded-md hover:bg-gray-800 hover:text-white transition"
        >
          Explore Features
        </button>
      </div>

      <div className="insightSlider relative">
        <div className="overlaySlider"></div>
        <Swiper
          effect="coverflow"
          grabCursor
          centeredSlides
          slidesPerView="auto"
          loop={true}
          initialSlide={2}  
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={{ clickable: true }}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          className="mySwiper max-w-5xl mx-auto overflow-visible py-12 px-4"
        >
          <SwiperSlide className="flex flex-col items-center justify-center">
            <h3 className="text-center text-white text-2xl md:text-4xl font-semibold mb-4 md:mb-8">Option Screener</h3>
            <Image src="/images/opt-scrn.svg" alt="Option Screener" width={300} height={200} className="w-48 md:w-60 lg:w-72" />
          </SwiperSlide>
          <SwiperSlide className="flex flex-col items-center justify-center">
            <h3 className="text-center text-white text-2xl md:text-4xl font-semibold mb-4 md:mb-8">Live Market Screener</h3>
            <Image src="/images/livescrn.svg" alt="Live Market Screener" width={300} height={200} className="w-48 md:w-60 lg:w-72" />
          </SwiperSlide>
          <SwiperSlide className="flex flex-col items-center justify-center">
            <h3 className="text-center text-white text-2xl md:text-4xl font-semibold mb-4 md:mb-8">Option Chain</h3>
            <Image src="/images/opt-chain.svg" alt="Option Chain" width={300} height={200} className="w-48 md:w-60 lg:w-72" />
          </SwiperSlide>
          <SwiperSlide className="flex flex-col items-center justify-center">
            <h3 className="text-center text-white text-2xl md:text-4xl font-semibold mb-4 md:mb-8">Option Simulator</h3>
            <Image src="/images/opt-sum.svg" alt="Option Simulator" width={300} height={200} className="w-48 md:w-60 lg:w-72" />
          </SwiperSlide>
          <SwiperSlide className="flex flex-col items-center justify-center">
            <h3 className="text-center text-white text-2xl md:text-4xl font-semibold mb-4 md:mb-8">Advanced Stock Screener</h3>
            <Image src="/images/advscrn.svg" alt="Advanced Stock Screener" width={300} height={200} className="w-48 md:w-60 lg:w-72" />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Insight;
