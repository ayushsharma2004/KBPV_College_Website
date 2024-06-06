import React from 'react'

const slider0 = () => {
    return (
        <>

            <div id="slider-container">
                {/* <img src={board} alt="Image Slider" /> */}
                <div id="swiper-container">
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={30}
                        loop={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        navigation={true}
                        modules={[Autoplay, Pagination, Navigation]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <img src={slider1} alt="Image Slider" className="imgs" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={slider2} alt="Image Slider" className="imgs" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={slider3} alt="Image Slider" className="imgs" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={slider4} alt="Image Slider" className="imgs" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={slider5} alt="Image Slider" className="imgs" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={slider6} alt="Image Slider" className="imgs" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={slider7} alt="Image Slider" className="imgs" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={slider8} alt="Image Slider" className="imgs" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={slider9} alt="Image Slider" className="imgs" />
                        </SwiperSlide>

                    </Swiper>
                </div>
            </div>
        </>
    )
}

export default slider0