import React, { useContext } from 'react'
import { DatabaseContext } from '../context/DatabaseContext';

import {
    CartesianGrid,
    BarChart,
    Bar,
    Legend,
    Line,
    LineChart,
    Tooltip,
    XAxis,
    YAxis,
} from "recharts";

const CustomBarChart = () => {
    const { celcius }: any = useContext(DatabaseContext);

    const data = [
        {
            "name": "Page A",
            "Ihr Verbrauch": celcius,
            "Durchschnitt": 1.7,
            "Ziel": 1.5
        },
    ]

    return (
        <div style={{ display: "flex", justifyContent: "center", marginTop: 20, marginBottom: 20 }}>
            <BarChart width={730} height={250} data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="Ihr Verbrauch" fill="#e34e3d" />
                <Bar dataKey="Durchschnitt" fill="#FCC419" />
                <Bar dataKey="Ziel" fill="#51CF66" />
            </BarChart>
        </div>
    )
}

export default CustomBarChart