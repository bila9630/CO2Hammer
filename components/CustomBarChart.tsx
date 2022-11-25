import React, { useContext, useEffect, useState } from 'react'
import { DatabaseContext } from '../context/DatabaseContext';

import {
    CartesianGrid,
    BarChart,
    Bar,
    Legend,
    Tooltip,
    XAxis,
    YAxis,
} from "recharts";

const CustomBarChart = () => {
    const { celcius }: any = useContext(DatabaseContext);
    const [color, setColor] = useState("#e34e3d")

    useEffect(() => {
        if (celcius < 1.5) {
            setColor("#51CF66")
        } else if (celcius >= 1.5 && celcius < 2.2) {
            setColor("#FCC419")
        }
    }, [celcius])


    const data = [
        {
            "name": "Klimawirkung",
            "Ihr Verbrauch": celcius,
            "Durchschnitt": 2.2,
            "Ziel": 1.5
        },
    ]

    return (
        <div style={{ display: "flex", justifyContent: "center", marginTop: 20, marginBottom: 20 }}>
            <BarChart width={400} height={250} data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="Ihr Verbrauch" fill={color} />
                <Bar dataKey="Durchschnitt" fill="#FCC419" />
                <Bar dataKey="Ziel" fill="#51CF66" />
            </BarChart>
        </div>
    )
}

export default CustomBarChart