const Register = () => {
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
            <form action="">
              <div className="flex flex-col">
                <label htmlFor="username">username</label>
                <input
                  type="text"
                  name="username"
                  placeholder="username"
                  id="username"
                  required
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="email">email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  id="email"
                  required
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="phone">phone</label>
                <input
                  type="number"
                  name="phone"
                  placeholder="phone"
                  id="phone"
                  required
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="password">password</label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  id="password"
                  required
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
