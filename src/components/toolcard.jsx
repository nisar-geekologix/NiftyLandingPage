import Image from 'next/image';

const Toolcard = () => {
  return (
    <section>
      <div className="mx-auto px-4 sm:px-6 lg:px-14 py-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-5">
          <div className="group toolCard p-6 sm:p-4 md:p-6 cursor-pointer rounded-2xl shadow-md md:shadow-none md:rounded-[32px] bg-white duration-300 hover:bg-[#e8f4ff] hover:shadow-featureCard">
            <div className="flex justify-start mb-4">
              <Image 
                src="/images/advscrn-icon.svg" 
                width={60} 
                height={60} 
                alt="Advanced Stock Screener"
                className="group-hover:fill-[#007bff] duration-300"
              />
            </div>
            <p className="text-[#333333] text-lg md:text-[24px] font-semibold mb-2 group-hover:text-[#4399EB] duration-300">
              Advanced Stock Screener
            </p>
            <p className="font-normal text-[#999999] text-sm lg:text-base	 group-hover:text-[#4399EB] duration-300">
              Access advanced filters like volume shockers, price action, range breakout, opening price clues, and more for efficient stock screening.
            </p>
          </div>
          <div className="group toolCard p-6 sm:p-4 md:p-6 cursor-pointer rounded-2xl shadow-md md:shadow-none md:rounded-[32px] bg-white duration-300 hover:bg-[#e8f4ff] hover:shadow-featureCard">
            <div className="flex justify-start mb-4">
              <Image 
                src="/images/query_stats.svg" 
                width={60} 
                height={60} 
                alt="Live Market Screener"
                className="group-hover:fill-[#007bff] duration-300"
              />
            </div>
            <p className="text-[#333333] text-lg md:text-[24px] font-semibold mb-2 group-hover:text-[#4399EB] duration-300">
              Live Market Screener
            </p>
            <p className="font-normal text-[#999999] text-sm lg:text-base group-hover:text-[#4399EB] duration-300">
              Access real-time market data and dynamic filters to ensure timely trades without outdated information.
            </p>
          </div>
          <div className="group toolCard p-6 sm:p-4 md:p-6 cursor-pointer rounded-2xl shadow-md md:shadow-none md:rounded-[32px] bg-white duration-300 hover:bg-[#e8f4ff] hover:shadow-featureCard">
            <div className="flex justify-start mb-4">
              <Image 
                src="/images/find_in_page.svg" 
                width={60} 
                height={60} 
                alt="Options Screener"
                className="group-hover:fill-[#007bff] duration-300"
              />
            </div>
            <p className="text-[#333333] text-lg md:text-[24px] font-semibold mb-2 group-hover:text-[#4399EB] duration-300">
              Options Screener
            </p>
            <p className="font-normal text-[#999999] text-sm lg:text-base group-hover:text-[#4399EB] duration-300">
              Quickly identify optimal trading opportunities in the options market with our real-time data and advanced filters.
            </p>
          </div>
          <div className="group toolCard p-6 sm:p-4 md:p-6 cursor-pointer rounded-2xl shadow-md md:shadow-none md:rounded-[32px] bg-white duration-300 hover:bg-[#e8f4ff] hover:shadow-featureCard">
            <div className="flex justify-start mb-4">
              <Image 
                src="/images/link.svg" 
                width={60} 
                height={60} 
                alt="Advanced Option Chain"
                className="group-hover:fill-[#007bff] duration-300"
              />
            </div>
            <p className="text-[#333333] text-lg md:text-[24px] font-semibold mb-2 group-hover:text-[#4399EB] duration-300">
              Advanced Option Chain
            </p>
            <p className="font-normal text-[#999999] text-sm lg:text-base group-hover:text-[#4399EB] duration-300">
              Stay ahead with highlighted data on Greeks, PCR, Vol PCR, and Expected Range for the Day feature for confident target setting.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Toolcard;

