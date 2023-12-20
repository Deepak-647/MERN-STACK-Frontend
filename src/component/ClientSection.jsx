import CountUp from "react-countup";

const ClientSection = () => {
  return (
    <div className="mt-[4rem] flex items-center justify-center ">
    <div className="flex items-center justify-center py-4 bg-white rounded-lg text-slate-700 sm:w-[60%] w-[80%]">
      <div className="sm:mx-8 mx-2 flex flex-col items-center  text-center">
        <h2 className="sm:text-2xl text-lg font-semibold">
          <CountUp start={45} end={50} duration={3} />+
        </h2>
        <p className="text-sm">Registered Companies</p>
      </div>
      <div className="h-12 w-[0.1rem] bg-slate-700"></div>
      <div className="sm:mx-8 mx-2 flex flex-col items-center text-center">
        <h2 className="sm:text-2xl text-lg font-semibold">
          <CountUp start={9000} end={10000} duration={3} />+
        </h2>
        <p className="text-sm">Happy Clients</p>
      </div>
      <div className="h-12 w-[0.1rem] bg-slate-700"></div>
      <div className="sm:mx-8 mx-2 flex flex-col items-center text-center">
        <h2 className="sm:text-2xl text-lg font-semibold">
          <CountUp start={400} end={500} duration={3} />+
        </h2>
        <p className="text-sm">Well Known Developers</p>
      </div>
      <div className="h-12 w-[0.1rem] bg-slate-700"></div>
      <div className="sm:mx-8 mx-2 flex flex-col items-center text-center">
        <h2 className="sm:text-2xl text-lg font-semibold">24/7</h2>
        <p className="text-sm">Service</p>
      </div>
    </div>
  </div>
  )
}

export default ClientSection


