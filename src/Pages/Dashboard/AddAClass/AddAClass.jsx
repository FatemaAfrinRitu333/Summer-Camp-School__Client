import React, { useContext } from "react";
import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../Shared/SectionTitle/SectionTitle";
import TextField from "@mui/material/TextField";
import { AuthContext } from "../../../Providers/AuthProvider";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const AddAClass = () => {
  const { user } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
        fetch("https://summer-camp-school-server-production.up.railway.app/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.insertedId) {
              reset();
              Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: `Class has been added!`,
                showConfirmButton: false,
                timer: 3000
              })
            }
          });
  };


  return (
    <div className="w-full mx-auto mb-12">
      <Helmet>
        <title>Instructor Dashboard || Add A Class</title>
      </Helmet>
      <SectionTitle
        heading={"Add a Class"}
        subHeading={"want to start a new class?"}
      ></SectionTitle>
      <div className="w-11/12 mx-auto">
        <div className="card w-full shadow-2xl bg-slate-100 md:p-10">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body gap-5">
            <div className="form-control md:flex-row items-center gap-8">
              <TextField
                disabled
                className="w-full"
                InputProps={{
                  readOnly: true,
                }}
                defaultValue={user?.displayName}
                label="Name"
                variant="standard"
                {...register("name")}
              />
              <TextField
                disabled
                InputProps={{
                  readOnly: true,
                }}
                defaultValue={user?.email}
                className="w-full"
                label="Email"
                variant="standard"
                {...register("email")}
              />
            </div>
            <div className="form-control">
              <TextField
                className="w-full"
                label="Class Name"
                variant="standard"
                {...register("title", { required: true })}
              />
            </div>
            <div className="form-control">
              <TextField
                className="w-full"
                label="Class Image URL"
                variant="standard"
                {...register("photo", { required: true })}
              />
            </div>
            <div className="form-control flex-row items-center gap-8">
              <TextField
                className="w-full"
                label="Available Seat"
                variant="standard"
                {...register("availableSeats", { required: true })}
              />
              <TextField
                className="w-full"
                label="$ Price"
                variant="standard"
                {...register("cost", { required: true })}
              />
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddAClass;
