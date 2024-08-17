import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./AuthProvider";
import "./index.css";

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
    <div className="wrapper">
      <form action="">
        <h1>Login</h1>
        <div className="input-box">
          <input
            type="email"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <i className="bx bxs-envelope"></i>
        </div>

        <div className="input-box">
          <input
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <i className="bx bxs-lock-alt"></i>
        </div>

        <div className="remember-forgot">
          <label>
            <input type="checkbox" /> Remember me
          </label>
          <a href="#">Forgot Password?</a>
        </div>

        <button onClick={handleLogin} disabled={loading} className="butt">
          {loading ? "Logging in..." : "Login"}
        </button>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <div className="register-link">
          <p>
            Don&apos;t have an account? <a href="#">Register</a>
          </p>
        </div>
      </form>
    </div>
  );
}
