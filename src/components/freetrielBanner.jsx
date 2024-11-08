const FreetrielBanner = () => {
    return (
        <section className="mx-0 lg:mx-[60px] py-0 lg:py-10 ">
            <div className="bg-[url('/images/free-triel-mobile.jpg')] lg:bg-[url('/images/free-triel.jpg')] bg-cover lg:bg-auto bg-no-repeat bg-right lg:shadow-xl  rounded-md ">
                <div className="flex-none lg:flex justify-around items-center gap-4 p-6">
                    <div className=" text-center lg:text-left" >
                        <p className="lg:text-[44px] sm:text-[18px] lg:text-[#333333]  text-white font-bold lg:py-0 sm:py-2 ">
                            Missing Trades Because of Outdated Data?
                        </p>
                        <p className="lg:text-[32px] sm:text-[12px] lg:text-[#333333]  text-white  font-medium lg:py-0 sm:py-2">
                            Get the Live Market Screening with Dynamic Filters
                        </p>
                    </div>
                    <div className="text-center lg:text-left" >
                        <button type="button" className="freetrielbtn">
                            <span> Get Free Trial </span>
                        </button>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default FreetrielBanner;
