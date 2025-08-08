import React, { useEffect, useState, useMemo } from "react";
import styles from "./Dogecoin.module.css";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";
import LineGraphTable from "./LineGraphTable";

const fetch30DayData = async () => {
  try {
    const response = await fetch("http://localhost:8080/dogecoin/forecast");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching 30-day data:", error);
    return [];
  }
};

const renderActiveBar = (props) => {
  const { x, y, width, height, fill } = props;
  return (
    <g>
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        fill={fill}
        stroke="#FFD700"
        strokeWidth={2}
        filter="url(#glow)"
      />
    </g>
  );
};

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      const result = await fetch30DayData();
      setData(result);
      setLoading(false);
    };
    loadData();
  }, []);

  // Compute min/max for dynamic Y-axis
  const [minY, maxY] = useMemo(() => {
    if (data.length === 0) return [0, 1];
    let min = Infinity;
    let max = -Infinity;

    data.forEach((d) => {
      const values = [d.open, d.high, d.low, d.close];
      min = Math.min(min, ...values);
      max = Math.max(max, ...values);
    });

    return [min - 0.005, max + 0.005]; // Adjust margin as needed
  }, [data]);

  if (loading) {
    return <div style={{ color: "#FFD700" }}>Loading Dogecoin data...</div>;
  }

  return (
    <div className={styles.container}>
      {/* Line Chart */}
      <div
        style={{
          width: "100%",
          height: 500,
          padding: "60px 20px",
          backgroundColor: "#1e1e1e",
          border: "1px solid #FFD700",
          borderRadius: "12px",
          marginBottom: "30px",
          color: "#fff",
        }}
      >
        <h2 style={{ color: "#FFD700" }}>Dogecoin - Price Metrics</h2>
        <ResponsiveContainer>
          <LineChart data={data} margin={{ top: 20, right: 30, left: 30, bottom: 20 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#444" />
            <XAxis dataKey="date" stroke="#ccc" />
            <YAxis
              domain={[minY, maxY]}
              label={{
                value: "Price (USD)",
                angle: -90,
                position: "insideLeft",
                fill: "#fff",
              }}
              tickFormatter={(val) => val.toFixed(3)}
              stroke="#ccc"
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "#2a2a2a",
                border: "1px solid #FFD700",
                color: "#FFD700",
                borderRadius: "8px",
              }}
              labelStyle={{ color: "#FFD700" }}
            />
            <Legend />
            <Line type="monotone" dataKey="low" stroke="#8884d8" dot={false} name="Low" />
            <Line type="monotone" dataKey="high" stroke="#ff7300" dot={false} name="High" />
            <Line type="monotone" dataKey="open" stroke="#1f78b4" dot={false} name="Open" />
            <Line type="monotone" dataKey="close" stroke="#d62728" dot={false} name="Close" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Bar Chart */}
      <div
        style={{
          width: "100%",
          height: 500,
          padding: "60px 20px",
          backgroundColor: "#1e1e1e",
          border: "1px solid #FFD700",
          borderRadius: "12px",
          marginBottom: "30px",
          color: "#fff",
        }}
      >
        <h2 style={{ color: "#FFD700" }}>Volume Over Last 30 Days</h2>
        <ResponsiveContainer>
          <BarChart data={data} margin={{ top: 20, right: 30, left: 30, bottom: 20 }}>
            <defs>
              <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="2.5" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#444" />
            <XAxis dataKey="date" stroke="#ccc" />
            <YAxis
              tickFormatter={(value) =>
                value >= 1e9
                  ? `${(value / 1e9).toFixed(1)}B`
                  : value >= 1e6
                  ? `${(value / 1e6).toFixed(1)}M`
                  : value.toFixed(3)
              }
              stroke="#ccc"
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "#2a2a2a",
                border: "1px solid #FFD700",
                color: "#FFD700",
                borderRadius: "8px",
              }}
              labelStyle={{ color: "#FFD700" }}
            />
            <Legend />
            <Bar dataKey="volume" fill="#FFD700" name="Volume" activeBar={renderActiveBar} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Table Section */}
      <LineGraphTable data={data} />
    </div>
  );
};

export default Dashboard;
