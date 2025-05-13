import { useState } from "react";
import styles from "./login.module.css"; 
import useAuth from "../../hooks/useAuth";
import { useAuthContext } from "../context/AuthContext";

const LoginForm = () => {
  const { login } = useAuth();
  const [error, setError] = useState(null);
  const { user, isSignedIn } = useAuthContext();

  const handleSubmit = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      login(email, password);
      setError(null);
    } catch (err) {
      setError("Login failed. Please check your credentials.");
    }
  };

  return (
    <div className={styles.loginFormContainer}>
      <h5>Du er ikke logget ind..</h5>
    </div>
  );
};

export default LoginForm;
