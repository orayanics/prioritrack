import '../styles/navbar.css'
import navlogo from '../assets/navlogo.png'

function Navbar(): JSX.Element {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={navlogo} alt="Prioritrack " />
      </div>
      <div className="navbar-links">
        <a href="#">Dashboard</a>
        <a href="#">Reports</a>
        <a href="#">Client</a>
        <a href="#">Logout</a>
      </div>
    </nav>
  )
}

export default Navbar
