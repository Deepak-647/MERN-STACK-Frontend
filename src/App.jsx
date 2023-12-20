import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import  Home  from "./pages/Home"
import  About  from "./pages/About";
import  Contact  from "./pages/Contact";
import  Service  from "./pages/Service";
import  Register  from "./pages/Register";
import  Login  from "./pages/Login";
import Navbar from "./component/Navbar";
import ErrorPage from "./pages/ErrorPage";
import Logout from "./pages/Logout";
import Footer from "./component/Footer";

//subscribe thapatechnical channel for more awesome content. 

const App = () => {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/service" element={<Service />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer/>
    </Router>
  );
};

export default App;