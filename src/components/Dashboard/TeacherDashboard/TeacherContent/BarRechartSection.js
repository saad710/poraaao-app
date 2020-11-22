import React from 'react';
import "./TeacherContent.css";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const lineData = [
    {
      name: "1",
      USD: 0,
    },
    {
      name: "2",
      USD: 0.1,
    },
    {
      name: "3",
      USD: 0.2,
    },
    {
      name: "4",
      USD: 0.2,
    },
    {
      name: "5",
      USD: 0.3,
    },
    {
      name: "6",
      USD: 0.4,
    },
    {
      name: "7",
      USD: 0.4,
    },
    {
      name: "8",
      USD: 0.3,
    },
    {
      name: "9",
      USD: 0.5,
    },
    {
      name: "10",
      USD: 0.6,
    },
    {
      name: "11",
      USD: 0.7,
    },
    {
      name: "12",
      USD: 0.7,
    },
    {
      name: "13",
      USD: 0.8,
    },
    {
      name: "14",
      USD: 0.9,
    },
    {
      name: "15",
      USD: 0.6,
    },
    {
      name: "16",
      USD: 0.6,
    },
    {
      name: "17",
      USD: 0.7,
    },
    {
      name: "18",
      USD: 0.4,
    },
    {
      name: "19",
      USD: 0.3,
    },
    {
      name: "20",
      USD: 0.4,
    },
    {
      name: "21",
      USD: 0.5,
    },
    {
      name: "22",
      USD: 0.6,
    },
    {
      name: "23",
      USD: 0.7,
    },
    {
      name: "24",
      USD: 0.4,
    },
    {
      name: "25",
      USD: 0.8,
    },
    {
      name: "26",
      USD: 0.7,
    },
    {
      name: "27",
      USD: 0.9,
    },
    {
      name: "28",
      USD: 0.8,
    },
    {
      name: "29",
      USD: 0.9,
    },
    {
      name: "30",
      USD: 1,
    },
  ];
const BarRechartSection = () => {
    return (
<div className="line-chart-section">
    <div className="row">
        <div className="col-md-12 bar-chart">
          <BarChart
            width={840}
            height={400}
            data={lineData}
            margin={{
              top: 20,
              right: 5,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="USD" stackId="a" fill="#ff8a00" />
          </BarChart>
        </div>
    </div>
</div>
);
};

export default BarRechartSection;