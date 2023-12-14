import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const storeTokenInLS = useAuth();
  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user,
      [name]: value,
    });
  };

  //handling the form submission

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user);
    try {
      const response = await fetch(`http://localhost:5000/api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      if (response.ok) {
        alert("Login Successful!")

        //storing token in local storage
        const res_data =await response.json();
        storeTokenInLS(res_data.token)

        // localStorage.setItem("token",res_data.token);
        setUser({  email: "", password: "" });
        navigate("/")
        
      }else{
        alert("Invalid Credentials")
      }
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="h-[90vh]  flex items-center justify-center">
      <div className="flex items-center justify-between">
        <div className="h-full flex items-center justify-center">
          <img src="/images/login.png" alt="" width="500" height="500" />
        </div>
        <div>
          <div>
            <h1 className="mb-3">Log In</h1>
          </div>
          <div>
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col">
                <label htmlFor="email">email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  id="email"
                  value={user.email}
                  onChange={handleInput}
                  required
                  className="bg-slate-800"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="password">password</label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  id="password"
                  value={user.password}
                  onChange={handleInput}
                  required
                  className="bg-slate-800"
                />
              </div>

              <br />
              <button type="submit">Log In</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
