

const Footerbanner = () => {
    return (
        <section>
            <div className="md:px-20 md:py-20 pb-8 xl:pb-0 w-full xl:min-h-[490px] max-md:px-5 xl:bg-[url('/images/footer-banner.jpg')] bg-[url('/images/mobile-footer-banner.jpg')] bg-no-repeat bg-cover max-md:bg-[#F8FBFF]">
            <div className='container !bg-transparent flex justify-center xl:justify-end items-center'>
                    <div className="flex flex-col items-center justify-center xl:w-[50%] xl:pr-32 4xl:pr-60">
                        <div className="text-center">
                            <p className="mb-5 mt-8 text-3xl lg:text-[40px] font-light text-center text-zinc-800">Screening Like a Pro with <span className="font-semibold block my-4 mt-0 lg:mt-4">Nifty Trader</span> </p>
                            <p className="text-md lg:text-[24px] text-[#999999] font-normal mb-5 text-center" >Stop wasting time and start winning! Get access to  Nifty Trader's Stock Screeners today!</p>
                            <button className="text-center px-14 py-3 md:py-4 mt-6 md:mt-10 text-md md:text-xl lg:text-2xl font-medium text-white bg-footer-btn hover:bg-none rounded-lg max-md:px-6 max-md:mr-2.5 cursor-pointer hover:bg-white hover:text-[#4399EB] border-2 border-[#4399EB] duration-200" >
                                Start Free Trial Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footerbanner;