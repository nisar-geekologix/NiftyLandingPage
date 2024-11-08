'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

const Insight = () => {
  return (
    <section className="bg-gray-200">
      <div className="text-center py-12">
        <h2 className="text-gray-800 text-3xl md:text-4xl font-bold uppercase mb-4">
          The Ultimate Destination For Stock Market Insight
        </h2>
        <p className="text-gray-700 text-lg md:text-2xl font-normal mb-6">
          Join 1 million Traders & Investors who trust Nifty Trader for smart trading & real-time stock insights.
        </p>
        <button
          type="button"
          className="text-gray-800 font-medium border border-gray-800 px-6 py-3 rounded-md hover:bg-gray-800 hover:text-white transition"
        >
          Explore Features
        </button>
      </div>

      <div className="insightSlider">
        <div className="overlaySlider"></div>
        <Swiper
          effect="coverflow"
          grabCursor
          centeredSlides
          slidesPerView="auto"
          initialSlide={2}  // Set the "Live Market Screener" slide as the initial slide
          autoplay={{ delay: 3000, disableOnInteraction: false }} // Autoplay with a 3-second delay
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={{ clickable: true }}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          className="mySwiper max-w-4xl mx-auto overflow-visible py-12"
        >
          <SwiperSlide>
            <h3 className="text-center text-white text-[46px] font-semibold mb-8">Option Screener</h3>
            <img src="/images/opt-scrn.svg" alt="Option Screener" className="" />
          </SwiperSlide>
          <SwiperSlide>
            <h3 className="text-center text-white text-[46px] font-semibold mb-8">Live Market Screener</h3>
            <img src="/images/livescrn.svg" alt="Live Market Screener" className="" />
          </SwiperSlide>
          <SwiperSlide>
            <h3 className="text-center text-white text-[46px] font-semibold mb-8">Option Chain</h3>
            <img src="/images/opt-chain.svg" alt="Option Chain" className="" />
          </SwiperSlide>
          <SwiperSlide>
            <h3 className="text-center text-white text-[46px] font-semibold mb-8">Option Simulator</h3>
            <img src="/images/opt-sum.svg" alt="Option Simulator" className="" />
          </SwiperSlide>
          <SwiperSlide>
            <h3 className="text-center text-white text-[46px] font-semibold mb-8">Advanced Stock Screener</h3>
            <img src="/images/advscrn.svg" alt="Advanced Stock Screener" className="" />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Insight;
