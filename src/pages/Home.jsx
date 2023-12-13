import CountUp from "react-countup";

const Home = () => {
  return (
    <div className="px-10 mt-16">
      <div className="flex items-center justify-between mx-16">
      <div className="max-w-[50%]">
        <h2 className="text-xl mb-3">We are the World Best IT Company</h2>
        <h1 className="text-5xl mb-6 font-bold">Welcome to Beyond Tech</h1>
        <p>
          Are you ready to take your business to the next level with
          cutting-edge IT solutions? Look no further! At Thapa Technical, we
          specialize in providing innovative IT services and solutions tailored
          to meet your unique needs.
        </p>
        <div className="mt-4">
                <a href="/contact">
                  <button className="mt-4 mr-2   py-2 px-4 bg-blue-700 rounded-lg">Connect Now</button>
                </a>
                <a href="/services">
                  <button className="mt-4 border border-solid border-blue-900  py-2 px-4 rounded-lg">Learn More</button>
                </a>
              </div>
      </div>
    {/* hero image */}
    <div>
              <img
                src="/images/home.png"
                alt="coding together"
                width="400"
                height="500"
              />
            </div>
      </div>
      
      {/* client section */}
      <div className="mt-[4rem] flex items-center justify-center ">
        <div className="flex items-center justify-center py-4 bg-white rounded-lg text-slate-700 w-[60%]">
        <div className="mx-8 flex flex-col items-center">
          <h2 className="text-2xl font-semibold">
            <CountUp start={45}
                end={50}
                duration={3}/>
            +</h2>
          <p>Registered Companies</p>
        </div>
        <div className="h-12 w-[0.1rem] bg-slate-700"></div>
        <div className="mx-8 flex flex-col items-center">
          <h2 className="text-2xl font-semibold">
          <CountUp start={9000}
                end={10000}
                duration={3}/>+</h2>
          <p>Happy Clients</p>
        </div>
        <div className="h-12 w-[0.1rem] bg-slate-700"></div>
        <div className="mx-8 flex flex-col items-center">
          <h2 className="text-2xl font-semibold">
          <CountUp start={400}
                end={500}
                duration={3}/>+</h2>
          <p>Well Known Developers</p>
        </div>
        <div className="h-12 w-[0.1rem] bg-slate-700"></div>
        <div className="mx-8 flex flex-col items-center">
          <h2 className="text-2xl font-semibold">24/7</h2>
          <p>Service</p>
        </div>
        
        </div>
        
      </div>
    </div>
  );
};

export default Home;
