"use client";

const data = [
  { address: "0x9c1e...a5f2", qty: "0.03173 ETH" },
  { address: "0xd3e2...8c4b", qty: "0.03173 ETH" },
  { address: "0x4a92...91ad", qty: "0.03173 ETH" },
  { address: "0x82f1...b11e", qty: "0.03173 ETH" },
  { address: "0x7e21...ee33", qty: "0.03173 ETH" },
  { address: "0xa91e...cc21", qty: "0.03173 ETH" },
];

export default function BlockchainIncome() {
  return (
    <div className="w-full border border-white/10 max-w-md  shadow-[0_4px_15px_rgba(0,0,0,0.08)] p-4 rounded-lg mt-10 text-white  ">
      
      {/* Header */}
      <h2 className="text-center text-lg font-semibold mb-3">
        Blockchain node income
      </h2>

      {/* Table Header */}
      <div className="flex justify-between text-sm font-medium opacity-80 mb-2">
        <span>Address</span>
        <span>Quantity</span>
      </div>

      {/* Scroll Area */}
      <div className="relative h-40 overflow-hidden">
        <div className="animate-scrollUp space-y-2 hover:[animation-play-state:paused]">
          
          {/* Duplicate list for infinite loop */}
          {[...data, ...data].map((item, i) => (
            <div
              key={i}
              className="flex justify-between text-sm bg-white/5 px-2 py-1 rounded"
            >
              <span className="font-mono">{item.address}</span>
              <span>{item.qty}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
