import "./login.css"
import {useRef, useContext} from 'react'
import {loginCall} from '../../apiCalls'
import {AuthContext} from '../../context/AuthContext'
import CircularProgress from "@mui/material/CircularProgress";



export default function Login() {
    const email = useRef()
    const password = useRef()
    const {user, isFetching, error, dispatch} = useContext(AuthContext)

    function handleSubmit(e) {
        e.preventDefault();
        loginCall({email: email.current.value, password: password.current.value}, dispatch)
    }
    console.log(user)
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
                      <button type="submit" className="login-btn" disabled={isFetching}>
              {isFetching ? (
                <CircularProgress color="inherit" size="20px" />
              ) : (
                "Log In"
              )}
            </button>
            <span className="login-forgot">Forgot Password?</span>
            <button className="register-button">
              {isFetching ? (
                <CircularProgress color="inherit" size="20px" />
              ) : (
                "Create a New Account"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
