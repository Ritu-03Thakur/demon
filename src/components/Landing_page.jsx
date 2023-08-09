// import React from 'react';
// import { ArrowRight } from 'lucide-react'

export default function Landing_page() {
    return (
        <>
            {/* 1st page */}
            <div className="relative w-full h-96 mb-36 bg-white">
                <div className="mx-auto max-w-7xl lg:px-8">
                    <div className="flex flex-col justify-center px-4 py-10 lg:px-6">
                        <h1 className="mt-8 max-w-4xl text-3xl font-bold tracking-tight text-black md:text-4xl lg:text-6xl">
                            Unleash Your Inner Hero, Become a Money Master in the Fantasy Realm!
                        </h1>
                        <p className="mt-8 max-w-3xl text-lg text-gray-700">
                            Forge alliances with mythical creatures, conquer treacherous quests, and harness your strategic prowess to amass unimaginable wealth.
                        </p>
                        <div className="mt-8">
                            <button
                                type="button"
                                className="rounded-md bg-black px-3 py-4 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                            >
                                Sign Up
                            </button>
                        </div>
                    </div>
                    
                </div>
            </div>



            {/* 2rd page  */}
            <div className='relative w-full h-screen  bg-slate-800'>
                <div className="relative w-full">
                    <nav className="z-50">
                        <div className="w-full bg-white">
                            <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
                                <div className="inline-flex items-center space-x-2">

                                </div>
                            </div>
                        </div>
                    </nav>
                    <div className="relative isolate z-0 bg-slate-800 px-6 pt-14 lg:px-8">
                        <div className="relative mx-auto max-w-2xl py-24">
                            <div className="text-center">
                                <h1 className="text-4xl font-bold tracking-tight text-gray-100 sm:text-6xl">
                                    Want to make your investment increase faster than your traditional bank investments ?
                                </h1>
                                <p className="mt-6 text-lg leading-8 text-gray-200">
                                    We partner with the most leading and trusted brands of indian banking system.
                                    Approved by RBI.
                                </p>
                                <div className="mt-10 flex items-center justify-center gap-x-2">
                                    <button
                                        type="button"
                                        className="rounded-md bg-black px-3 py-4 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                                    >
                                        Sign Up to Start
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            {/* 3rd page */}

            <div className="relative w-full h-96 mb-36 bg-white">
                <div className="mx-auto max-w-7xl lg:px-8">
                    <div className="flex flex-col justify-center px-4 py-10 lg:px-6">
                        <h1 className="mt-8 max-w-4xl text-3xl font-bold tracking-tight text-black md:text-4xl lg:text-6xl">
                            Refer Your Friends for more passive income.
                        </h1>
                        <p className="mt-8 max-w-3xl text-lg text-gray-700">
                            Minimum of <b>500</b> for every new referal.
                        </p>
                        <div className="mt-8">
                            <button
                                type="button"
                                className="rounded-md bg-black px-3 py-4 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                            >
                                Sign Up to strt Refering
                            </button>
                        </div>
                    </div>
                    {/* <div className="rounded-lg bg-gray-200 p-4">
          <img
            className="aspect-[3/2] w-full rounded-lg bg-gray-50 object-cover lg:aspect-auto lg:h-[400px]"
            src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTc1fHx0ZWFtfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
            alt=""
          />
        </div> */}
                </div>
            </div>

        </>

    )
}
