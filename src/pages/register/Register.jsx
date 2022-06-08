import "./register.css";
import { useRef } from "react";
import { useHistory, Link } from "react-router-dom";
import axios from "axios";

export default function Register() {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const passwordAgain = useRef();
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (passwordAgain.current.value !== password.current.value) {
      passwordAgain.current.setCustomValidity("Passwords do not match!");
    } else {
      const user = {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value,
      };
      try {
          await axios.post("/auth/register", user);
          history.push('/login')
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <div className="login-page">
      <div className="login-wrapper">
        <div className="login-left">
          <h3 className="login-logo">Minh's MặtSách</h3>
          <span className="login-desc">
            Tìm bạn bốn phương ở thế giới của Minh
          </span>
        </div>
        <div className="login-right">
          <form className="login-box" onSubmit={handleSubmit}>
            <input
              placeholder="Username"
              className="login-input"
              type="text"
              ref={username}
              required
            />
            <input
              placeholder="Email"
              className="login-input"
              type="email"
              ref={email}
              required
            />
            <input
              placeholder="Password"
              className="login-input"
              type="password"
              ref={password}
              required
            />
            <input
              placeholder="Password Again"
              className="login-input"
              type="password"
              ref={passwordAgain}
              required
            />
            <button className="login-btn" type="submit">
              Sign Up
            </button>
            <Link to="/login" className="register-button">
              Log into Account
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
