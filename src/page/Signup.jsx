"use client";

import { ArrowRight } from 'lucide-react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import toast from 'react-hot-toast';
import axios from 'axios';


export default function SignUp() {

  // const [checked, setChecked] = useState(false);
  const [agreebtn, setAgreebtn] = useState(false);

  const handleAgree = () => {
    setAgreebtn(!agreebtn);
  }


  const navigateTo = useNavigate();
  const [user, setUser] = useState({
    fullname: "",
    email: "",
    password: "",
  });

  const handleSignup = async () => {

    try {
      const response = await axios.post("http://localhost:5000/api/signup", user);
      console.log("signup successful", response);
      navigateTo('/Dashboard');



    } catch (error) {
      console.log("signup failed", error.message);
      window.alert("User already Exists");
      // toast.error("User already exists");
      navigateTo('/login');
    }

  };

  return (
    <section className="rounded-md bg-black/80 p-2">
      <div className="flex items-center justify-center bg-white px-4 py-10 sm:px-6 sm:py-16 lg:px-8">
        <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
          <div className="mb-2">
            <img src="logo2.png" alt="logo" className='h-10' />
          </div>
          <h2 className="text-2xl font-bold leading-tight text-black">Sign up to create account</h2>
          <p className="mt-2 text-base text-gray-600">
            Already have an account?{' '}
            <a
              href="/login"
              title=""
              className="font-medium text-black transition-all duration-200 hover:underline"
            >
              Sign In
            </a>
          </p>
          <form action="#" method="POST" className="mt-8">
            <div className="space-y-5">
              <div>
                <label htmlFor="name" className="text-base font-medium text-gray-900">
                  {' '}
                  Full Name{' '}
                </label>
                <div className="mt-2">
                  <input
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="text"
                    placeholder="Full Name"
                    id="fullname"
                    value={user.fullname}
                    onChange={(e) => setUser({ ...user, fullname: e.target.value })}
                  ></input>
                </div>
              </div>
              <div>
                <label htmlFor="email" className="text-base font-medium text-gray-900">
                  {' '}
                  Email address{' '}
                </label>
                <div className="mt-2">
                  <input
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="email"
                    placeholder="Email"
                    id="email"
                    value={user.email}
                    onChange={(e) => setUser({ ...user, email: e.target.value })}
                  ></input>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="text-base font-medium text-gray-900">
                    {' '}
                    Password{' '}
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="password"
                    placeholder="Password"
                    id="password"
                    value={user.password}
                    onChange={(e) => setUser({ ...user, password: e.target.value })}
                  ></input>
                </div>
              </div>

              {/* terms and condtions button */}
              <div className="flex gap-5 mt-5">

                <input

                  type="checkbox"
               
                  defaultChecked = {agreebtn}
                  onClick={handleAgree}
                />

                <span>I agree to the <a href="/term&conditions" className='underline'>Term & Conditions</a> </span>
              </div>

              <div>
                {
                  agreebtn ?
                    <button
                      type="button"
                      className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                      onClick={handleSignup}
                    >
                      Create Account
                      <ArrowRight className="ml-2" size={16} />
                    </button> :
                    <button
                      type="button"
                      className="inline-flex w-full items-center justify-center rounded-md bg-slate-600 px-3.5 py-2.5 font-semibold leading-7 text-white"
                      disabled
                    >
                      Create Account
                      <ArrowRight className="ml-2" size={16} />

                    </button>
                }

              </div>
            </div>
          </form>
          <div className="mt-3 space-y-3">
            {/* signup with google */}
            <button
              type="button"
              className="relative inline-flex w-full items-center justify-center rounded-md border border-gray-400 bg-white px-3.5 py-2.5 font-semibold text-gray-700 transition-all duration-200 hover:bg-gray-100 hover:text-black focus:bg-gray-100 focus:text-black focus:outline-none"
            >
              <span className="mr-2 inline-block">
                <svg
                  className="h-6 w-6 text-rose-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M20.283 10.356h-8.327v3.451h4.792c-.446 2.193-2.313 3.453-4.792 3.453a5.27 5.27 0 0 1-5.279-5.28 5.27 5.27 0 0 1 5.279-5.279c1.259 0 2.397.447 3.29 1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233a8.908 8.908 0 0 0-8.934 8.934 8.907 8.907 0 0 0 8.934 8.934c4.467 0 8.529-3.249 8.529-8.934 0-.528-.081-1.097-.202-1.625z"></path>
                </svg>
              </span>
              Sign up with Google
            </button>
            {/* sign up with facebook */}
            <button
              type="button"
              className="relative inline-flex w-full items-center justify-center rounded-md border border-gray-400 bg-white px-3.5 py-2.5 font-semibold text-gray-700 transition-all duration-200 hover:bg-gray-100 hover:text-black focus:bg-gray-100 focus:text-black focus:outline-none"
            >
              <span className="mr-2 inline-block">
                <svg
                  className="h-6 w-6 text-[#2563EB]"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"></path>
                </svg>
              </span>
              Sign up with Facebook
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
