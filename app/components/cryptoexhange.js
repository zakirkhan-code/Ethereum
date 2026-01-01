"use client";
import { ArrowLeftRight } from "lucide-react"
import { useState } from "react";

export default function CryptoExchangeCard() {
  const [activeTab, setActiveTab] = useState("exchange");

  return (
    <div className=" flex mt-9 items-center justify-center ">
      <div className="w-[390px] rounded-xl  p-4 shadow-xl border border-white/10">

        {/* Top Tabs */}
        <div className="flex  rounded-xl  mb-4">
          {["exchange", "withdraw", "record"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 py-2 rounded-lg text-sm font-medium transition
                ${
                  activeTab === tab
                    ? "bg-white/20 text-white"
                    : "text-gray-400 hover:text-white"
                }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* Content */}
        {activeTab === "exchange" && (
          <div className="space-y-4">
            <h2 className="text-white text-lg font-semibold">Exchange</h2>

            <div className="bg-[white]/20 relative backdrop:blur-2xl rounded-xl p-4 flex items-center justify-between">
              <div>
                <h3 className="text-2xl font-bold text-white">ETH</h3>
                <p className="text-white text-sm">Balance</p>
              </div>
 <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 
                  bg-white/10 backdrop-blur-xl p-2 rounded-full border border-white/20">
    <ArrowLeftRight className="w-5 h-5 text-white" />
  </div>
              <div className="text-right">
                <p className="text-xl font-semibold text-white">0</p>
                <div className="flex items-center gap-1  text-sm justify-end">
                  <img src="/usdt.png" alt="" width={'20px'} />
                  USDT
                </div>
              </div>
            </div>

            <button className="w-full backdrop:blur-2xl bg-white/20 py-3 rounded-xl  text-white  transition">
              Exchange
            </button>
          </div>
        )}

        {activeTab === "withdraw" && (
          <div className="space-y-4">
            <h2 className="text-white text-lg font-semibold">Withdraw</h2>

            <div className="bg-[white]/20 relative backdrop:blur-2xl rounded-xl p-4 flex items-center justify-between">
              <div>
                <h3 className="text-2xl font-bold text-white">0.0</h3>
                <p className="text-white text-sm">Balance</p>
              </div>
 <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 
                  bg-white/10 backdrop-blur-xl p-2 rounded-full border border-white/20">
    <ArrowLeftRight className="w-5 h-5 text-white" />
  </div>
              <div className="text-right">
                <p className="text-xl font-semibold text-white">0</p>
                <div className="flex items-center gap-1  text-sm justify-end">
                  <img src="/usdt.png" alt="" width={'20px'} />
                  USDT
                </div>
              </div>
            </div>

            <button className="w-full backdrop:blur-2xl bg-white/20 py-3 rounded-xl  text-white  transition">
              Exchange
            </button>
          </div>
        )}

        {activeTab === "record" && (
          <div className="text-white space-y-3">
            <h2 className="text-lg font-semibold">Record</h2>
            <div className=" rounded-xl p-4 text-gray-400">
              Transaction records 
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
