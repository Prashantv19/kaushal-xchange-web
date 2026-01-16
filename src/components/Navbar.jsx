import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="flex justify-between p-4 border-b">
      <h1 className="text-lg font-bold">Kaushal Xchange</h1>
      <div className="flex gap-4">
        <Link to="/login" className="text-blue-600">Login</Link>
        <Link to="/register" className="text-green-600">Register</Link>
      </div>
    </div>
  );
}
