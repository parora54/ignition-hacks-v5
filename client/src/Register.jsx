import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./styles/Login.module.css"; // Importing CSS module
import { useAuth } from "./AuthProvider";

export default function Register() {
  const [fullName, setFullName] = useState(""); // Updated state variable name
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [notSame, setNotSame] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();

  useEffect(() => {
    if (password && confirmPass && password !== confirmPass) {
      setNotSame(true);
    } else {
      setNotSame(false);
    }
  }, [password, confirmPass]);

  // Logic to handle registering
  const handleRegister = async (event) => {
    event.preventDefault(); // Prevent default form submission

    setLoading(true);
    setError(null);

    try {
      if (notSame) {
        throw new Error("Passwords do not match");
      }

      console.log("Registering with:", { fullName, email, password }); // Log data

      const response = await fetch("http://127.0.0.1:5000/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ fullName, email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log("Message from API:", data);
        const success = await login(email, password);
        if (success) {
          navigate("/profile");
        }
      } else {
        throw new Error(data.message || "Register failed.");
      }
    } catch (error) {
      console.error("Register error:", error);
      setError("Register failed. Please try again.");
    } finally {
      setLoading(false); // Ensure loading is set to false regardless of success or failure
    }
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.wrapper}>
        <form onSubmit={handleRegister}>
          <h1>Register</h1>

          <div className={styles.inputBox}>
            <input
              type="text"
              placeholder="Full Name"
              required
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
            <i className="bx bxs-user"></i>
          </div>

          <div className={styles.inputBox}>
            <input
              type="email"
              placeholder="Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <i className="bx bxs-envelope"></i>
          </div>

          <div className={styles.inputBox}>
            <input
              type="password"
              placeholder="Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <i className="bx bxs-lock-alt"></i>
          </div>

          <div className={styles.inputBox}>
            <input
              type="password"
              placeholder="Confirm Password"
              required
              value={confirmPass}
              onChange={(e) => setConfirmPass(e.target.value)}
            />
            <i className="bx bxs-lock-alt"></i>
          </div>
          {notSame && <p className={styles.error}>Passwords do not match</p>}

          <div className={styles.rememberForgot}>
            <label>
              <input type="checkbox" /> Sign up for email updates?
            </label>
          </div>

          <button
            type="submit"
            disabled={loading || notSame}
            className={styles.butt}
          >
            {loading ? "Registering..." : "Register"}
          </button>
          {error && <p className={styles.error}>{error}</p>}
          <div className={styles.registerLink}>
            <p>
              Have an account? <a href="/login">Login</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
