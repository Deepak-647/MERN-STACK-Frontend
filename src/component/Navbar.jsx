import { Link } from "react-router-dom"

const Navbar = () => {
  return (
   <>
   <header>
    <div className="flex items-center justify-between p-6">
        <div className="text-lg">
            <Link to="/">Wonder World</Link>
        </div>
        <nav>
            <ul className="flex list-none gap-2">
                <li className="px-2 text-lg"><Link to="/">Home</Link></li>
                <li className="px-2 text-lg"><Link to="/about">About</Link></li>
                <li className="px-2 text-lg"><Link to="/service">Services</Link></li>
                <li className="px-2 text-lg"><Link to="/contact">Contact</Link></li>
                <li className="px-2 text-lg"><Link to="/register">Register</Link></li>
                <li className="px-2 text-lg"><Link to="/login">Log In</Link></li>
            </ul>
        </nav>
    </div>
    </header>
    </>
  )
}

export default Navbar