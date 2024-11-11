import Link from 'next/link';

const FreetrielBanner = () => {
    return (
        <section className="mx-0 lg:mx-[60px]  lg:py-10 ">
            <div className="py-12 lg:py-5 bg-[url('/images/free-triel-mobile.jpg')] lg:bg-[url('/images/free-triel.jpg')] bg-cover lg:bg-auto bg-no-repeat bg-right shadow-freetrielbanner rounded-md lg:bg-white ">
                <div className="flex-none lg:flex justify-between items-center gap-4 p-6">
                    <div className="text-center lg:text-right ml-0 lg:ml-[70px]" >
                        <p className=" text-[18px] lg:text-[44px] md:text-3xl  lg:text-[#333333]  text-white font-bold text-center lg:text-start ">
                            Missing Trades Because of Outdated Data?
                        </p>
                        <p className="text-sm md:text-xxl lg:text-[32px] mt-2 lg:text-[#333333]  text-white  font-medium w-100 text-center lg:text-start lg:py-5 sm:py-2">
                            Get the Live Market Screening with Dynamic Filters
                        </p>
                    </div>
                    <div className="text-center lg:text-right mt-10 lg:mt-0" >
                        <Link href="#" className="bg-freetriel-btn mt-[100px] text-center px-10 py-5  text-md md:text-xl lg:text-[28px] font-bold text-white hover:bg-none rounded-lg max-md:px-6  cursor-pointer hover:bg-transparent hover:text-[#004063] hover:border border-[#004063] duration-200 ">
                            <span> Get Free Trial </span>
                        </Link>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default FreetrielBanner;




