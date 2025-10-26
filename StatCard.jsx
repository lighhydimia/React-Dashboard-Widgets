import React from "react";

export default function StatCard({ label, value }) {
  return (
    <div style={{border:"1px solid #ddd", borderRadius:"8px", padding:"12px"}}>
      <div style={{fontSize:"14px", opacity:0.7}}>{label}</div>
      <div style={{fontSize:"24px", fontWeight:"bold"}}>{value}</div>
    </div>
  );
}
