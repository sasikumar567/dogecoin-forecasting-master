// import React from "react";
// import styles from "./Dogecoin.module.css";
// import {
//   XAxis,
//   YAxis,
//   Tooltip,
//   Legend,
//   CartesianGrid,
//   ResponsiveContainer,
//   BarChart,
//   Bar,
// } from "recharts";

// // generateVolumeData inga API vanganum
// const generateVolumeData = () => {
//   const today = new Date();
//   const data = [];

//   for (let i = 29; i >= 0; i--) {
//     const date = new Date(today);
//     date.setDate(today.getDate() - i);
//     const dateString = date.toISOString().split("T")[0];

//     // Simulate volume between 0.3 to 0.6 (in billions maybe)
//     const volume = +(0.3 + Math.random() * 0.3).toFixed(6);

//     data.push({
//       date: dateString,
//       volume,
//     });
//   }

//   return data;
// };

// const BarGraph = () => {
//   const data = generateVolumeData(); // 30-day volume data

//   return (
//     <div className={styles.container}>
//       <h2>Volume Over Last 30 Days</h2>
//       <div style={{ width: "100%", height: 500, padding: "20px" }}>
//         <ResponsiveContainer>
//           <BarChart
//             data={data}
//             margin={{ top: 20, right: 30, left: 30, bottom: 20 }}
//           >
//             <CartesianGrid strokeDasharray="3 3" />
//             <XAxis dataKey="date" />
//             <YAxis
//               tickFormatter={(value) =>
//                 value >= 1e9
//                   ? `${(value / 1e9).toFixed(1)}B`
//                   : value >= 1e6
//                   ? `${(value / 1e6).toFixed(1)}M`
//                   : value.toFixed(3)
//               }
//             />
//             <Tooltip />
//             <Legend />
//             <Bar dataKey="volume" fill="#FFD700" name="Volume" />
//           </BarChart>
//         </ResponsiveContainer>
//       </div>
//     </div>
//   );
// };

// export default BarGraph;
