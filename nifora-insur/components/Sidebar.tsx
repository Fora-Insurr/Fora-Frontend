"use client";

import React from "react";
import {
  LayoutDashboard,
  Store,
  FileText,
  AlertCircle,
  Vote,
  BarChart2,
  Info,
} from "lucide-react";

const navItems = [
  {
    section: "INSURANCE",
    items: [
      { label: "Marketplace", icon: Store, badge: null },
      { label: "My Policies", icon: FileText, badge: 3 },
      { label: "Claims", icon: AlertCircle, badge: 1, badgeRed: true },
    ],
  },
  {
    section: "COMMUNITY",
    items: [
      { label: "Voting Portal", icon: Vote, badge: null },
      { label: "Analytics", icon: BarChart2, badge: null },
    ],
  },
];

export default function Sidebar() {
  return (
    <aside
      className="fixed left-0 top-0 h-screen flex flex-col"
      style={{
        width: "200px",
        backgroundColor: "#0d1117",
        borderRight: "1px solid #1e2d3d",
      }}
    >
      {/* Logo */}
      <div
        className="flex items-center gap-2 px-4"
        style={{ height: "56px", borderBottom: "1px solid #1e2d3d" }}
      >
        <div
          className="flex items-center justify-center rounded"
          style={{
            width: "28px",
            height: "28px",
            background: "linear-gradient(135deg, #00d4c8 0%, #0070f3 100%)",
          }}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path
              d="M8 1L14 4.5V11.5L8 15L2 11.5V4.5L8 1Z"
              fill="white"
              fillOpacity="0.9"
            />
          </svg>
        </div>
        <span
          className="font-semibold"
          style={{ color: "#e6edf3", fontSize: "15px", letterSpacing: "-0.01em" }}
        >
          Nifora-Insur
        </span>
      </div>

      {/* Dashboard item */}
      <div className="px-3 pt-3">
        <div
          className="flex items-center gap-3 px-3 py-2 rounded-md cursor-pointer"
          style={{
            backgroundColor: "#1a2d42",
            color: "#00d4c8",
          }}
        >
          <LayoutDashboard size={16} />
          <span className="font-medium" style={{ fontSize: "13px" }}>
            Dashboard
          </span>
        </div>
      </div>

      {/* Nav sections */}
      {navItems.map((section) => (
        <div key={section.section} className="px-3 mt-5">
          <p
            className="px-3 mb-2 font-medium tracking-wider"
            style={{ fontSize: "10px", color: "#4a5a6a", letterSpacing: "0.08em" }}
          >
            {section.section}
          </p>
          {section.items.map((item) => (
            <div
              key={item.label}
              className="flex items-center justify-between px-3 py-2 rounded-md cursor-pointer mb-0.5 group"
              style={{ color: "#8b9cb6" }}
            >
              <div className="flex items-center gap-3">
                <item.icon size={15} />
                <span style={{ fontSize: "13px" }}>{item.label}</span>
              </div>
              {item.badge !== null && (
                <span
                  className="flex items-center justify-center rounded-full text-white font-medium"
                  style={{
                    minWidth: "18px",
                    height: "18px",
                    fontSize: "10px",
                    backgroundColor: item.badgeRed ? "#ef4444" : "#2a3a4a",
                    padding: "0 5px",
                  }}
                >
                  {item.badge}
                </span>
              )}
            </div>
          ))}
        </div>
      ))}

      {/* Stellar Network footer */}
      <div
        className="mt-auto px-4 py-4"
        style={{ borderTop: "1px solid #1e2d3d" }}
      >
        <div className="flex items-center justify-between mb-1">
          <div className="flex items-center gap-2">
            <div
              className="rounded-full"
              style={{ width: "8px", height: "8px", backgroundColor: "#22c55e" }}
            />
            <span style={{ fontSize: "11px", color: "#8b9cb6" }}>
              Stellar Network
            </span>
          </div>
          <Info size={12} style={{ color: "#4a5a6a" }} />
        </div>
        <div className="flex items-center justify-between">
          <span style={{ fontSize: "11px", color: "#e6edf3", fontFamily: "monospace" }}>
            GCOQ...7X2P
          </span>
          <div
            className="flex items-center justify-center rounded"
            style={{ width: "18px", height: "18px", backgroundColor: "#1a2d42" }}
          >
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
              <rect
                x="1"
                y="3"
                width="6"
                height="6"
                rx="1"
                stroke="#00d4c8"
                strokeWidth="1"
              />
              <path
                d="M3 3V2C3 1.45 3.45 1 4 1H8C8.55 1 9 1.45 9 2V6C9 6.55 8.55 7 8 7H7"
                stroke="#00d4c8"
                strokeWidth="1"
              />
            </svg>
          </div>
        </div>
        <p style={{ fontSize: "10px", color: "#4a5a6a", marginTop: "2px" }}>
          Balance: 1,240.50 XLM
        </p>
      </div>
    </aside>
  );
}
