import React,{useEffect, useState} from "react";
import axios from "axios";
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

    const [data,setData]=useState([]);
    useEffect(()=>{
        getData()
    },[]);

    const getData =async ()=>{
        const result=await axios.get("http://localhost:8080/all/exp")
    
        setData(result.data)
        console.log(result.data)
    
    }


    
return(
    <><PieChart width={400} height={400}>
        <Pie

            dataKey="cost"
            isAnimationActive={false}
            data={data}
            cx={200}
            cy={200}
            outerRadius={80}
            fill="#50a22a"
            label />
        <Tooltip />
    </PieChart>
    
    <BarChart
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
            <Bar dataKey="cost" fill="#50a22a" background={{ fill: "#eee" }} />
        </BarChart></>
);
        };
        export default Graph;