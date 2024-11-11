'use client';
import Marquee from "react-fast-marquee";
import Image from 'next/image';


const Testimonials = () => {
    const testimonialData = [
        {
            name: 'Bhavyaa Narotambhai',
            image: '/images/profile-girl.svg',
            testimonial: 'Superb app! You guys are great. Everything is at my fingertips now: option analysis, EMA, pivot points, company profiles, gaps up/down, FII & DII data, ban lists... What is not here?!   You keep nothing hidden. Thank you very much, guys! Thanks a lot!'
        },
        {
            name: 'Rajkumari Sahani',
            image: '/images/profile-girl-2.svg',
            testimonial: 'Very good app for intraday traders. Highly informative and easy to understand. Very good work done by the organization. Many of my friends recommend all traders to use this app.'
        },
        {
            name: 'Anjan Banerjee',
            image: '/images/profile-boy.svg',
            testimonial: 'Very good app for intraday traders. Highly informative and easy to understand. Very good work done by the organization. Many of my friends recommend all traders to use this app.'
        },
        {
            name: 'Vibha Hegde',
            image: '/images/profile-girl-2.svg',
            testimonial: 'Very good app for intraday traders. Highly informative and easy to understand. Very good work done by the organization. Many of my friends recommend all traders to use this app.'
        } 
    ];

    const testimonialData2 = [
        {
            name: 'Bhavyaa Narotambhai',
            image: '/images/profile-girl.svg',
            testimonial: 'Superb app! You guys are great. Everything is at my fingertips now: option analysis, EMA, pivot points, company profiles, gaps up/down, FII & DII data, ban lists... What is not here?!   You keep nothing hidden. Thank you very much, guys! Thanks a lot!'
        },
        {
            name: 'Rajkumari Sahani',
            image: '/images/profile-girl-2.svg',
            testimonial: 'Very good app for intraday traders. Highly informative and easy to understand. Very good work done by the organization. Many of my friends recommend all traders to use this app.'
        },
        {
            name: 'Anjan Banerjee',
            image: '/images/profile-boy.svg',
            testimonial: 'Very good app for intraday traders. Highly informative and easy to understand. Very good work done by the organization. Many of my friends recommend all traders to use this app.'
        },
        {
            name: 'Vibha Hegde',
            image: '/images/profile-girl-2.svg',
            testimonial: 'Very good app for intraday traders. Highly informative and easy to understand. Very good work done by the organization. Many of my friends recommend all traders to use this app.'
        } 
    ];


    return (
        <section className="py-10">
            <div className="mx-auto px-4 sm:px-6 lg:px-14">
                <div className="text-center mb-8">
                    <p className="text-[28px] sm:text-[36px] lg:text-[46px] text-[#333333] font-bold">
                        Client Testimonials
                    </p>
                </div>
                <div className=''>
                    <Marquee pauseOnHover={true} direction='left' speed='130'>
                        <div className="flex">
                            <div className="whitespace-nowrap">
                                <div className='flex gap-8 justify-between py-4 pl-4 md:mt-4 mt-10 w-full max-md:flex-wrap max-md:max-w-full'>
                                    {testimonialData.map(item => (
                                        <div key={item.name} className="p-6 bg-white shadow-review rounded-[32px] max-md:px-5 max-md:max-w-full last:me-5 w-[300px] md:w-[500px] lg:w-[807px]">
                                            <div className="relative flex gap-5 max-md:flex-col max-md:gap-0">
                                                <div className="absolute -top-28 md:top-auto left-[80%] md:left-auto -translate-x-1/2 md:translate-x-0 md:relative flex flex-col w-[23%] max-md:ml-0 max-md:w-full">
                                                    <Image
                                                        loading="lazy"
                                                        src={item.image}
                                                        width={100}
                                                        height={100}
                                                        alt={item.name}
                                                        className="shrink-0 max-w-full rounded-full aspect-square md:w-[172px] max-md:mt-10"
                                                    />
                                                </div>
                                                <div className="flex flex-col ml-5 w-[77%] max-md:ml-0 max-md:w-full">
                                                    <div className="flex flex-col self-stretch my-auto text-zinc-800 max-md:mt-10 max-md:max-w-full">
                                                        <div className="text-lg md:text-2xl font-semibold text-wrap max-md:max-w-full">
                                                            {item?.name}
                                                        </div>
                                                        <div className="mt-1.5 text-sm md:text-base font-medium max-md:max-w-full whitespace-normal">
                                                            {item?.testimonial}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </Marquee>

                    <Marquee pauseOnHover={true} direction='right' speed='130'>
                        <div className="flex">
                            <div className="whitespace-nowrap">
                                <div className='flex gap-8 justify-between py-4 pl-4 md:mt-4 mt-10 w-full max-md:flex-wrap max-md:max-w-full'>
                                    {testimonialData2?.reverse().map(item => (
                                        <div key={item.name} className="p-6 bg-white shadow-review rounded-[32px] max-md:px-5 max-md:max-w-full w-[300px] md:w-[500px] lg:w-[807px] last:me-5">
                                            <div className="relative flex gap-5 max-md:flex-col max-md:gap-0">
                                                <div className="absolute -top-28 md:top-auto left-[85%] md:left-auto -translate-x-1/2 md:translate-x-0 md:relative flex flex-col w-[23%] max-md:ml-0 max-md:w-full">
                                                    <Image
                                                        alt={item.name}
                                                        loading="lazy"
                                                        src={item.image}
                                                        width={100}
                                                        height={100}
                                                        className="shrink-0 max-w-full rounded-full aspect-square md:w-[172px] max-md:mt-10"
                                                    />
                                                </div>
                                                <div className="flex flex-col flex-nowrap ml-5 w-[77%] max-md:ml-0 max-md:w-full">
                                                    <div className="flex flex-col self-stretch my-auto text-zinc-800 max-md:mt-10 max-md:max-w-full">
                                                        <div className="text-lg md:text-2xl font-semibold text-wrap max-md:max-w-full">
                                                            {item?.name}
                                                        </div>
                                                        <div className="mt-1.5 text-sm md:text-base font-medium max-md:max-w-full whitespace-normal">
                                                            {item?.testimonial}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </Marquee>
                </div >
            </div>
        </section>
    );
};

export default Testimonials;
