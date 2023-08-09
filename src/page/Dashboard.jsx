'use client'

import React from 'react'
import { useEffect, useState } from 'react';
import { Menu, X, ChevronDown, ChevronRight } from 'lucide-react'
import Footer from '../components/Footer';

const menuItems = [
    {
        name: 'Home',
        href: '#',
    },
    {
        name: 'About',
        href: '/term&conditions',
    },
    {
        name: 'Contact',
        href: '#',
    },
]

export default function Dashboard() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false)
    const [user, setUser] = useState(null);

    // Fetch user data from your API when the Dashboard component mounts
    useEffect(() => {
        fetch('/api/get-user-data') // Replace with the appropriate endpoint to fetch user data
            .then((response) => response.json())
            .then((data) => setUser(data))
        // .catch((error) => console.error('Error fetching user data:', error));
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <div className="relative w-full">
            {/* navbar  */}
            <nav className="z-50">
                <div className="w-full bg-white">
                    <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
                        <div className="inline-flex items-center space-x-2">
                            <span>
                                <img src="logo2.png" alt="logo" className='h-10' />
                            </span>
                            <span className="font-bold">Money Master</span>
                        </div>
                        <div className="hidden lg:block">
                            <ul className="ml-12 inline-flex space-x-8">
                                {menuItems.map((item) => (
                                    <li key={item.name}>
                                        <a
                                            href={item.href}
                                            className="inline-flex items-center text-sm font-semibold text-gray-800 hover:text-gray-900"
                                        >
                                            {item.name}
                                            <span>
                                                <ChevronDown className="ml-2 h-4 w-4" />
                                            </span>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="flex grow justify-end">

                        </div>
                        <div className="ml-2 mt-2 hidden lg:block">
                            <span className="relative inline-block">
                                <img
                                    className="h-10 w-10 rounded-full"
                                    src="https://overreacted.io/static/profile-pic-c715447ce38098828758e525a1128b87.jpg"
                                    alt="Dan_Abromov"
                                />
                                <span className="absolute bottom-0 right-0 block h-2.5 w-2.5 rounded-full bg-green-600 ring-2 ring-white"></span>
                            </span>
                        </div>
                        <div className="ml-2 lg:hidden">
                            <Menu onClick={toggleMenu} className="h-6 w-6 cursor-pointer" />
                        </div>
                        {isMenuOpen && (
                            <div className="absolute inset-x-0 top-0 z-50 origin-top-right transform p-2 transition lg:hidden">
                                <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                                    <div className="px-5 pb-6 pt-5">
                                        <div className="flex items-center justify-between">
                                            <div className="inline-flex items-center space-x-2">
                                                <span>
                                                    <svg
                                                        width="30"
                                                        height="30"
                                                        viewBox="0 0 50 56"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M23.2732 0.2528C20.8078 1.18964 2.12023 12.2346 1.08477 13.3686C0 14.552 0 14.7493 0 27.7665C0 39.6496 0.0986153 41.1289 0.83823 42.0164C2.12023 43.5449 23.2239 55.4774 24.6538 55.5267C25.9358 55.576 46.1027 44.3832 48.2229 42.4602C49.3077 41.474 49.3077 41.3261 49.3077 27.8158C49.3077 14.3055 49.3077 14.1576 48.2229 13.1714C46.6451 11.7415 27.1192 0.450027 25.64 0.104874C24.9497 -0.0923538 23.9142 0.00625992 23.2732 0.2528ZM20.2161 21.8989C20.2161 22.4906 18.9835 23.8219 17.0111 25.3997C15.2361 26.7803 13.8061 27.9637 13.8061 28.0623C13.8061 28.1116 15.2361 29.0978 16.9618 30.2319C18.6876 31.3659 20.2655 32.6479 20.4134 33.0917C20.8078 34.0286 19.871 35.2119 18.8355 35.2119C17.8001 35.2119 9.0233 29.3936 8.67815 28.5061C8.333 27.6186 9.36846 26.5338 14.3485 22.885C17.6521 20.4196 18.4904 20.0252 19.2793 20.4196C19.7724 20.7155 20.2161 21.3565 20.2161 21.8989ZM25.6893 27.6679C23.4211 34.9161 23.0267 35.7543 22.1391 34.8668C21.7447 34.4723 22.1391 32.6479 23.6677 27.9637C26.2317 20.321 26.5275 19.6307 27.2671 20.3703C27.6123 20.7155 27.1685 22.7864 25.6893 27.6679ZM36.0932 23.2302C40.6788 26.2379 41.3198 27.0269 40.3337 28.1609C39.1503 29.5909 31.6555 35.2119 30.9159 35.2119C29.9298 35.2119 28.9436 33.8806 29.2394 33.0424C29.3874 32.6479 30.9652 31.218 32.7403 29.8867L35.9946 27.4706L32.5431 25.1532C30.6201 23.9205 29.0915 22.7371 29.0915 22.5892C29.0915 21.7509 30.2256 20.4196 30.9159 20.4196C31.3597 20.4196 33.6771 21.7016 36.0932 23.2302Z"
                                                            fill="black"
                                                        />
                                                    </svg>
                                                </span>
                                                <span className="font-bold">Money Master</span>
                                            </div>
                                            <div className="-mr-2">
                                                <button
                                                    type="button"
                                                    onClick={toggleMenu}
                                                    className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                                                >
                                                    <span className="sr-only">Close menu</span>
                                                    <X className="h-6 w-6" aria-hidden="true" />
                                                </button>
                                            </div>
                                        </div>
                                        <div className="mt-6">
                                            <nav className="grid gap-y-4">
                                                {menuItems.map((item) => (
                                                    <a
                                                        key={item.name}
                                                        href={item.href}
                                                        className="-m-3 flex items-center rounded-md p-3 text-sm font-semibold hover:bg-gray-50"
                                                    >
                                                        <span className="ml-3 text-base font-medium text-gray-900">
                                                            {item.name}
                                                        </span>
                                                        <span>
                                                            <ChevronRight className="ml-3 h-4 w-4" />
                                                        </span>
                                                    </a>
                                                ))}
                                            </nav>
                                        </div>

                                        <div className="ml-3 mt-4 flex items-center space-x-2">
                                            <img
                                                className="inline-block h-10 w-10 rounded-full"
                                            // src="https://overreacted.io/static/profile-pic-c715447ce38098828758e525a1128b87.jpg"
                                            // alt="user"
                                            />
                                            <span className="flex flex-col">
                                                {user ? (
                                                    <div>
                                                        <span className="text-sm font-medium text-gray-900">D {user.fullname}</span>
                                                        <span className="text-sm font-medium text-gray-500">{user.email}</span>
                                                    </div>

                                                ) : (
                                                    <p>loading user details</p>
                                                )}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </nav>
            {/* wallet section */}
            <section className='border-y-4'>
                <div className="px-4 py-8">
                    <h2 className="text-2xl font-bold tracking-tight text-gray-800 xl:text-4xl">
                        Total Money in Your wallet ₹ {`0`}
                    </h2>

                    <div className="mt-6">
                        <a
                            href="/wallet"
                            className="inline-flex w-full items-center justify-center overflow-hidden rounded-lg bg-gray-900 px-4 py-2.5 text-sm text-white shadow transition-colors duration-300 hover:bg-gray-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80 sm:mx-2 sm:w-auto"
                        >

                            <span className="mx-2">Add money to the wallet</span>
                        </a>

                    </div>
                </div>
            </section>
            {/* wallet section ends */}
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
                                <a href="/game">
                                    Start the game
                                </a>
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
                                        Start Your Investment
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
                                Start referring
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

            {/* footer */}
            <Footer />

        </div>

    )
}
