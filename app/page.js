"use client";
import React, { useState } from "react";
import BlockchainIncome from "./components/blockchain";
import HelpCenterFAQ from "./components/faq";
import Account from "./components/Account";
import Minning from "./components/Minning";

const Page = () => {
  const [ActiveSection, setActiveSection] = useState("home");

  return (
    <div className="main-container h-[100vh] overflow-y-auto relative">
      <div className="w-full h-full">
        <div className="topbar mt-10 flex gap-2 justify-end items-center p-3">
          <p className="wallet-add w-fit bg-[#282828] text-sm  p-1 h-7 flex justify-center items-center">
            0x2948...408920
          </p>
          <img src="/usa.png" alt="" width={"55px"} />
          <p className="text-white text-xl font-normal">ENGLISH</p>
        </div>

        <div className="w-full h-50 relative bg-amber-200 overflow-hidden">
          <img
            src="/ethe.gif"
            alt="animated gif"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="w-full h-[100vh] px-3">
          <div className="sticky top-0 pt-1">
            <div className="navbar backdrop:blur-2xl border border-white/10 bg-white/10 w-full max-w-6xl mx-auto rounded-xl flex justify-between px-10 py-3 mt-10 items-center gap-10 shadow-[0_4px_15px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_25px_rgba(0,0,0,0.12)] transition-shadow duration-300">

              <img
                src="/home.png"
                alt=""
                width={"40px"}
                className="cursor-pointer shadow-lg"
                onClick={() => setActiveSection("home")}
              />

              <img
                src="/icon2.png"
                alt=""
                width={"40px"}
                className="cursor-pointer shadow-lg"
                onClick={() => setActiveSection("section2")}
              />

              <img
                src="/icon3.svg"
                alt=""
                width={"40px"}
                className="cursor-pointer"
                onClick={() => setActiveSection("section3")}
              />

              <img
                src="/icon4.svg"
                alt=""
                width={"40px"}
                className="cursor-pointer"
                onClick={() => setActiveSection("section4")}
              />

            </div>

            <div className="main px-3 mt-10 h-[70vh] overflow-auto hide-scrollbar w-full">
              {ActiveSection === "home" && (
                <div className="home-section">
                  <div className="coins">
                    <div className="coin border border-white/10 shadow-[0_4px_15px_rgba(0,0,0,0.08)] p-4 rounded-lg px-4 hover:shadow-[0_8px_25px_rgba(0,0,0,0.12)] flex justify-between">
                      <div className="flex justify-center items-center gap-3">
                        <img src="/Ellipse 5.png" alt="" width={"40px"} />
                        <p className="text-white text-[20px]">ETH</p>
                      </div>
                      <div className="text-left text-white">
                        <p className="text-[20px]">4537.00</p>
                        <p className="text-sm text-left">$4537.00</p>
                      </div>
                    </div>

                    <div className="coin border border-white/10 mt-7 shadow-[0_4px_15px_rgba(0,0,0,0.08)] p-4 rounded-lg px-4 hover:shadow-[0_8px_25px_rgba(0,0,0,0.12)] flex justify-between">
                      <div className="flex justify-center items-center gap-3">
                        <img src="/Ellipse 6.png" alt="" width={"40px"} />
                        <p className="text-white text-[20px]">USDT</p>
                      </div>
                      <div className="text-left text-white">
                        <p className="text-[20px]">1.000000</p>
                        <p className="text-sm text-left">$1.000000</p>
                      </div>
                    </div>
                  </div>

                  <div className="product-data mt-10 border border-white/10 shadow-[0_4px_15px_rgba(0,0,0,0.08)] p-4 rounded-lg">
                    <p className="text-xl">Product Data</p>
                    <div className="flex items-center justify-between font-sans text-md mt-4">
                      <p>Total Output</p>
                      <p>61352 ETH</p>
                    </div>
                    <div className="flex items-center justify-between font-sans text-md mt-1">
                      <p>Valid Node</p>
                      <p>25525</p>
                    </div>
                    <div className="flex items-center justify-between font-sans text-md mt-1">
                      <p>Participant</p>
                      <p>750287</p>
                    </div>
                    <div className="flex items-center justify-between font-sans text-md mt-1">
                      <p>User Revenue</p>
                      <p>176915654 USD</p>
                    </div>
                  </div>

                  <BlockchainIncome />
                  <HelpCenterFAQ />

                  <div className="mt-10">
                    <p className="text-center text-xl text-white font-bold mb-5">
                      Fully compatible
                    </p>

                    <div className="flex justify-between items-center gap-2 flex-wrap">
                      <img src="/1.png" className="w-25 p-2 bg-white" />
                      <img src="/2.png" className="w-25 p-1 bg-white" />
                      <img src="/3.png" className="w-25 p-2 bg-white" />
                      <img src="/4.png" className="w-25 p-2 bg-white" />
                      <img src="/5.png" className="w-25 p-2 bg-white" />
                      <img src="/6.png" className="w-25 p-2 bg-white" />
                    </div>

                    <p className="mt-5">2017 - 2025, pgal.top</p>
                    <p>Privacy Policy Terms and Conditions</p>
                  </div>
                </div>
              )}

              {/* TODO: Add content for other sections later */}
              {ActiveSection === "section2" && <Account/>}
              {ActiveSection === "section3" && <Minning/>}
              {ActiveSection === "section4" && <>
              <div className="flex w-full h-full  justify-center items-center">
                <div className="empty flex-col flex justify-center items-center">
                  <img src="/empty.png" alt="" className="w-60"/>
                  
                </div>
              </div>
              </>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
