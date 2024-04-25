"use client";

import { useState } from "react";


export default function DashboardPage() {
  console.log("Dashboard client component");
  
  const  [name, setName] = useState("")
  return (
    <div>
      <h1>Dashboard Page</h1>
      <input value={name} onChange={(e) => setName(e.target.value)}></input>

      <h1>Hello, {name}</h1>
    </div>
  );
}