import React from 'react'
import {
  CartesianGrid,
  AreaChart,
  Area,
  Bar,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const CustomAreaChart = () => {
  const data = [
    {
      "name": "2022",
      "Gas": 0.18,
      "Strom": 0.445,
    },
    {
      "name": "2023",
      "Gas": 0.18,
      "Strom": 0.445,
    },
    {
      "name": "2024",
      "Gas": 0.20,
      "Strom": 0.446,
    },
    {
      "name": "2025",
      "Gas": 0.23,
      "Strom": 0.449,
    },
    {
      "name": "2026",
      "Gas": 0.26,
      "Strom": 0.451,
    },
  ]
  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: 20, marginBottom: 20 }}>
      <AreaChart width={730} height={250} data={data}>
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis dataKey="name" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Area type="monotone" dataKey="Gas" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
        <Area type="monotone" dataKey="Strom" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
      </AreaChart>
    </div>
  )
}

export default CustomAreaChart