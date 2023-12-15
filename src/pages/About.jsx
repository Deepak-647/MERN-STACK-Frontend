import { useAuth } from "../store/auth"
const About = () => {
  const {user} =useAuth()
  return (
    <div>
      <h1>Welcome , {user ? user.msg.username : `to our page`}</h1>
    </div>
  )
}

export default About