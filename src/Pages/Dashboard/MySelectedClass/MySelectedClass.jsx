import React from "react";
import SectionTitle from "../../../Shared/SectionTitle/SectionTitle";
import { Helmet } from "react-helmet-async";
import { RxCross2 } from "react-icons/rx";
import useCart from "../../../Hooks/useCart";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const MySelectedClass = () => {
  const [cart, refetch] = useCart();
  console.log(cart);
  const total = cart?.reduce((sum, item) => item.cost + sum, 0) || 0;

  const handleDelete = (item) => {
    console.log(item);
    Swal.fire({
      title: `Are you sure you want to remove ${item.title}?`,
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://chorus-camp-server.onrender.com/cart/${item._id}`, {
          method: "DELETE",
          headers: {
            "content-method": "application/json",
          },
          body: JSON.stringify(),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              refetch();
              Swal.fire(
                "Removed!",
                `${item.title} is removed from your saved classes`,
                "success"
              );
            }
          });
      }
    });
  };

  return (
    <div className="w-full mx-auto">
      <Helmet>
        <title>Student Dashboard || Selected Classes</title>
      </Helmet>
      <SectionTitle
        heading={"Classes"}
        subHeading={"All the selected"}
      ></SectionTitle>
      <div className="w-11/12 mx-auto">
        <div className="flex text-xl uppercase font-bold text-neutral justify-around my-9">
          <h2>Total Classes: {cart.length}</h2>
          <h2>Total Price: ${total}</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Class</th>
                <th>Price</th>
                <th>Enroll</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item, index) => (
                <tr key={item._id}>
                  <th>{index + 1}</th>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img src={item?.photo} alt="Instrument" />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{item?.title}</div>
                        <div className="text-sm opacity-50">
                          {item?.instructorName}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="text-right">$ {item.cost}</td>
                  <td>
                    <Link to='/dashboard/payment' item={item}>
                      <button className="btn btn-ghost text-primary">
                        Pay
                      </button>
                    </Link>
                  </td>
                  <th>
                    <button
                      onClick={() => handleDelete(item)}
                      className="btn btn-circle btn-ghost hover:bg-red-600 hover:text-white"
                    >
                      <RxCross2 className="text-lg" />
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MySelectedClass;
