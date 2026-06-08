"use client";

import React from "react";

const policies = [
  {
    type: "Flight Delay", id: "POL-8492-FD", coverage: "5,000 XLM", premium: "50 XLM / mo",
    status: "Active", action: "Manage", actionCyan: false,
    icon: (<svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M14 7.5L10 3l-1.5 1.5L10 6H2v3h8l-1.5 1.5L10 12l4-4.5z" fill="#3b82f6" /></svg>),
    iconBg: "rgba(59,130,246,0.15)",
  },
  {
    type: "Property Damage", id: "POL-3151-PD", coverage: "35,000 XLM", premium: "120 XLM / mo",
    status: "Active", action: "Manage", actionCyan: false,
    icon: (<svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 1L1 6v9h5v-5h4v5h5V6L8 1z" stroke="#60a5fa" strokeWidth="1.2" fill="none" /></svg>),
    iconBg: "rgba(96,165,250,0.15)",
  },
  {
    type: "Device Protection", id: "POL-9012-DP", coverage: "5,000 XLM", premium: "25 XLM / mo",
    status: "Expiring Soon", statusColor: "#f59e0b", statusBg: "rgba(245,158,11,0.15)",
    action: "Renew", actionCyan: true,
    icon: (<svg width="16" height="16" viewBox="0 0 16 16" fill="none"><rect x="3" y="2" width="10" height="12" rx="2" stroke="#f59e0b" strokeWidth="1.2" /><circle cx="8" cy="12" r="0.8" fill="#f59e0b" /></svg>),
    iconBg: "rgba(245,158,11,0.1)",
  },
] as const;

export default function ActivePolicies() {
  return (
    <div className="rounded-lg" style={{ backgroundColor: "#131c2b", border: "1px solid #1e2d3d" }}>
      <div className="flex items-center justify-between px-5 py-4" style={{ borderBottom: "1px solid #1e2d3d" }}>
        <h2 className="font-semibold" style={{ fontSize: "14px", color: "#e6edf3" }}>My Active Policies</h2>
        <button style={{ fontSize: "12px", color: "#00d4c8" }}>View All</button>
      </div>
      <div className="grid px-5 py-2" style={{ gridTemplateColumns: "2fr 1.2fr 1.2fr 1fr 1fr", borderBottom: "1px solid #1a2535" }}>
        {["POLICY TYPE", "COVERAGE", "PREMIUM", "STATUS", "ACTION"].map((h) => (
          <span key={h} style={{ fontSize: "10px", color: "#4a5a6a", fontWeight: 600, letterSpacing: "0.06em" }}>{h}</span>
        ))}
      </div>
      {policies.map((p, i) => (
        <div key={i} className="grid items-center" style={{ gridTemplateColumns: "2fr 1.2fr 1.2fr 1fr 1fr", padding: "12px 20px", borderBottom: i < policies.length - 1 ? "1px solid #1a2535" : "none" }}>
          <div className="flex items-center gap-2.5">
            <div className="flex items-center justify-center rounded-md flex-shrink-0" style={{ width: "28px", height: "28px", backgroundColor: p.iconBg }}>{p.icon}</div>
            <div>
              <p className="font-medium" style={{ fontSize: "12px", color: "#e6edf3", lineHeight: 1.3 }}>{p.type}</p>
              <p style={{ fontSize: "10px", color: "#4a5a6a" }}>{p.id}</p>
            </div>
          </div>
          <span className="font-medium" style={{ fontSize: "12px", color: "#e6edf3" }}>{p.coverage}</span>
          <span style={{ fontSize: "12px", color: "#8b9cb6" }}>{p.premium}</span>
          <span className="inline-flex items-center gap-1 rounded-full px-2.5"
            style={{ fontSize: "10px", color: p.statusColor || "#22c55e", backgroundColor: p.statusBg || "rgba(34,197,94,0.15)", height: "22px", width: "fit-content" }}>
            <span className="rounded-full" style={{ width: "5px", height: "5px", backgroundColor: p.statusColor || "#22c55e", flexShrink: 0 }} />
            {p.status}
          </span>
          <button style={{ fontSize: "12px", color: p.actionCyan ? "#00d4c8" : "#8b9cb6", fontWeight: p.actionCyan ? 600 : 400 }} className="text-left">
            {p.action}
          </button>
        </div>
      ))}
    </div>
  );
}
