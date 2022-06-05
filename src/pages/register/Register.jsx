import "./register.css"

export default function Register() {
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
                    <input placeholder="Username" className="login-input" type="text"/>
                    <input placeholder="Email" className="login-input" type="email"/>
                    <input placeholder="Password" className="login-input" type="password"/>
                    <input placeholder="Password Again" className="login-input" type="password"/>
                    <button className="login-btn">Sign Up</button>
                    <button className="register-button">Log into Account</button>
                </div>
            </div>
        </div>
    </div>
  )
}
