import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./AuthProvider";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate(); // use history for redirection
  const { login } = useAuth();

  // Logic to handle login
  const handleLogin = async () => {
    setLoading(true);
    setError(null);

    const success = await login(email, password);

    if (success) {
      navigate("/profile"); //FIXME: change to navigate to dashboard/profile page
    } else {
      setError("Login failed. Please try again.");
    }

    setLoading(false);
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button onClick={handleLogin} disabled={loading}>
        {loading ? "Logging in..." : "Login"}
      </button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}
