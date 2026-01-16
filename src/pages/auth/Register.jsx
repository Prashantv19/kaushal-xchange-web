import { useState } from "react";
import { createUser } from "../../firebase/auth";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    if (!email || !password || !name) return alert("All fields required");

    const result = await createUser(name, email, password);
    alert(result.success ? "User Registered" : result.error);
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <h2 className="text-xl mb-4">Register</h2>

      <input className="border p-2 w-full mb-2" placeholder="Full Name"
        value={name} onChange={(e) => setName(e.target.value)} />

      <input className="border p-2 w-full mb-2" placeholder="Email"
        value={email} onChange={(e) => setEmail(e.target.value)} />

      <input className="border p-2 w-full mb-2" type="password" placeholder="Password"
        value={password} onChange={(e) => setPassword(e.target.value)} />

      <button className="bg-green-600 text-white px-4 py-2" onClick={handleRegister}>
        Register
      </button>
    </div>
  );
}
