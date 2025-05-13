import { useState } from "react";
import styles from "./userCard.module.css";

const UserCard = ({ user, logout, login }) => {
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // ✅ Logged-in user view
  if (user) {
    const handleLogout = () => {
      logout();
    };

    return (
      <div className={styles.userCardContainer}>
        <div className={styles.userInfo}>
          <h1 className={styles.userName}>{user.name}</h1>
          <p className={styles.userEmail}>{user.email}</p>
        </div>
        <div className={styles.userImage}>
          <img src="/Holo2.png" alt="userImage" />
        </div>
        <button className={styles.logoutButton} onClick={handleLogout}>
          Logout
        </button>
      </div>
    );
  }

  // ✅ Logged-out user view
  const handleLogin = (e) => {
    e.preventDefault();
    login(email, password);
  };

  return (
    <div className={styles.userCardContainer}>
      {!showLoginForm ? (
        <a
          className={styles.loginToggleText}
          onClick={() => setShowLoginForm(true)}
        >
          Log in
        </a>
      ) : (
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className={styles.loginButton}>
            Login
          </button>
        </form>
      )}
    </div>
  );
};

export default UserCard;
