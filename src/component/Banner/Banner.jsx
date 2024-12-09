import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import { Typewriter } from "react-simple-typewriter";

const Banner = () => {
    return (
        <div className="relative w-full h-screen">
            <Swiper
                modules={[Autoplay, Pagination]}
                autoplay={{ delay: 4000, disableOnInteraction: false }}
                pagination={{ clickable: true }}
                loop={true}
                className="w-full h-full"
            >
                {/* Slide 1 */}
                <SwiperSlide>
                    <div
                        className="w-full h-full bg-cover bg-center text-white flex items-center justify-center"
                        style={{
                            backgroundImage: `url('https://images.unsplash.com/photo-1530789253388-582c481c54b0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
                        }}
                    >
                        <div className="bg-black bg-opacity-50 p-8 rounded-lg text-center">
                            <h2 className="text-4xl md:text-6xl font-bold mb-4">
                                <Typewriter
                                    words={['Explore Visa Requirements']}
                                    loop={5}
                                    cursor
                                    cursorStyle="|"
                                    typeSpeed={70}
                                    deleteSpeed={60}
                                    delaySpeed={1000}
                                />
                            </h2>
                            <p className="text-lg md:text-xl">
                                <Typewriter
                                    words={[' Discover the updated visa policies for your favorite destinations with ease.']}
                                    loop={5}
                                    cursor
                                    cursorStyle="|"
                                    typeSpeed={70}
                                    deleteSpeed={60}
                                    delaySpeed={1000}
                                />
                            </p>
                        </div>
                    </div>
                </SwiperSlide>

                {/* Slide 2 */}
                <SwiperSlide>
                    <div
                        className="w-full h-full bg-cover bg-center text-white flex items-center justify-center"
                        style={{
                            backgroundImage: `url('https://images.unsplash.com/photo-1707343848552-893e05dba6ac?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
                        }}
                    >
                        <div className="bg-black bg-opacity-50 p-8 rounded-lg text-center">
                            <h2 className="text-4xl md:text-6xl font-bold mb-4">
                                <Typewriter
                                    words={['Apply for Visas Online']}
                                    loop={5}
                                    cursor
                                    cursorStyle="|"
                                    typeSpeed={70}
                                    deleteSpeed={60}
                                    delaySpeed={1000}
                                />
                            </h2>
                            <p className="text-lg md:text-xl">
                                <Typewriter
                                    words={[' Save time and effort by applying online with our seamless process.']}
                                    loop={5}
                                    cursor
                                    cursorStyle="|"
                                    typeSpeed={70}
                                    deleteSpeed={60}
                                    delaySpeed={1000}
                                />
                            </p>
                        </div>
                    </div>
                </SwiperSlide>

                {/* Slide 3 */}
                <SwiperSlide>
                    <div
                        className="w-full h-full bg-cover bg-center text-white flex items-center justify-center"
                        style={{
                            backgroundImage: `url('https://images.unsplash.com/photo-1520466809213-7b9a56adcd45?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
                        }}
                    >
                        <div className="bg-black bg-opacity-50 p-8 rounded-lg text-center">
                            <h2 className="text-4xl md:text-6xl font-bold mb-4">
                                <Typewriter
                                    words={['Track Your Applications']}
                                    loop={5}
                                    cursor
                                    cursorStyle="|"
                                    typeSpeed={70}
                                    deleteSpeed={60}
                                    delaySpeed={1000}
                                />
                            </h2>
                            <p className="text-lg md:text-xl">
                                <Typewriter
                                    words={['Monitor the status of your visa applications in real-time.']}
                                    loop={5}
                                    cursor
                                    cursorStyle="|"
                                    typeSpeed={70}
                                    deleteSpeed={60}
                                    delaySpeed={1000}
                                />
                            </p>
                        </div>
                    </div>
                </SwiperSlide>
                {/* Slide 4 */}
                <SwiperSlide>
                    <div
                        className="w-full h-full bg-cover bg-center text-white flex items-center justify-center"
                        style={{
                            backgroundImage: `url('https://images.unsplash.com/photo-1506012787146-f92b2d7d6d96?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
                        }}
                    >
                        <div className="bg-black bg-opacity-50 p-8 rounded-lg text-center">
                            <h2 className="text-4xl md:text-6xl font-bold mb-4">
                                <Typewriter
                                    words={['Immigration Support']}
                                    loop={5}
                                    cursor
                                    cursorStyle="|"
                                    typeSpeed={70}
                                    deleteSpeed={60}
                                    delaySpeed={1000}
                                />
                            </h2>
                            <p className="text-lg md:text-xl">
                                <Typewriter
                                    words={['Get expert advice and guidance for smooth immigration processes.']}
                                    loop={5}
                                    cursor
                                    cursorStyle="|"
                                    typeSpeed={70}
                                    deleteSpeed={60}
                                    delaySpeed={1000}
                                />
                            </p>
                        </div>
                    </div>
                </SwiperSlide>

                {/* Slide 5 */}
                <SwiperSlide>
                    <div
                        className="w-full h-full bg-cover bg-center text-white flex items-center justify-center"
                        style={{
                            backgroundImage: `url('https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2021&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
                        }}
                    >
                        <div className="bg-black bg-opacity-50 p-8 rounded-lg text-center">
                            <h2 className="text-4xl md:text-6xl font-bold mb-4">
                                Travel the World
                            </h2>
                            <p className="text-lg md:text-xl">
                                Make your dream destinations a reality with simplified travel processes.
                            </p>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;
