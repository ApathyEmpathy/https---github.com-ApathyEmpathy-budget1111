import React from "react";
import {
    PieChart,
    Pie,
    Tooltip,
    BarChart,
    XAxis,
    YAxis,
    Legend,
    CartesianGrid,
    Bar,
  } from "recharts";

const Graph = () => {

    const data = [
        { name: "Rent", Money: 3000 },
        { name: "Groceries", Money: 1000 },
        { name: "Phone Bill", Money: 200 },
        { name: "Utilities", Money: 500 },
        { name: "Car Insurance", Money: 400 },
        { name: "Remaining", Money: 700 },
      ];

return(
    <><PieChart width={400} height={400}>
        <Pie

            dataKey="Money"
            isAnimationActive={false}
            data={data}
            cx={200}
            cy={200}
            outerRadius={80}
            fill="#50a22a"
            label />
        <Tooltip />
    </PieChart><BarChart
        width={700}
        height={300}
        data={data}
        margin={{
            top: 5,
            right: 30,
            left: 80,
            bottom: 5,
        }}
        barSize={20}
    >
            <XAxis
                dataKey="name"
                scale="point"
                padding={{ left: 10, right: 10 }} />
            <YAxis />
            <Tooltip />
            <Legend />
            <CartesianGrid strokeDasharray="3 3" />
            <Bar dataKey="Money" fill="#50a22a" background={{ fill: "#eee" }} />
        </BarChart></>
);
        };
        export default Graph;