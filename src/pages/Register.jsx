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

  const { storeTokenInLS } = useAuth();

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
      const res_data = await response.json();

      if (response.ok) {
        //stored the token in localhost

        storeTokenInLS(res_data.token);
        // localStorage.setItem("token",res_data.token);

        setUser({ username: "", email: "", phone: "", password: "" });
        toast.success("Registration Successful !", {
          theme: "dark",
        });
        navigate("/login");
      } else {
        toast.error(res_data.message ? res_data.message : res_data.msg, {
          theme: "dark",
        });
      }
    } catch (error) {
      console.log("register error", error);
    }
  };
  return (
    <>
      <header className="m-8">
        <div>
          <h1 className="text-4xl font-semibold">Sign Up</h1>
          <div className="h-[0.3rem] w-20 bg-violet-950 mt-2"></div>
        </div>
      </header>
      <div className=" flex items-center justify-center">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-x-14 w-[60%]">
          <div className="h-full flex items-center justify-center">
            <img
              src="/images/register.png"
              alt=""
              className="sm:h-[450px]  h-[300px]"
            />
          </div>
          
            <div className="sm:w-[40%] w-[90%] my-2">
              <form onSubmit={handleSubmit}>
                <div className="flex flex-col my-4">
                  <label htmlFor="username" className="my-1 text-lg">
                    Username
                  </label>
                  <input
                    type="text"
                    name="username"
                    placeholder="username"
                    id="username"
                    value={user.username}
                    onChange={handleInput}
                    required
                    className="bg-slate-800 px-4 py-2"
                  />
                </div>
                <div className="flex flex-col my-4">
                  <label htmlFor="email" className="my-1 text-lg">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="email"
                    id="email"
                    value={user.email}
                    onChange={handleInput}
                    required
                    className="bg-slate-800 px-4 py-2"
                  />
                </div>
                <div className="flex flex-col my-4">
                  <label htmlFor="phone" className="my-1 text-lg">
                    Phone
                  </label>
                  <input
                    type="number"
                    name="phone"
                    placeholder="phone"
                    id="phone"
                    value={user.phone}
                    onChange={handleInput}
                    required
                    className="bg-slate-800 px-4 py-2"
                  />
                </div>
                <div className="flex flex-col my-4">
                  <label htmlFor="password" className="my-1 text-lg">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="password"
                    id="password"
                    value={user.password}
                    onChange={handleInput}
                    required
                    className="bg-slate-800 px-4 py-2"
                  />
                </div>
                <br />
                <button type="submit" 
                className="border border-white p-1 rounded-md m-2 px-4 hover:bg-white hover:text-black hover:cursor-pointer font-semibold">Sign Up</button>
              </form>
            </div>
          </div>
        </div>
      
    </>
  );
};

export default Register;
