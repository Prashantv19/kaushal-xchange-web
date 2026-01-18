import { useState } from "react";
import { loginUser } from "../../firebase/auth";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (!email || !password) return alert("Email & Password required");

    setLoading(true);
    const result = await loginUser(email, password);
    setLoading(false);

    if (result.success) {
      alert("Login successful!");
      navigate("/Dashboard");
    } else {
      alert(result.error);
    }
  };
  

  return (
    <div className="p-6 max-w-md mx-auto">
      <h2 className="text-xl mb-3 font-bold">Login</h2>

      <input
        className="border p-2 w-full mb-2"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        className="border p-2 w-full mb-2"
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      
      <button className="bg-blue-600 text-white px-4 py-2" disabled={loading}>
        {loading ? "Logging in..." : "Login"}
      </button>
    </div>
  );
}
