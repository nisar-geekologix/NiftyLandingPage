import Image from 'next/image';

const Header = () => {
    return (
        <>
            <section className="bg-[url('/images/hero-banner.jpg')] bg-cover bg-center" >
                <header>
                    <nav className="bg-[#11111180]">
                        <div className="mx-auto px-2 sm:px-6 lg:px-14">
                            <div className="h-16 flex justify-between items-center">
                                <div className="flex shrink-0 items-center">
                                    <Image src="/images/logo.svg" width={155} height={35} alt="Logo" className="md:w-[200px] md:h-[45px]" />
                                </div>
                                <button type="button" className="rounded-md font-medium border border-white hover:bg-white px-5 py-2" >
                                    <span className="text-white hover:text-black text-[14px] md:text-base"> Visit Website </span>
                                </button>
                            </div>
                        </div>
                    </nav>
                </header>
                <div className="mx-auto  sm:px-6 lg:px-14 px-4 py-24 flex flex-col md:flex-row items-center gap-10">
                    <div className="text-left max-w-lg">
                        <p className='text-white text-[60px] font-medium mb-4' >Stock Screening Simplifed!</p>
                        <p className='text-white text-[24px] mb-6 font-normal' >Find Winning Stock Faster with Nifty Trader's Advanced Stock Screening Tool.</p>
                        <button type="button" className="rounded-md font-medium border border-[#13A8D7] bg-[#13A8D7] hover:bg-transparent px-5 py-2" >
                            <span className="text-white hover:text-[#13A8D7] text-[24px] "> Free Trial </span>
                        </button>
                    </div>
                    <div className="w-full md:w-1/2 max-w-md">
                    </div>
                    <div className="relative">
                        <Image className="lg:w-[100%] rounded-[40px]" src="/images/thumbnail.jpg" width={700} height={100} alt="" />
                        <div className="absolute inset-0 flex justify-center items-center">
                            <Image className='' src="/images/play-btn.svg" width={96} height={96} alt='play Button' />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Header;
