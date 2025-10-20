export default function Button({ children, onClick, type = "button" }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className="bg-blue-600 text-white rounded-md px-4 py-2 hover:bg-blue-700 transition"
    >
      {children}
    </button>
  );
}
