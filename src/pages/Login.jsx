import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
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
      const response = await fetch(`http://localhost:5000/api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      const res_data = await response.json();

      if (response.ok) {
        toast.success("Login Successful!", {
          theme: "dark",
        });

        //storing token in local storage
        storeTokenInLS(res_data.token);

        // localStorage.setItem("token",res_data.token);
        setUser({ email: "", password: "" });
        navigate("/");
      } else {
        toast.error(res_data.message, {
          theme: "colored",
        });
      }
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <header className="m-8">
        <div>
          <h1 className="text-4xl font-semibold">Log In</h1>
          <div className="h-[0.3rem] w-20 bg-violet-950 mt-2"></div>
        </div>
      </header>
      <div className="flex items-center justify-center">
        <div className="flex flex-col sm:flex-row items-center justify-between w-[60%]">
          <div className="h-full flex items-center justify-center">
            <img src="/images/login.png" alt="" className="sm:h-[450px]  h-[300px]"/>
          </div>

          <div className="sm:w-[40%] w-[90%] my-2">
            <form onSubmit={handleSubmit}>
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
              <button type="submit" className="border border-white p-1 rounded-md m-2 px-4 hover:bg-white hover:text-black hover:cursor-pointer font-semibold">Log In</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
