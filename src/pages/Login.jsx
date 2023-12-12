import { useState } from "react";
const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user,
      [name]: value,
    });
  };

  //handling the form submission

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user)
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
  )
}

export default Login