/* eslint-disable react/no-unescaped-entities */
import ClientSection from "../component/ClientSection"
import { useAuth } from "../store/auth"
const About = () => {
  const {user} =useAuth()
  return (
    <div>
      <header className="m-8">
        <div>
          <h1 className="text-4xl font-semibold">About</h1>
          <div className="h-[0.3rem] w-20 bg-violet-950 mt-2"></div>
        </div>
      </header>
      <div className="flex flex-col sm:flex-row items-center justify-between sm:mx-[6rem]">
        <div className="sm:w-[40%] w-[80%]">
        <h5 className="font-medium my-2">Welcome, {user ? user.msg.username.charAt(0).toUpperCase() + user.msg.username.slice(1) : `User`}</h5>

        <h1 className="text-4xl my-4 font-semibold">Why Choose Us?</h1>
        <p className="my-4 ">Welcome to our tech courses company, a hub where innovation converges with education! At the heart of our mission lies a commitment to empowering individuals, from novices to seasoned professionals, by providing comprehensive and dynamic tech-focused courses.</p>
        <p className="my-4 ">We're passionate about bridging the gap between aspiration and expertise in an ever-evolving technological landscape. Our diverse catalog encompasses a wide array of in-demand fields, ranging from programming languages and software development to cybersecurity, AI, data science, and more.</p>
        <p className="my-4">Whether you're a newcomer eager to explore the realms of technology or a professional seeking to upskill and stay ahead in your career, our dynamic curriculum caters to diverse skill levels and aspirations. Each course is designed to foster a supportive learning environment, encouraging collaboration, innovation, and individual growth. Our commitment extends beyond just teaching; we strive to cultivate a community where curiosity is nurtured, and possibilities are boundless.</p>
        <div className="mt-4">
            <a href="/contact">
              <button className="mt-4 mr-2   py-2 px-4 bg-blue-700 rounded-lg">
                Connect Now
              </button>
            </a>
            <a href="/services">
              <button className="mt-4 border border-solid border-blue-900  py-2 px-4 rounded-lg">
                Learn More
              </button>
            </a>
          </div>
        </div>
        <div className="sm:my-0 my-6">
          <img src="/images/about.png" alt="" className="sm:h-[450px]  h-[300px]"/>
        </div>
      </div>
     <ClientSection/>
    </div>
  )
}

export default About