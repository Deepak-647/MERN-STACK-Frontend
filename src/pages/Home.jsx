import ClientSection from "../component/ClientSection";


const Home = () => {
  return (
    <div className="sm:px-10 mt-12">
      <div className="flex flex-col sm:flex-row sm:items-center items-start justify-between sm:mx-16 mx-6">
        <div className="sm:max-w-[50%]">
          <h2 className="text-xl mb-3">We are the World Best IT Company</h2>
          <h1 className="text-5xl mb-6 font-bold">Welcome to Beyond Tech</h1>
          <p>
            Are you ready to take your business to the next level with
            cutting-edge IT solutions? Look no further! At Thapa Technical, we
            specialize in providing innovative IT services and solutions
            tailored to meet your unique needs.
          </p>
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
        {/* hero image */}
        <div className="mt-10 flex items-center justify-center">
          <img
            src="/images/home.png"
            alt="coding together"
            width="400"
            height="500"
          />
        </div>
      </div>

    <ClientSection/>
      
    </div>
  );
};

export default Home;
