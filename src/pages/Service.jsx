import { useAuth } from "../store/auth";

const Service = () => {
  const { courses } = useAuth();
  return (
    <div>
      <header className="m-8">
        <div>
          <h1 className="text-4xl font-semibold">Services</h1>
          <div className="h-[0.3rem] w-20 bg-violet-950 mt-2"></div>
        </div>
      </header>
      <div className="flex flex-wrap items-center justify-center">
        {courses.map((course, index) => (
          <div
            key={index}
            className="m-4 p-2 border-2 border-white w-[20rem] h-[25rem] flex flex-col items-center justify-center hover:cursor-pointer"
          >
            <img src="/images/design.png" alt="design" width="200" />
            <div className="flex flex-col items-center justify-center">
              <h1 className="text-xl">{course.course_name}</h1>
              <p>${course.price}</p>
              <div className="flex items-center justify-between gap-x-8 mt-8">
                <p className="font-semibold text-lg">By : {course.instructor}</p>
                <p className="font-semibold text-lg">{course.duration}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
