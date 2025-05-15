

"use client"

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination } from 'swiper/modules'
import { Slide } from '../data/saintDetails'


export default function SaintCarousel({ slides }: { slides: Slide[] }) {
    return (
        <section className="w-full max-w-4xl mx-auto px-4 py-16">
            <Swiper
                pagination={{ clickable: true }}
                modules={[Pagination]}
                spaceBetween={32}
                slidesPerView={1}
                className="pb-12"
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <div className="bg-[#fdfaf7] border border-[#e5ddd5] rounded-3xl shadow-md p-8 sm:p-10 transition-all duration-300">
                           
                            <h2 className="text-2xl sm:text-3xl font-semibold text-[#5E4638] mb-4 tracking-tight">
                                {slide.title}
                            </h2>
                            <p className="text-base sm:text-lg leading-relaxed text-[#5E4638] text-justify">
                                {slide.text}
                            </p>

                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    )
}
