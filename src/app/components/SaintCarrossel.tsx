"use client"

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination } from 'swiper/modules'
import { Slide } from '../data/saintDetails'

export default function SaintCarousel({ slides }: { slides: Slide[] }) {
  return (
    <section className="w-full max-w-3xl mx-auto px-4 py-8">
      <Swiper
        pagination={{ clickable: true }}
        modules={[Pagination]}
        spaceBetween={24}
        slidesPerView={1}
        className="pb-8"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="bg-[#fdfaf7] border border-[#e5ddd5] rounded-2xl shadow-md px-6 py-6 sm:px-10 sm:py-8 transition-all duration-300">
              <h2 className="text-xl sm:text-2xl font-semibold text-[#5E4638] mb-3 tracking-tight text-center sm:text-left">
                {slide.title}
              </h2>
              <p className="text-sm sm:text-base leading-relaxed text-[#5E4638] text-justify">
                {slide.text}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}
