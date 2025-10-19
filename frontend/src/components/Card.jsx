export default function Card({ title, value, icon }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow flex items-center gap-4">
      {icon && <div className="text-3xl">{icon}</div>}
      <div>
        <h3 className="text-gray-500">{title}</h3>
        <p className="text-xl font-bold">{value}</p>
      </div>
    </div>
  );
}
