import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="w-56 bg-white border-r shadow-sm flex flex-col p-4 gap-2">
      <Link to="/" className="p-2 hover:bg-gray-100 rounded">Dashboard</Link>
      <Link to="/explore" className="p-2 hover:bg-gray-100 rounded">Explore Skills</Link>
    </aside>
  );
}
