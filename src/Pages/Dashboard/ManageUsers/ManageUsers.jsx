import React from "react";
import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../Shared/SectionTitle/SectionTitle";
import useUsers from "../../../Hooks/useUsers";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const ManageUsers = () => {
  const [users, refetch] = useUsers();

  const handleMakeAdmin = (user) => {
    fetch(`http://localhost:5000/users/admin/${user._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `Admin role assigned to ${user.name}`,
            showConfirmButton: false,
            timer: 1200,
          });
        }
      });
  };

  const handleMakeInstructor = (user) => {
    fetch(`http://localhost:5000/users/instructor/${user._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `Instructor role assigned to ${user.name}`,
            showConfirmButton: false,
            timer: 1200,
          });
        }
      });
  };

  return (
    <div className="w-full mx-auto mb-12">
      <Helmet>
        <title>Admin || Manage Users</title>
      </Helmet>
      <SectionTitle
        heading={"Manage Users"}
        subHeading={"Choose roles for users"}
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
              {users.map((item, index) => (
                <tr key={item._id}>
                  <th>{index + 1}</th>
                  <td>
                        <div className="font-bold">{item?.email}</div>
                  </td>
                  <td className="text-right">{item?.name}</td>
                  <td>
                      <button onClick={() => handleMakeAdmin(item)} className="btn btn-ghost text-primary">
                        Make Admin
                      </button>
                  </td>
                  <th>
                    <button
                      onClick={() => handleMakeInstructor(item)}
                      className="btn btn-circle btn-ghost hover:bg-red-600 hover:text-white"
                    >
                      Make Instructor
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

export default ManageUsers;
