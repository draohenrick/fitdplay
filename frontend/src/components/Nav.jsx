import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-blue-900 text-white py-4 px-8 flex justify-between items-center">
      <h1 className="text-xl font-bold">FitDplay</h1>
      <div className="space-x-4">
        <Link to="/login" className="hover:text-gray-300 transition">Login</Link>
        <Link to="/register" className="hover:text-gray-300 transition">Cadastro</Link>
      </div>
    </nav>
  );
}
