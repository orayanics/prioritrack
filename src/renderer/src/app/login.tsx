import '../styles/login.css'
import logo from '../assets/logo.png'

function Login(): JSX.Element {
  return (
    <body>
      <img src={logo} alt="logo" className="logo" />
      <div className="card-container">
        <div className="card">
          <div className="login">
            <h2>Login</h2>
          </div>
          <form>
            <label htmlFor="username">Username</label>
            <input type="text" id="username" name="username" required />

            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" required />

            <button type="submit">Login</button>
          </form>
          <p className="forgot-password">
            <a href="../renderer/forgotpass.html" className="forgot-link">
              Forgot your password?
            </a>
          </p>
        </div>
      </div>
    </body>
  )
}

export default Login
