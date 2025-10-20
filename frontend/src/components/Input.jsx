export default function Input({ label, type, value, onChange, placeholder }) {
  return (
    <div className="flex flex-col mb-4">
      <label className="mb-1 font-semibold text-gray-700">{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-600"
      />
    </div>
  );
}
