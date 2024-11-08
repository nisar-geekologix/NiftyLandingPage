

const Footerbanner = () => {
    return (
        <section>
            <div className="bg-[url('/images/footer-banner.jpg')] bg-auto bg-no-repeat bg-right shadow-xl py-10 bg-white  rounded-md">
                <div className="flex justify-around py-[150px]">
                    <div className=""></div>
                    <div className="text-center">
                        <p className="text-[40px] font-normal text-[#333333] mb-5">Screening Like a Pro with <span className="font-medium">Nifty Trader</span> </p>
                        <p className=" text-[24px] text-[#999999] font-normal mb-5" >Stop wasting time and start winning! Get access to  Nifty Trader's Stock Screeners today!</p>
                        <button className="text-white bg-[#4399EB] py-4 px-[113px] rounded-lg text-[28px] font-semibold mt-4" >
                            Start Free Trial Now
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footerbanner;