import { useAuth } from "./AuthProvider";
import "./styles/Profile.css"; // Ensure you have this CSS file for styling

export default function Profile() {
  const { user } = useAuth();

  return (
    <div className="profile-container">
      <div className="profile-header">
        <h1>
          Welcome, <span className="profile-name">{user.name}</span>!
        </h1>
      </div>
      <div className="profile-details">
        <div className="profile-detail">
          <strong>Email:</strong> {user.email}
        </div>
        <div className="profile-detail">
          <strong>Full Name:</strong> {user.name}
        </div>
      </div>
    </div>
  );
}
