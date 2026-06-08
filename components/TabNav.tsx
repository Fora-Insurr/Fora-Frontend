"use client";

import React, { useState } from "react";
import { Calendar, Plus } from "lucide-react";

const tabs = ["Overview", "Marketplace", "Voting"];

export default function TabNav() {
  const [active, setActive] = useState("Overview");
  return (
    <div className="flex items-center justify-between mb-5">
      <div className="flex items-center rounded-md p-0.5 gap-0.5"
        style={{ backgroundColor: "#161b22", border: "1px solid #1e2d3d" }}>
        {tabs.map((tab) => (
          <button key={tab} onClick={() => setActive(tab)} className="rounded px-4 transition-all duration-150"
            style={{ height: "30px", fontSize: "12px", fontWeight: active === tab ? 600 : 400, color: active === tab ? "#e6edf3" : "#6a7a8e", backgroundColor: active === tab ? "#1e2d3d" : "transparent" }}>
            {tab}
          </button>
        ))}
      </div>
      <div className="flex items-center gap-2">
        <button className="flex items-center gap-2 rounded-md px-3"
          style={{ height: "32px", fontSize: "12px", color: "#8b9cb6", backgroundColor: "#161b22", border: "1px solid #2a3a4a" }}>
          <Calendar size={13} />Last 30 Days
        </button>
        <button className="flex items-center gap-1.5 rounded-md px-3 font-semibold hover:opacity-90 transition-opacity"
          style={{ height: "32px", fontSize: "12px", color: "#0d1117", background: "linear-gradient(135deg, #00d4c8 0%, #00b8ad 100%)" }}>
          <Plus size={13} />Get Quote
        </button>
      </div>
    </div>
  );
}
