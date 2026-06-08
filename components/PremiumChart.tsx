"use client";

import React from "react";
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { month: "Jan", value: 80 },
  { month: "Feb", value: 90 },
  { month: "Mar", value: 85 },
  { month: "Apr", value: 110 },
  { month: "May", value: 160 },
  { month: "Jun", value: 195 },
];

export default function PremiumChart() {
  return (
    <div className="rounded-lg p-4 flex flex-col" style={{ backgroundColor: "#131c2b", border: "1px solid #1e2d3d", minHeight: "100%" }}>
      <p className="font-semibold mb-0.5" style={{ fontSize: "13px", color: "#e6edf3" }}>Premium History</p>
      <p style={{ fontSize: "11px", color: "#6a7a8e", marginBottom: "16px" }}>Monthly cost over time</p>
      <div className="flex-1" style={{ minHeight: "120px" }}>
        <ResponsiveContainer width="100%" height={120}>
          <AreaChart data={data} margin={{ top: 4, right: 4, left: -30, bottom: 0 }}>
            <defs>
              <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#00d4c8" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#00d4c8" stopOpacity={0.02} />
              </linearGradient>
            </defs>
            <XAxis dataKey="month" tick={{ fill: "#4a5a6a", fontSize: 10 }} axisLine={false} tickLine={false} />
            <YAxis tick={{ fill: "#4a5a6a", fontSize: 10 }} axisLine={false} tickLine={false} />
            <Tooltip
              contentStyle={{ backgroundColor: "#1a2d42", border: "1px solid #2a3a4a", borderRadius: "6px", fontSize: "11px", color: "#e6edf3" }}
              labelStyle={{ color: "#8b9cb6" }} itemStyle={{ color: "#00d4c8" }}
            />
            <Area type="monotone" dataKey="value" stroke="#00d4c8" strokeWidth={2} fill="url(#chartGradient)" dot={false} activeDot={{ r: 4, fill: "#00d4c8", stroke: "#0d1117" }} />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
