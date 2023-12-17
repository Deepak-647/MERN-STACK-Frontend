import { useAuth } from "../store/auth";

const Service = () => {
  const {courses} = useAuth();
  return (
    <div>
      <div>Service</div>
      <div className="flex flex-wrap">
      {courses.map((course, index) => (
      <div key={index} className="m-4 p-2 border border-white w-[20rem] h-[30rem]">
        <img src="/images/design.png" alt="design" width="200" />
          <div>
            <h1 className="text-xl">{course.course_name}</h1>
            <p>${course.price}</p>
            <p>{course.description}</p>
            <p>Instructor : {course.instructor}</p>
            <p>Duration : {course.duration}</p>
          </div>
      </div>
        ))}
      </div>
        
    </div>
  );
};

export default Service;
