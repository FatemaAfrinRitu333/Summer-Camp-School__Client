import React from "react";
import {GiTeacher} from 'react-icons/gi';

const ClassItem = ({ item }) => {
  return (
    <div className="card lg:card-side bg-base-100 shadow-xl">
      <figure>
        <img src={item.photo} className="lg:h-96" alt="Album" />
      </figure>
      <div className="card-body lg:w-8/12 w-full my-auto">
        <h2 className="card-title justify-end text-sky-950">{item.title}</h2>
        <small className="ms-auto text-info flex items-center gap-1"><GiTeacher className="text-lg text-slate-400"/> {item.instructorName}</small>
          <div className="stats shadow stats-horizontal  my-2">
            <div className="stat lg:place-items-center">
              <div className="stat-title text-[10px]">Enrolled</div>
              <div className="stat-value text-xl lg:text-2xl text-primary">{item.studentsEnrolled}</div>
            </div>

            <div className="stat lg:place-items-center">
              <div className="stat-title text-[10px]">Course Cost</div>
              <div className="stat-value text-xl lg:text-2xl text-secondary">$ {item.cost}</div>
            </div>

            <div className="stat lg:place-items-center">
              <div className="stat-title text-[10px]">Available Seats</div>
              <div className="stat-value text-xl lg:text-2xl text-red-700">{item.availableSeats}</div>
            </div>
          </div>
        <div className="card-actions justify-end">
          <button className="btn btn-info btn-outline flex-none border-0 border-b-2">
            Enroll Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClassItem;
