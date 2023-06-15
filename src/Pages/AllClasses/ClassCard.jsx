import { FaCartPlus } from 'react-icons/fa';
import {GiTeacher} from 'react-icons/gi'

const ClassCard = ({item}) => {
  return (
    <div className="card lg:card-side bg-base-100 shadow-xl">
      <figure>
        <img src={item.photo} className="lg:h-96" alt="Album" />
      </figure>
      <div className="card-body lg:w-8/12 w-full my-auto">
        <h2 className="card-title justify-end text-sky-950">{item.title}</h2>
        <small className="ms-auto text-info flex items-center gap-1">
          <GiTeacher className="text-lg text-slate-400" /> {item.instructorName}
        </small>
        <div className="stats shadow-sm stats-horizontal my-2">
          <div className="stat px-2 lg:place-items-center">
            <div className="stat-title text-[10px]">Price</div>
            <div className="stat-value text-lg lg:text-base text-primary">
              ${item.cost}
            </div>
          </div>

          <div className="stat px-2 lg:place-items-center">
            <div className="stat-title text-[10px]">Duration</div>
            <div className="stat-value text-sm text-secondary">
              {item.duration}
            </div>
          </div>
          <div className="stat px-2 lg:place-items-center flex-1">
            <div className="stat-title text-[10px]">Requirements</div>
            <div className="stat-value text-xs text-neutral">
              {item.requirements.split('.')[0]}
            </div>
          </div>
        </div>
        <div className="card-actions mt-3">
          <button className="btn btn-info btn-outline flex-none border-0 border-b-2 w-full">
            <FaCartPlus/> Add Class
          </button>
          <div className="stats stats-horizontal my-2 w-full">
          <div className="stat px-2 place-items-center">
            <div className="stat-value text-2xl text-blue-700">
              {item.studentsEnrolled}
            </div>
            <div className="stat-title text-sm">Already Enrolled</div>
          </div>

          <div className="stat px-2 place-items-center">
            <div className={`stat-value text-2xl text-secondary ${item.availableSeats<5? 'text-red-600': 'text-green-700'}`}>
              {item.availableSeats}
            </div>
            <div className="stat-title text-sm">Seats Available</div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default ClassCard;
