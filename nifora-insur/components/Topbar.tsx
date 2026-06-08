"use client";

import React from "react";
import { Search, Bell, ChevronDown } from "lucide-react";

export default function Topbar() {
  return (
    <header
      className="fixed top-0 right-0 flex items-center justify-between px-6"
      style={{
        left: "200px",
        height: "56px",
        backgroundColor: "#0d1117",
        borderBottom: "1px solid #1e2d3d",
        zIndex: 10,
      }}
    >
      {/* Left: Page title */}
      <h1
        className="font-semibold"
        style={{ fontSize: "18px", color: "#e6edf3" }}
      >
        Dashboard Overview
      </h1>

      {/* Right: search + bell + user */}
      <div className="flex items-center gap-3">
        {/* Search */}
        <div
          className="flex items-center gap-2 rounded-md px-3"
          style={{
            backgroundColor: "#161b22",
            border: "1px solid #2a3a4a",
            height: "34px",
            width: "220px",
          }}
        >
          <Search size={13} style={{ color: "#4a5a6a" }} />
          <input
            type="text"
            placeholder="Search policies, claims..."
            className="bg-transparent outline-none flex-1"
            style={{ fontSize: "12px", color: "#8b9cb6" }}
          />
        </div>

        {/* Bell */}
        <div
          className="flex items-center justify-center rounded-md cursor-pointer"
          style={{
            width: "34px",
            height: "34px",
            backgroundColor: "#161b22",
            border: "1px solid #2a3a4a",
          }}
        >
          <Bell size={15} style={{ color: "#8b9cb6" }} />
        </div>

        {/* User */}
        <div className="flex items-center gap-2 cursor-pointer">
          <div
            className="rounded-full flex items-center justify-center overflow-hidden"
            style={{
              width: "32px",
              height: "32px",
              background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
              flexShrink: 0,
            }}
          >
            <span className="text-white font-medium" style={{ fontSize: "12px" }}>
              AM
            </span>
          </div>
          <div className="flex flex-col">
            <span
              className="font-medium leading-none"
              style={{ fontSize: "12px", color: "#e6edf3" }}
            >
              Alex Morgan
            </span>
            <span
              className="leading-none mt-0.5"
              style={{ fontSize: "10px", color: "#00d4c8" }}
            >
              Premium Member
            </span>
          </div>
          <ChevronDown size={13} style={{ color: "#4a5a6a" }} />
        </div>
      </div>
    </header>
  );
}
