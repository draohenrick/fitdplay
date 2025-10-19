export default function Table({ columns, data }) {
  return (
    <table className="min-w-full border border-gray-200">
      <thead className="bg-gray-100">
        <tr>
          {columns.map((col) => (
            <th key={col} className="text-left p-2">{col}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, i) => (
          <tr key={i} className="border-t">
            {columns.map((col) => (
              <td key={col} className="p-2">{row[col]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
