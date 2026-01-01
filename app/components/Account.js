import React from 'react'
import CryptoExchangeCard from './cryptoexhange'

const Account = () => {
  return (
    <div>
      <div className="product-data mt-2 border border-white/10 shadow-[0_4px_15px_rgba(0,0,0,0.08)] p-4 rounded-lg">
                    <p className="text-xl">My Account</p>
                    <div className="flex items-center justify-between font-sans text-md mt-4">
                      <p>User Status</p>
                      <p className='text-red-600'>Not Receive</p>
                    </div>
                    <div className="flex items-center justify-between font-sans text-md mt-1">
                      <p>Total Output</p>
                      <p>0 ETH</p>
                    </div>
                    <div className="flex items-center justify-between font-sans text-md mt-1">
                      <p>Wallet Balance</p>
                      <p>0 USDT</p>
                    </div>
                    <div className="flex items-center justify-between font-sans text-md mt-1">
                      <p>Exchangeable</p>
                      <p>0 ETH</p>
                    </div>
                    <div className="flex items-center justify-between font-sans text-md mt-1">
                      <p>Withdrawable</p>
                      <p>0 USDT</p>
                    </div>
                    <div className="flex items-center justify-between font-sans text-md mt-1">
                      <p>Share Dividends</p>
                      <p>176915654 USD</p>
                    </div>
                  </div>
      <div className="product-data border border-white/10 mt-10 shadow-[0_4px_15px_rgba(0,0,0,0.08)] p-4 rounded-lg">
                    <p className="text-xl">Pair price</p>
                    
                    <div className="flex mt-4 items-center justify-between font-sans text-md ">
                      <p>ETH/USDT</p>
                      <p>61352 ETH</p>
                    </div>
                    <div className="flex items-center justify-between font-sans text-md mt-1">
                      <p>BTC/USDT</p>
                      <p>25525</p>
                    </div>
                    <div className="flex items-center justify-between font-sans text-md mt-1">
                      <p>BTC/ETH</p>
                      <p>750287</p>
                    </div>
                   
                  </div>
                  <CryptoExchangeCard/>
    </div>
  )
}

export default Account
