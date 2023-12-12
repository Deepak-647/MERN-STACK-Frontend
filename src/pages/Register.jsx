import { useState } from "react";

const Register = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
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
