"use client";

import React from "react";
import { MoreHorizontal, TrendingUp, ArrowUpRight } from "lucide-react";

const stats = [
  {
    label: "Active Policies",
    value: "3",
    sub: "+1",
    subIcon: true,
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <circle cx="9" cy="9" r="8" stroke="#8b9cb6" strokeWidth="1.5" />
        <path
          d="M6 9l2 2 4-4"
          stroke="#8b9cb6"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    valueStyle: {},
  },
  {
    label: "Total Coverage Value",
    value: "45,000",
    valueSuffix: " XLM",
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <rect
          x="2"
          y="4"
          width="14"
          height="10"
          rx="2"
          stroke="#00d4c8"
          strokeWidth="1.5"
        />
        <path
          d="M2 8h14"
          stroke="#00d4c8"
          strokeWidth="1.5"
        />
        <circle cx="5.5" cy="11" r="1" fill="#00d4c8" />
      </svg>
    ),
    accent: true,
  },
  {
    label: "Pending Claims",
    value: "1",
    badge: "In Review",
    badgeColor: "#3b82f6",
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path
          d="M9 2L11 7H16L12 10.5L13.5 16L9 13L4.5 16L6 10.5L2 7H7L9 2Z"
          stroke="#f59e0b"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    label: "Voting Power",
    value: "1,250",
    valueSuffix: " VNIF",
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path
          d="M9 2L11.5 7H16.5L12.5 10L14 15L9 12.5L4 15L5.5 10L1.5 7H6.5L9 2Z"
          stroke="#22c55e"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
    ),
    green: true,
  },
];

export default function StatCards() {
  return (
    <div className="grid grid-cols-4 gap-4 mb-5">
      {stats.map((stat, i) => (
        <div
          key={i}
          className="relative rounded-lg p-4"
          style={{
            backgroundColor: "#131c2b",
            border: "1px solid #1e2d3d",
          }}
        >
          {/* Top row: icon + dots */}
          <div className="flex items-start justify-between mb-5">
            <div
              className="flex items-center justify-center rounded-md"
              style={{
                width: "36px",
                height: "36px",
                backgroundColor: stat.accent
                  ? "rgba(0,212,200,0.1)"
                  : "#1a2d42",
              }}
            >
              {stat.icon}
            </div>
            <button style={{ color: "#4a5a6a" }}>
              <MoreHorizontal size={15} />
            </button>
          </div>

          {/* Label */}
          <p style={{ fontSize: "12px", color: "#6a7a8e", marginBottom: "6px" }}>
            {stat.label}
          </p>

          {/* Value */}
          <div className="flex items-baseline gap-1">
            <span
              className="font-bold"
              style={{
                fontSize: "26px",
                color: stat.accent ? "#00d4c8" : "#e6edf3",
                lineHeight: 1,
              }}
            >
              {stat.value}
            </span>
            {stat.valueSuffix && (
              <span
                className="font-medium"
                style={{
                  fontSize: "13px",
                  color: stat.accent ? "#00d4c8" : "#8b9cb6",
                }}
              >
                {stat.valueSuffix}
              </span>
            )}
            {stat.sub && (
              <span
                className="flex items-center gap-0.5 font-medium"
                style={{ fontSize: "11px", color: "#22c55e" }}
              >
                <ArrowUpRight size={11} />
                {stat.sub}
              </span>
            )}
          </div>

          {/* Badge */}
          {stat.badge && (
            <span
              className="inline-flex items-center rounded-full px-2 mt-1"
              style={{
                fontSize: "10px",
                color: stat.badgeColor,
                backgroundColor: `${stat.badgeColor}22`,
                height: "18px",
              }}
            >
              {stat.badge}
            </span>
          )}
        </div>
      ))}
    </div>
  );
}
