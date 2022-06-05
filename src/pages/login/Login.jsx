import "./login.css"

export default function Login() {
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
                <div className="login-box">
                    <input placeholder="Email" className="login-input" type="email"/>
                    <input placeholder="Password" className="login-input" type="password"/>
                    <button className="login-btn">Log In</button>
                    <span className="login-forgot">Forgot Password?</span>
                    <button className="register-button">Create a New Account</button>
                </div>
            </div>
        </div>
    </div>
  )
}
