"use client";

import React from "react";
import { ArrowRight } from "lucide-react";

const products = [
  {
    name: "Crop Weather Protection",
    description: "Automated payouts triggered by on-chain weather oracle data for drought or excess rain.",
    tag: "Parametric", estPremium: "From 15 XLM/mo",
    icon: (<svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M10 3C7 3 4 5.5 4 9c0 2 1 3.5 2.5 4.5H13.5C15 12.5 16 11 16 9c0-3.5-3-6-6-6z" stroke="#00d4c8" strokeWidth="1.3" fill="none" /><path d="M7 13.5v3M10 13.5v3M13 13.5v3" stroke="#00d4c8" strokeWidth="1.3" strokeLinecap="round" /></svg>),
    iconBg: "rgba(0,212,200,0.1)",
  },
  {
    name: "DeFi Protocol Cover",
    description: "Protection against smart contract bugs, hacks, or economic exploits on supported Soroban protocols.",
    tag: "Smart Contract", estPremium: "2.5% Annual",
    icon: (<svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M10 2L3 6v4c0 4 3.5 7.5 7 8.5 3.5-1 7-4.5 7-8.5V6L10 2z" stroke="#60a5fa" strokeWidth="1.3" fill="none" /><path d="M7 10l2 2 4-4" stroke="#60a5fa" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" /></svg>),
    iconBg: "rgba(96,165,250,0.1)",
  },
  {
    name: "Cargo Transit",
    description: "Peer-to-peer coverage for international shipping and freight damage, verified by community voting.",
    tag: "Community", estPremium: "Varies by route",
    icon: (<svg width="20" height="20" viewBox="0 0 20 20" fill="none"><rect x="2" y="7" width="12" height="8" rx="1" stroke="#34d399" strokeWidth="1.3" /><path d="M14 10h2l2 3v2h-4v-5z" stroke="#34d399" strokeWidth="1.3" /><circle cx="5.5" cy="16.5" r="1.5" stroke="#34d399" strokeWidth="1.3" /><circle cx="13.5" cy="16.5" r="1.5" stroke="#34d399" strokeWidth="1.3" /></svg>),
    iconBg: "rgba(52,211,153,0.1)",
  },
] as const;

export default function InsuranceProducts() {
  return (
    <div className="mt-5">
      <div className="flex items-start justify-between mb-3">
        <div>
          <h2 className="font-semibold" style={{ fontSize: "15px", color: "#e6edf3" }}>Insurance Products</h2>
          <p style={{ fontSize: "12px", color: "#6a7a8e", marginTop: "2px" }}>Browse decentralized coverage options</p>
        </div>
        <button className="flex items-center gap-1" style={{ fontSize: "12px", color: "#00d4c8" }}>
          Explore Marketplace <ArrowRight size={12} />
        </button>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {products.map((p, i) => (
          <div key={i} className="rounded-lg p-4 flex flex-col" style={{ backgroundColor: "#131c2b", border: "1px solid #1e2d3d" }}>
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center justify-center rounded-md" style={{ width: "36px", height: "36px", backgroundColor: p.iconBg }}>{p.icon}</div>
              <span className="rounded px-2" style={{ fontSize: "10px", color: "#8b9cb6", backgroundColor: "#1e2d3d", height: "20px", lineHeight: "20px", fontWeight: 500 }}>{p.tag}</span>
            </div>
            <p className="font-semibold mb-2" style={{ fontSize: "13px", color: "#e6edf3" }}>{p.name}</p>
            <p className="flex-1 mb-4" style={{ fontSize: "11px", color: "#6a7a8e", lineHeight: "1.6" }}>{p.description}</p>
            <div className="flex items-center justify-between mt-auto">
              <div>
                <p style={{ fontSize: "9px", color: "#4a5a6a", marginBottom: "2px" }}>Est. Premium</p>
                <p className="font-semibold" style={{ fontSize: "12px", color: "#e6edf3" }}>{p.estPremium}</p>
              </div>
              <button className="rounded-md px-3 font-medium" style={{ height: "30px", fontSize: "11px", backgroundColor: "#1e2d3d", color: "#e6edf3", border: "1px solid #2a3a4a" }}>
                Get Quote
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
