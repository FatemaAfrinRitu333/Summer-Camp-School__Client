import { FaArrowRight, FaUsers } from "react-icons/fa";
import { MdClass } from "react-icons/md";

const InstructorItem = ({ item }) => {
  return (
    <div className="card w-full bg-base-100 shadow-xl">
      <figure>
        <img src={item.photo} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-sky-950">
          {item.name} <br />
          <div className="badge badge-neutral md:font-medium font-thin md:p-3 p-5 text-center">
            {item.class} Instructor
          </div>
        </h2>
          <div className="grid gap-2 my-3">
            <div className="badge p-5 md:text-lg text-green-900">
              Classes Taken:
              <span className="flex items-center gap-1 font-extrabold text-2xl text-secondary ms-3">
                <MdClass /> {item.numClassesTaken}
              </span>
            </div>
            <div className="badge p-5 md:text-lg text-green-900">
              Total Students Taught:{" "}
              <span className="flex items-center gap-1 font-extrabold text-2xl text-red-700 ms-3">
                <FaUsers /> {item.studentsEnrolled}
              </span>
            </div>
          </div>
      </div>
    </div>
  );
};

export default InstructorItem;
