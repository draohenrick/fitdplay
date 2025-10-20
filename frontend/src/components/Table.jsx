import React from "react";

const Table = ({ columns, data }) => {
  return (
    <div className="bg-white rounded shadow p-4 overflow-auto">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr>
            {columns.map((col) => (
              <th key={col} className="border-b px-4 py-2">{col}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              {columns.map((col) => (
                <td key={col} className="border-b px-4 py-2">{row[col]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
