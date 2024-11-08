const FreetrielBanner = () => {
    return (
        <section className="mx-auto px-2 py-15 sm:px-6 lg:px-14 ">
            <div className="bg-[url('/images/free-triel.jpg')] bg-auto bg-no-repeat bg-right shadow-xl p-4 bg-white  rounded-md ">
                <div className="flex justify-around items-center gap-4 p-6">
                    <div>
                        <p className="text-[44px] text-[#333333] font-bold">
                            Missing Trades Because of Outdated Data?
                        </p>
                        <p className="text-[32px] text-[#333333] font-medium">
                            Get the Live Market Screening with Dynamic Filters
                        </p>
                    </div>
                    <div>
                        <button type="button" className="freetrielbtn">
                            <span> Free Trial </span>
                        </button>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default FreetrielBanner;
