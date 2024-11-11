import Image from 'next/image';


const PricePlan = () => {
    return (
        <>
            <section>
                <div className="mx-auto px-2 py-10 sm:px-6 lg:px-14">
                    <div className="text-center">
                        <p className="text-[28px] lg:text-[46px] text-[#333333] font-bold " >Pricing Plan</p>
                    </div>
                    <div className="PricePlan py-10">
                        <div className="overflow-auto flex justify-center  ">
                            <table className="table-fixed w-full bg-white">
                                <thead>
                                    <tr>
                                        <th className='w-1/4 border border-zinc-200 '>
                                            <div className="px-2 lg:px-8 py-1 md:py-4 md:px-4 text-zinc-800 md:leading-7 font-medium text-lg">
                                                <div className="flex gap-4 text-zinc-800">
                                                    <div className="text-start my-auto text-lg lg:text-2xl font-bold">
                                                        Compare plans
                                                    </div>
                                                    <div className="hidden lg:block justify-center px-2 lg:px-5  py-2 lg:py-2.5 text-sm lg:text-base font-medium rounded-3xl border border-solid border-neutral-400">
                                                        60% Off
                                                    </div>
                                                </div>
                                                <div className="mt-3 text-xs md:text-sm font-medium leading-5 text-start text-neutral-400">
                                                Choose your workspace plan according to your organisational plan.
                                                </div>
                                            </div>
                                        </th>
                                        <th className='w-1/4 border border-zinc-200 '>
                                            <div className="flex flex-col justify-center items-center p-2 md:p-3 lg:p-7">
                                                <div className="max-md:px-5">
                                                    <div className="flex flex-col lg:flex-row gap-2 justify-center item-center">
                                                        <div className="text-[26px] md:text-3xl lg:text-[40px] font-bold text-zinc-800">Free</div>
                                                        <div className="text-sm md:mt-3 font-medium leading-5 text-neutral-400 whitespace-nowrap">
                                                            / Lifetime
                                                        </div>
                                                    </div>
                                                </div>
                                                <a className="justify-center cursor-pointer w-full  items-center py-1 px-0 lg:px-3 lg:py-3 mt-7 text-[12px] md:text-base font-medium md:font-semibold text-center text-white bg-[#236AD4] rounded w-full cursor-pointer hover:bg-none hover:bg-white hover:text-[#236AD4] border-2 border-[#236AD4] duration-200">
                                                    Create Free Account
                                                </a>
                                            </div>
                                        </th>
                                        <th className='w-1/4 border border-zinc-200 '>
                                            <div className="flex flex-col justify-center items-center p-2 md:p-3 lg:p-7">
                                                <div className="max-md:px-5">
                                                    <div className="flex flex-col lg:flex-row gap-2 justify-center item-center">
                                                        <div className="text-[26px] md:text-3xl lg:text-[40px] font-bold text-zinc-800 whitespace-nowrap">₹ 849</div>
                                                        <div className="text-sm md:mt-3 font-medium leading-5 text-neutral-400">
                                                            / Month
                                                        </div>
                                                    </div>
                                                </div>
                                                <a className="justify-center cursor-pointer items-center py-3 mt-7 text-[12px] md:text-base font-medium md:font-semibold text-center text-white bg-[#236AD4] rounded w-full cursor-pointer hover:bg-none hover:bg-white hover:text-[#236AD4] border-2 border-[#236AD4] duration-200">
                                                    Login to Buy
                                                </a>
                                            </div>
                                        </th>
                                        <th className='w-1/4 border border-zinc-200 '>
                                            <div className="flex flex-col justify-center items-center p-2 md:p-3 lg:p-7">
                                                <div className="max-md:px-5">
                                                    <div className="flex flex-col lg:flex-row gap-2 justify-center item-center">
                                                        <div className="text-[26px] md:text-3xl lg:text-[40px] font-bold text-zinc-800 whitespace-nowrap">₹ 4310</div>
                                                        <div className="text-sm md:mt-3 font-medium leading-5 text-neutral-400">
                                                            / Year
                                                        </div>
                                                    </div>
                                                </div>
                                                <a className="justify-center cursor-pointer items-center py-3 mt-7 text-[12px] md:text-base font-medium md:font-semibold text-center text-white bg-[#236AD4] rounded w-full cursor-pointer hover:bg-none hover:bg-white hover:text-[#236AD4] border-2 border-[#236AD4] duration-200">
                                                    Login to Buy
                                                </a>
                                            </div>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="max-w-36 md:max-w-72 border border-zinc-200" >
                                            <div className="px-2 lg:px-8 py-1 md:py-4 md:px-4 text-zinc-800 md:leading-7 font-medium text-sm lg:text-lg"> Number of Users</div>
                                        </td>
                                        <td className="border border-zinc-200 lg:min-w-52 lg:max-w-52" >
                                            <div className="flex items-center justify-center font-medium text-[#333333]">
                                                1
                                            </div>
                                        </td>
                                        <td className="border border-zinc-200 lg:min-w-52 lg:max-w-52" >
                                            <div className="flex items-center justify-center font-medium text-[#333333]">3</div>
                                        </td>
                                        <td className="border border-zinc-200 lg:min-w-52 lg:max-w-52" >
                                            <div className="flex items-center justify-center font-medium text-[#333333]">1</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="max-w-36 md:max-w-72 border border-zinc-200" >
                                            <div className="px-2 lg:px-8 py-1 md:py-4 md:px-4 text-zinc-800 md:leading-7 font-medium text-sm lg:text-lg">
                                                Users Per Page
                                            </div>
                                        </td>
                                        <td className="border border-zinc-200 lg:min-w-52 lg:max-w-52" >
                                            <div className="flex justify-center items-center font-medium text-[#333333]">5 Pages</div>
                                        </td>
                                        <td className="border border-zinc-200 lg:min-w-52 lg:max-w-52" >
                                            <div className="flex justify-center items-center font-medium text-[#333333]">50 Pages</div>
                                        </td>
                                        <td className="border border-zinc-200 lg:min-w-52 lg:max-w-52">
                                            <div className="text-center">
                                                <p className="font-medium text-[#333333]" >Unlimited</p>
                                                <p className="font-medium text-[#999999]" > Pages Add-ons on Demand</p>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="max-w-36 md:max-w-72 border border-zinc-200" >
                                            <div className="px-2 lg:px-8 py-1 md:py-4 md:px-4 text-zinc-800 md:leading-7 font-medium text-sm lg:text-lg"> Includes essential features to get started</div>
                                        </td>
                                        <td className='border border-zinc-200 lg:min-w-52 lg:max-w-52' >
                                            <div className="flex justify-center items-center">
                                                <Image className="" src="/images/success.svg" width={20} height={20} alt="" />
                                            </div>
                                        </td>
                                        <td className='border border-zinc-200 lg:min-w-52 lg:max-w-52' >
                                            <div className="flex justify-center items-center">
                                                <Image className="" src="/images/success.svg" width={20} height={20} alt="" />
                                            </div>
                                        </td>
                                        <td className='border border-zinc-200 lg:min-w-52 lg:max-w-52' >
                                            <div className="flex justify-center items-center">
                                                <Image className="" src="/images/success.svg" width={20} height={20} alt="" />
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="max-w-36 md:max-w-72 border border-zinc-200" >
                                            <div className="px-2 lg:px-8 py-1 md:py-4 md:px-4 text-zinc-800 md:leading-7 font-medium text-sm lg:text-lg"> More advanced features for increased productivity</div>
                                        </td>
                                        <td className='border border-zinc-200 lg:min-w-52 lg:max-w-52' >
                                            <div className="flex justify-center items-center">
                                                <Image className="" src="/images/failed.svg" width={20} height={20} alt="" />
                                            </div>
                                        </td>
                                        <td className='border border-zinc-200 lg:min-w-52 lg:max-w-52' >
                                            <div className="flex justify-center items-center">
                                                <Image className="" src="/images/success.svg" width={20} height={20} alt="" />
                                            </div>
                                        </td>
                                        <td className='border border-zinc-200 lg:min-w-52 lg:max-w-52' >
                                            <div className="flex justify-center items-center">
                                                <Image className="" src="/images/success.svg" width={20} height={20} alt="" />
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="max-w-36 md:max-w-72 border border-zinc-200" >
                                            <div className="px-2 lg:px-8 py-1 md:py-4 md:px-4 text-zinc-800 md:leading-7 font-medium text-sm lg:text-lg"> Designing & Development</div>
                                        </td>
                                        <td className='border border-zinc-200 lg:min-w-52 lg:max-w-52' >
                                            <div className="flex justify-center items-center">
                                                <Image className="" src="/images/failed.svg" width={20} height={20} alt="" />
                                            </div>
                                        </td>
                                        <td className='border border-zinc-200 lg:min-w-52 lg:max-w-52' >
                                            <div className="flex justify-center items-center">
                                                <Image className="" src="/images/success.svg" width={20} height={20} alt="" />
                                            </div>
                                        </td>
                                        <td className='border border-zinc-200 lg:min-w-52 lg:max-w-52' >
                                            <div className="flex justify-center items-center">
                                                <Image className="" src="/images/success.svg" width={20} height={20} alt="" />
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="max-w-36 md:max-w-72 border border-zinc-200" >
                                            <div className="px-2 lg:px-8 py-1 md:py-4 md:px-4 text-zinc-800 md:leading-7 font-medium text-sm lg:text-lg"> Customizable options to meet your specific needs</div>
                                        </td>
                                        <td className='border border-zinc-200 lg:min-w-52 lg:max-w-52' >
                                            <div className="flex justify-center items-center">
                                                <Image className="" src="/images/failed.svg" width={20} height={20} alt="" />
                                            </div>
                                        </td>
                                        <td className='border border-zinc-200 lg:min-w-52 lg:max-w-52' >
                                            <div className="flex justify-center items-center">
                                                <Image className="" src="/images/success.svg" width={20} height={20} alt="" />
                                            </div>
                                        </td>
                                        <td className='border border-zinc-200 lg:min-w-52 lg:max-w-52' >
                                            <div className="flex justify-center items-center">
                                                <Image className="" src="/images/success.svg" width={20} height={20} alt="" />
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="max-w-36 md:max-w-72 border border-zinc-200" >
                                            <div className="px-2 lg:px-8 py-1 md:py-4 md:px-4 text-zinc-800 md:leading-7 font-medium text-sm lg:text-lg"> Secure data storage</div>
                                        </td>
                                        <td className='border border-zinc-200 lg:min-w-52 lg:max-w-52' >
                                            <div className="flex justify-center items-center">
                                                <Image className="" src="/images/failed.svg" width={20} height={20} alt="" />
                                            </div>
                                        </td>
                                        <td className='border border-zinc-200 lg:min-w-52 lg:max-w-52' >
                                            <div className="flex justify-center items-center">
                                                <Image className="" src="/images/success.svg" width={20} height={20} alt="" />
                                            </div>
                                        </td>
                                        <td className='border border-zinc-200 lg:min-w-52 lg:max-w-52' >
                                            <div className="flex justify-center items-center">
                                                <Image className="" src="/images/success.svg" width={20} height={20} alt="" />
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="max-w-36 md:max-w-72 border border-zinc-200" >
                                            <div className="px-2 lg:px-8 py-1 md:py-4 md:px-4 text-zinc-800 md:leading-7 font-medium text-sm lg:text-lg"> Email Support</div>
                                        </td>
                                        <td className='border border-zinc-200 lg:min-w-52 lg:max-w-52' >
                                            <div className="flex justify-center items-center">
                                                <Image className="" src="/images/failed.svg" width={20} height={20} alt="" />
                                            </div>
                                        </td>
                                        <td className='border border-zinc-200 lg:min-w-52 lg:max-w-52' >
                                            <div className="flex justify-center items-center">
                                                <Image className="" src="/images/success.svg" width={20} height={20} alt="" />
                                            </div>
                                        </td>
                                        <td className='border border-zinc-200 lg:min-w-52 lg:max-w-52' >
                                            <div className="flex justify-center items-center">
                                                <Image className="" src="/images/success.svg" width={20} height={20} alt="" />
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="max-w-36 md:max-w-72 border border-zinc-200" >
                                            <div className="px-2 lg:px-8 py-1 md:py-4 md:px-4 text-zinc-800 md:leading-7 font-medium text-sm lg:text-lg"> 24/7 customer support</div>
                                        </td>
                                        <td className='border border-zinc-200 lg:min-w-52 lg:max-w-52' >
                                            <div className="flex justify-center items-center">
                                                <Image className="" src="/images/failed.svg" width={20} height={20} alt="" />
                                            </div>
                                        </td>
                                        <td className='border border-zinc-200 lg:min-w-52 lg:max-w-52' >
                                            <div className="flex justify-center items-center">
                                                <Image className="" src="/images/success.svg" width={20} height={20} alt="" />
                                            </div>
                                        </td>
                                        <td className='border border-zinc-200 lg:min-w-52 lg:max-w-52' >
                                            <div className="flex justify-center items-center">
                                                <Image className="" src="/images/success.svg" width={20} height={20} alt="" />
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="max-w-36 md:max-w-72 border border-zinc-200" >
                                            <div className="px-2 lg:px-8 py-1 md:py-4 md:px-4 text-zinc-800 md:leading-7 font-medium text-sm lg:text-lg">Analytics and reporting</div>
                                        </td>
                                        <td className='border border-zinc-200 lg:min-w-52 lg:max-w-52' >
                                            <div className="flex justify-center items-center">
                                                <Image className="" src="/images/failed.svg" width={20} height={20} alt="" />
                                            </div>
                                        </td>
                                        <td className='border border-zinc-200 lg:min-w-52 lg:max-w-52' >
                                            <div className="flex justify-center items-center">
                                                <Image className="" src="/images/success.svg" width={20} height={20} alt="" />
                                            </div>
                                        </td>
                                        <td className='border border-zinc-200 lg:min-w-52 lg:max-w-52' >
                                            <div className="flex justify-center items-center">
                                                <Image className="" src="/images/success.svg" width={20} height={20} alt="" />
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="max-w-36 md:max-w-72 border border-zinc-200" >
                                            <div className="px-2 lg:px-8 py-1 md:py-4 md:px-4 text-zinc-800 md:leading-7 font-medium text-sm lg:text-lg">Account Management</div>
                                        </td>
                                        <td className='border border-zinc-200 lg:min-w-52 lg:max-w-52' >
                                            <div className="flex justify-center items-center">
                                                <Image className="" src="/images/success.svg" width={20} height={20} alt="" />
                                            </div>
                                        </td>
                                        <td className='border border-zinc-200 lg:min-w-52 lg:max-w-52' >
                                            <div className="flex justify-center items-center">
                                                <Image className="" src="/images/success.svg" width={20} height={20} alt="" />
                                            </div>
                                        </td>
                                        <td className='border border-zinc-200 lg:min-w-52 lg:max-w-52' >
                                            <div className="flex justify-center items-center">
                                                <Image className="" src="/images/success.svg" width={20} height={20} alt="" />
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default PricePlan