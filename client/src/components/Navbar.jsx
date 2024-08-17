import "./test.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <a href="/" className="nav-link">
        Home
      </a>
      <a href="/login" className="nav-link">
        Login
      </a>
      <a href="/feed" className="nav-link">
        Feed
      </a>
      <a href="/drills" className="nav-link">
        Drills
      </a>
      <a href="/achievements" className="nav-link">
        Achievements
      </a>
    </nav>
  );
}
