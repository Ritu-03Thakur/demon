// import React from 'react';
import Header from "../components/Header";
import Vite from '../assets/qrcode-sam.png';
import { AlertCircle, X } from 'lucide-react'

const Wallet = () => {
  return (
    <div>
      <Header />
      <div className="flex bg-slate-300 mt-10 p-5 mb-5">
        <p>Current Balance: ₹{0}</p>
      </div>
      <div className="flex justify-center center">
        <img src={Vite} height="100px" alt="Q-CODE" />
      </div>

      {/* note 1 */}
      <div className="rounded-md border-l-4 border-yellow-500 bg-yellow-100 p-4">
        <div className="flex items-center justify-between space-x-4">
          <div>
            <AlertCircle className="h-6 w-6 text-yellow-600" />
          </div>
          <div>
            <p className="text-sm font-medium text-yellow-600">
              Scan this code and add minimum of ₹ 500 for the new user to play.
            </p>
          </div>
          <div>
            <X className="h-6 w-6 cursor-pointer text-yellow-600" />
          </div>
        </div>
      </div>
      {/* note 2 */}
      <div className="rounded-md border-l-4 border-white mt-10 bg-lime-500 p-4">
        <div className="flex items-center justify-between space-x-4">
          <div>
            <AlertCircle className="h-6 w-6 text-white" />
          </div>
          <div>
            <p className="text-sm font-medium text-white">
              Amount will be added to the wallet within 2-3 working hours.
            </p>
          </div>
          <div>
            <X className="h-6 w-6 cursor-pointer text-yellow-600" />
          </div>
        </div>
      </div>

    </div>
  )
}

export default Wallet;
