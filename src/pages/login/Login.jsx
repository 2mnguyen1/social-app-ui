import "./login.css"
import {useRef} from 'react'


export default function Login() {
    const email = useRef()
    const password = useRef()

    function handleSubmit(e) {
        e.preventDefault();
        // console.log(email.current.value)
    }
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
                    <button className="login-btn">Log In</button>
                    <span className="login-forgot">Forgot Password?</span>
                    <button className="register-button">Create a New Account</button>
                </form>
            </div>
        </div>
    </div>
  )
}
