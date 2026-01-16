import { useState } from "react";
import { loginUser } from "../../firebase/auth";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    const result = await loginUser(email, password);
    alert(result.success ? "Login Successful" : result.error);
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <h2 className="text-xl mb-4">Login</h2>

      <input className="border p-2 w-full mb-2" placeholder="Email"
        value={email} onChange={(e) => setEmail(e.target.value)} />

      <input className="border p-2 w-full mb-2" type="password" placeholder="Password"
        value={password} onChange={(e) => setPassword(e.target.value)} />

      <button className="bg-blue-600 text-white px-4 py-2" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
}
