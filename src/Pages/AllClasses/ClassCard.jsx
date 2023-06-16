import { useContext } from 'react';
import { FaCartPlus } from 'react-icons/fa';
import {GiTeacher} from 'react-icons/gi'
import { AuthContext } from '../../Providers/AuthProvider';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';
import useCart from '../../Hooks/useCart';

const ClassCard = ({item}) => {

  const {_id, cost, title, photo, instructorName,availableSeats,studentsEnrolled,requirements,duration} = item;
  const [, refetch] = useCart();

  const {user} = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const handleAddToCart = (item) =>{
    // console.log(item);
    if(user && user.email){
      const classCart = {classId:_id, title, photo, cost, email:user.email, instructorName}
      fetch('http://localhost:5000/cart', {
        method: 'POST',
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify(classCart)
      })
      .then(res=>res.json())
      .then(data=>{
        if(data.insertedId){
          refetch();
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: `${title} has been saved! Go to the dashboard to confirm your enrollment`,
            showConfirmButton: false,
            timer: 3000
          })
        }
      })
    }
    else{
      Swal.fire({
        title: 'Please login to select classes',
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'Okay',
        denyButtonText: `I don't want to login now`,
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          navigate('/login', {state: {from: location}})
        } else if (result.isDenied) {
          Swal.fire(`${item.title} is not saved`, '', 'info')
        }
      })
    }
  }

  return (
    <div className="card lg:card-side bg-base-100 shadow-xl">
      <figure>
        <img src={photo} className="lg:h-96" alt="Album" />
      </figure>
      <div className="card-body lg:w-8/12 w-full my-auto">
        <h2 className="card-title justify-end text-sky-950">{title}</h2>
        <small className="ms-auto text-info flex items-center gap-1">
          <GiTeacher className="text-lg text-slate-400" /> {instructorName}
        </small>
        <div className="stats shadow-sm stats-horizontal my-2">
          <div className="stat px-2 lg:place-items-center">
            <div className="stat-title text-[10px]">Price</div>
            <div className="stat-value text-lg lg:text-base text-primary">
              ${cost}
            </div>
          </div>

          <div className="stat px-2 lg:place-items-center">
            <div className="stat-title text-[10px]">Duration</div>
            <div className="stat-value text-sm text-secondary">
              {duration}
            </div>
          </div>
          <div className="stat px-2 lg:place-items-center flex-1">
            <div className="stat-title text-[10px]">Requirements</div>
            <div className="stat-value text-[12px] text-neutral">
              {requirements.split('.')[0]}
            </div>
          </div>
        </div>
        <div className="card-actions mt-3">
          <button onClick={()=>handleAddToCart(item)} className="btn btn-info btn-outline flex-none border-0 border-b-2 w-full">
            <FaCartPlus/> Add Class
          </button>
          <div className="stats stats-horizontal my-2 w-full">
          <div className="stat px-2 place-items-center">
            <div className="stat-value text-2xl text-blue-700">
              {studentsEnrolled}
            </div>
            <div className="stat-title text-sm">Already Enrolled</div>
          </div>

          <div className="stat px-2 place-items-center">
            <div className={`stat-value text-2xl text-secondary ${availableSeats<5? 'text-red-600': 'text-green-700'}`}>
              {availableSeats}
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
