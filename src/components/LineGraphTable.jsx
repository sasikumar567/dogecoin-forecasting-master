import React from "react";
import styles from "./LineGraphTable.module.css";

const LineGraphTable = ({ data }) => {
  if (!data || data.length === 0) return <p>No data available</p>;

  return (
    <div className={styles.tableContainer}>
      <h3>Detailed Metrics Table</h3>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Date</th>
            <th>Open</th>
            <th>High</th>
            <th>Low</th>
            <th>Close</th>
            <th>Volume</th>
          </tr>
        </thead>
        <tbody>
          {data.map((entry, index) => (
            <tr key={index}>
              <td>{entry.date || "N/A"}</td>
              <td>{entry.open?.toFixed(4) || "N/A"}</td>
              <td>{entry.high?.toFixed(4) || "N/A"}</td>
              <td>{entry.low?.toFixed(4) || "N/A"}</td>
              <td>{entry.close?.toFixed(4) || "N/A"}</td>
              <td>{entry.volume?.toFixed(4) || "N/A"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LineGraphTable;
