import React from "react";

export default function ProgressBar({ percent }) {
  return (
    <div style={{background:"#eee", borderRadius:"6px", height:"10px"}}>
      <div style={{height:"100%", width:percent+"%", background:"#4caf50", borderRadius:"6px"}} />
    </div>
  );
}
