import { Link } from "react-router-dom"

const Navbar = () => {
  return (
   <>
   <header>
    <div className="flex items-center justify-between p-6">
        <div className="text-2xl">
            <Link to="/">Beyond<span className="text-violet-950">Tech</span></Link>
        </div>
        <nav>
            <ul className="flex list-none gap-2">
                <li className="px-2 text-lg"><Link to="/" className="focus:text-violet-950 focus:text-xl">Home</Link></li>
                <li className="px-2 text-lg"><Link to="/about" className="focus:text-violet-950 focus:text-xl">About</Link></li>
                <li className="px-2 text-lg"><Link to="/service" className="focus:text-violet-950 focus:text-xl">Services</Link></li>
                <li className="px-2 text-lg"><Link to="/contact" className="focus:text-violet-950 focus:text-xl">Contact</Link></li>
                <li className="px-2 text-lg"><Link to="/register" className="focus:text-violet-950 focus:text-xl">Register</Link></li>
                <li className="px-2 text-lg"><Link to="/login" className="focus:text-violet-950 focus:text-xl">Log In</Link></li>
            </ul>
        </nav>
    </div>
    </header>
    </>
  )
}

export default Navbar