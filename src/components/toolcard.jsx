import Image from 'next/image';

const Toolcard = () => {
    return (
        <>
            <section>
                <div className="mx-auto px-2 py-3 sm:px-6 lg:px-14">
                    <div className="grid grid-flow-col gap-5 py-10	">
                        <div className="">
                            <div className="">
                                <Image className="" src="/images/advscrn-icon.svg" width={60} height={60} alt="" />
                            </div>
                            <p className="text-[#333333] text-[24px] font-semibold	">Advanced Stock Screener</p>
                            <p className="font-normal text-[#999999]">Access advanced flters like volume shockers, price action, range breakout, opening price  clues, and more for efcient stock screening.</p>
                        </div>
                        <div className="">
                            <div className="">
                                <Image className="" src="/images/query_stats.svg" width={60} height={60} alt="" />
                            </div>
                            <p className="text-[#333333] text-[24px] font-semibold	">Live Market Screener</p>
                            <p className="font-normal text-[#999999]">Access real-time market data and  dynamic flters to ensure timely trades  without outdated information.</p>
                        </div>
                        <div className="">
                            <div className="">
                                <Image className="" src="/images/find_in_page.svg" width={60} height={60} alt="" />
                            </div>
                            <p className="text-[#333333] text-[24px] font-semibold	">Options Screener</p>
                            <p className="font-normal text-[#999999]">Quickly identify optimal trading  opportunities in the options market with  our real-time data and advanced flters.</p>
                        </div>
                        <div className="">
                            <div className="">
                                <Image className="" src="/images/link.svg" width={60} height={60} alt="" />
                            </div>
                            <p className="text-[#333333] text-[24px] font-semibold	">Advanced Option Chain</p>
                            <p className="font-normal text-[#999999]">Stay ahead with highlighted data on  Greeks, PCR, Vol PCR, and Expected  Range for the Day feature for  confdent target setting.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Toolcard;