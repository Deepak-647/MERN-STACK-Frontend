import { Link } from "react-router-dom"

const Navbar = () => {
  return (
   <>
   <header>
    <div>
        <div>
            <Link to="/">Wonder World</Link>
        </div>
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/service">Services</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/register">Register</Link></li>
                <li><Link to="/login">Log In</Link></li>
            </ul>
        </nav>
    </div>
    </header>
    </>
  )
}

export default Navbar