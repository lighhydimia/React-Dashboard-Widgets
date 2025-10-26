import React from "react";

export default function MiniLineChart({ data }) {
  const points = data.map((v,i)=>`${i*20},${50-v}`).join(" ");
  return (
    <svg width="200" height="50">
      <polyline points={points} fill="none" stroke="black" strokeWidth="2" />
    </svg>
  );
}
