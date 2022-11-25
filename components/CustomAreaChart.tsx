import React, { useContext } from 'react'
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
import { DatabaseContext } from '../context/DatabaseContext';

const CustomAreaChart = () => {
  const { gasConsumption, electricConsumption }: any = useContext(DatabaseContext);

  const data = [
    {
      "name": "2022",
      "Stromkosten": electricConsumption * 0.445,
      "Gaskosten": gasConsumption * 0.18,
    },
    {
      "name": "2023",
      "Stromkosten": electricConsumption * 0.445,
      "Gaskosten": gasConsumption * 0.18,
    },
    {
      "name": "2024",
      "Stromkosten": electricConsumption * 0.445,
      "Gaskosten": gasConsumption * 0.20,
    },
    {
      "name": "2025",
      "Stromkosten": electricConsumption * 0.445,
      "Gaskosten": gasConsumption * 0.23,
    },
    {
      "name": "2026",
      "Stromkosten": electricConsumption * 0.445,
      "Gaskosten": gasConsumption * 0.26,
    },
  ]
  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: 20, marginBottom: 20 }}>
      <AreaChart width={400} height={250} data={data}>
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#F03E3E" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#F03E3E" stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis dataKey="name" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Area type="monotone" dataKey="Stromkosten" stackId={1} stroke="#ffc658" fillOpacity={1} fill="#ffc658" />
        <Area type="monotone" dataKey="Gaskosten" stackId={1} stroke="#F03E3E" fillOpacity={1} fill="#F03E3E" />
        <Legend />
      </AreaChart>
    </div>
  )
}

export default CustomAreaChart