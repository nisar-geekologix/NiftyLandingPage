'use client';
import { useState , useEffect } from "react";
import Marquee from "react-fast-marquee";
import Image from 'next/image';


const TestimonialCard = ({ testimonial }) => (
    <div className="profile-card drop-shadow-md border p-4 bg-white rounded-lg">
        <div className="flex items-center">
            <div className="profile mr-4">
                <Image src={testimonial.image} width={172} height={172} alt={testimonial.name} className='w-[100%]' />
            </div>
            <div>
                <p className="text-[24px] font-semibold text-[#333333]">{testimonial.name}</p>
                <p className="font-normal text-[#333333]">
                    {testimonial.testimonial}
                </p>
            </div>
        </div>
    </div>
);


const Testimonials = () => {

    const testimonialData = [
        {
            name: 'Bhavyaa Narotambhai',
            image: '/images/profile-girl.svg',
            testimonial: 'Very good app for intraday traders. Highly informative and easy to understand. Very good work done by the organization. Many of my friends recommend all traders to use this app.'
        },
        {
            name: 'Rajkumari Sahani',
            image: '/images/profile-girl.svg',
            testimonial: 'Very good app for intraday traders. Highly informative and easy to understand. Very good work done by the organization. Many of my friends recommend all traders to use this app.'
        },
        {
            name: 'Anjan Banerjee',
            image: '/images/profile-girl.svg',
            testimonial: 'Very good app for intraday traders. Highly informative and easy to understand. Very good work done by the organization. Many of my friends recommend all traders to use this app.'
        },
        {
            name: 'Vibha Hegde',
            image: '/images/profile-girl.svg',
            testimonial: 'Very good app for intraday traders. Highly informative and easy to understand. Very good work done by the organization. Many of my friends recommend all traders to use this app.'
        },
        {
            name: 'Bhavyaa Narotambhai',
            image: '/images/profile-girl.svg',
            testimonial: 'Very good app for intraday traders. Highly informative and easy to understand. Very good work done by the organization. Many of my friends recommend all traders to use this app.'
        },
        {
            name: 'Rajkumari Sahani',
            image: '/images/profile-girl.svg',
            testimonial: 'Very good app for intraday traders. Highly informative and easy to understand. Very good work done by the organization. Many of my friends recommend all traders to use this app.'
        },
        {
            name: 'Anjan Banerjee',
            image: '/images/profile-girl.svg',
            testimonial: 'Very good app for intraday traders. Highly informative and easy to understand. Very good work done by the organization. Many of my friends recommend all traders to use this app.'
        },
        {
            name: 'Vibha Hegde',
            image: '/images/profile-girl.svg',
            testimonial: 'Very good app for intraday traders. Highly informative and easy to understand. Very good work done by the organization. Many of my friends recommend all traders to use this app.'
        }
    ];

    const [screenWidth, setScreenWidth] = useState(0);

    useEffect(() => {
        setScreenWidth(window.innerWidth);

        const handleResize = () => {
            setScreenWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const getMarqueeSpeed = () => {
        if (screenWidth < 640) {
            return 40; // Slower speed for mobile
        } else if (screenWidth < 1024) {
            return 50; // Medium speed for tablets
        } else {
            return 60; // Faster speed for desktop
        }
    };

    const getTestimonialGroups = () => {
        if (screenWidth < 640) {
            return testimonialData.slice(0, 2); // Show 2 testimonials on mobile
        } else if (screenWidth < 1024) {
            return testimonialData.slice(0, 4); // Show 4 testimonials on tablets
        } else {
            return testimonialData; // Show all testimonials on desktop
        }
    };

    return (
        <>
            <section>
                <div className="mx-auto px-2 py-10 sm:px-6 lg:px-14">
                    <div className="text-center">
                        <p className="text-[46px] text-[#333333] font-bold " >Client Testimonials</p>
                    </div>
                    <div className="testimonialSlider1 gap-4 py-20 ">
                    <Marquee
                            speed={getMarqueeSpeed()}
                            gradient={true}
                            gradientColor={[255, 255, 255]}
                            gradientWidth={100}
                            pauseOnHover={true}
                            className="mb-8"
                        >
                            {getTestimonialGroups().map((testimonial, index) => (
                                <div key={index} className="mx-4 w-[300px] sm:w-[400px] lg:w-[500px]">
                                    <TestimonialCard testimonial={testimonial} />
                                </div>
                            ))}
                        </Marquee>
                        <Marquee
                            speed={getMarqueeSpeed()}
                            gradient={true}
                            gradientColor={[255, 255, 255]}
                            gradientWidth={100}
                            pauseOnHover={true}
                            direction="right"
                        >
                            {getTestimonialGroups().map((testimonial, index) => (
                                <div key={index} className="mx-4 w-[300px] sm:w-[400px] lg:w-[500px]">
                                    <TestimonialCard testimonial={testimonial} />
                                </div>
                            ))}
                        </Marquee>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Testimonials;