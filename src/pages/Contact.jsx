import { useState } from "react";
import { useAuth } from "../store/auth";

const defaultContactFormData = {
  username: "",
  email: "",
  message: "",
}
const Contact = () => {
  const [contact, setContact] = useState(defaultContactFormData);
  const [userData, setUserData] = useState(true);
  const { user } = useAuth();
  if (userData && user) {
    setContact({
      username:user.msg.username,
      email: user.msg.email,
      message: "",
    });
    setUserData(false);
  }
  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setContact((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  //handling the form submission

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(contact);

     try{
      const response = await fetch('http://localhost:5000/api/form/contact',{
        method:"POST",
        headers:{
          "Content-Type" : "application/json"
        },
        body : JSON.stringify(contact)
      })

      if(response.ok){
        setContact(defaultContactFormData)

      }
     }catch(error){
      console.log(error)
     }
  };
  return (
    <div>
      <header className="m-8">
        <div>
          <h1 className="text-4xl font-semibold">Contact Us</h1>
          <div className="h-[0.3rem] w-20 bg-violet-950 mt-2"></div>
        </div>
      </header>
      <div className="flex items-center justify-center">
        <div className="flex items-center gap-x-20">
          <div>
            <img src="/images/support.png" alt="" width="400" height="500" />
          </div>
          <div>
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  name="username"
                  placeholder="username"
                  id="username"
                  value={contact.username}
                  onChange={handleInput}
                  required
                  className="bg-slate-800"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  id="email"
                  value={contact.email}
                  onChange={handleInput}
                  required
                  className="bg-slate-800"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="message">Message</label>
                <textarea
                  type="message"
                  name="message"
                  cols="30"
                  rows="10"
                  id="message"
                  value={contact.message}
                  onChange={handleInput}
                  required
                  className="bg-slate-800"
                />
              </div>
              <br />
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
