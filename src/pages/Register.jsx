import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";

const Register = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  });

const navigate = useNavigate();

const {storeTokenInLS} = useAuth()

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
      const response = await fetch(`http://localhost:5000/api/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      const res_data =await response.json();

      if (response.ok) {
        //stored the token in localhost
          
        storeTokenInLS(res_data.token);
        // localStorage.setItem("token",res_data.token);

        setUser({ username: "", email: "", phone: "", password: "" });
        toast.success("Registration Successful !",{
          theme:"dark",
        })
        navigate("/login")
      }else{
        toast.error(res_data.message ? res_data.message : res_data.msg,{
          theme:"dark",
        })
      }
      
    } catch (error) {
      console.log("register error", error);
    }
  };
  return (
    <div className="h-[90vh]  flex items-center justify-center">
      <div className="flex items-center justify-between">
        <div className="h-full flex items-center justify-center">
          <img src="/images/register.png" alt="" width="500" height="500" />
        </div>
        <div>
          <div>
            <h1 className="mb-3">Sign Up</h1>
          </div>
          <div>
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col">
                <label htmlFor="username">username</label>
                <input
                  type="text"
                  name="username"
                  placeholder="username"
                  id="username"
                  value={user.username}
                  onChange={handleInput}
                  required
                  className="bg-slate-800"
                />
              </div>
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
                <label htmlFor="phone">phone</label>
                <input
                  type="number"
                  name="phone"
                  placeholder="phone"
                  id="phone"
                  value={user.phone}
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
              <button type="submit">Sign Up</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
