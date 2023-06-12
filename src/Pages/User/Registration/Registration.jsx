import React, { useContext, useState } from "react";
import TextField from "@mui/material/TextField";
import bg from "../../../assets/music-sheet-bg.jpg";
import { TiTick } from "react-icons/ti";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";
import { FaGoogle } from "react-icons/fa";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../Providers/AuthProvider";
import Swal from 'sweetalert2'
import { useLocation, useNavigate } from "react-router-dom";
import SocialLogin from "../../../Shared/SocialLogin/SocialLogin";

const Registration = () => {
  const gender = [
    {
      value: "0",
      label: "Male",
    },
    {
      value: "1",
      label: "Female",
    },
    {
      value: "2",
      label: "Other",
    },
    {
      value: "3",
      label: "Prefer not to say",
    },
  ];
  const [passMatch, setPassMatch] = useState(false);

  const { createUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation;
  const from = location?.state?.from?.pathname || '/';


  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmit = (data) => {
    // console.log(data);
    if(data.password !== data.confirmPassword) {
      return Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Password didn't match!",
      });
    }
    createUser(data.email, data.password)
    .then(result=>{
        const loggedUser = result.user;
        console.log(loggedUser)
        Swal.fire(
            'Good job!',
            'You are successfully logged in!!',
            'success'
          )
          reset();
          navigate(from, {replace: true});

        updateUserProfile(data.name, data.photo)
    })
    .catch(error=>{
        console.log(error)
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: `${error.message}`,
          });
    })
  };

  const password = watch("password", "");
  const confirmPassword = watch("confirmPassword", "");

  const handlePasswordMatch = () => {
    setPassMatch(password === confirmPassword);
  };

  return (
    <>
      <Helmet>
        <title>Chorus Camp | Sign Up</title>
      </Helmet>
      <div
        className="hero min-h-screen"
        style={{ backgroundImage: `url('${bg}')`, backgroundSize: "contain" }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="card text-center text-neutral-content">
          <div className="card-body md:w-[700px] shadow-2xl bg-base-200/80 rounded-xl my-5">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="p-12 w-full grid gap-4"
            >
              <div className="form-control">
                <TextField
                  type="text"
                  required
                  label="Full Name"
                  {...register("name", { required: true })}
                />
                {errors.name && (
                  <span className="text-red-600 font-thin text-sm">
                    Please carefully fill this field out!
                  </span>
                )}
              </div>
              <div className="form-control">
                <TextField
                  type="email"
                  required
                  label="Email"
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <span className="text-red-600 font-thin text-sm">
                    Please carefully fill this field out!
                  </span>
                )}
              </div>
              <div className="form-control flex-row gap-2 justify-between items-center">
                <TextField
                  required
                  type="password"
                  label="Password"
                  className="w-full"
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    maxLength: 20,
                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                  })}
                  onChange={handlePasswordMatch}
                />
                <TextField
                  required
                  type="password"
                  label="Confirm Password"
                  className="w-full"
                  {...register("confirmPassword", { required: true })}
                  onChange={handlePasswordMatch}
                />
                <TiTick
                  className={`text-5xl ${
                    passMatch ? "text-green-600" : "text-red-600"
                  }`}
                />
              </div>
              {errors.password && (
                <span className="text-red-600 font-thin text-sm">
                  Make sure to include at least one Capital, one small, one
                  special and one number in your password!
                </span>
              )}
              <div className="form-control">
                <TextField
                  type="link"
                  required
                  label="Photo URL"
                  {...register("photo", { required: true })}
                />
                {errors.photo && (
                  <span className="text-red-600 font-thin text-sm">
                    Please carefully fill this field out!
                  </span>
                )}
              </div>
              <div className="form-control flex-row gap-2">
                <TextField
                  id="outlined-select-currency"
                  select
                  label="Gender"
                  defaultValue=""
                  className="w-full"
                  {...register("gender", { required: true })}
                >
                  {gender.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
                <TextField
                  required
                  type="number"
                  label="Phone Number"
                  className="w-full"
                  {...register("number", { required: true })}
                />
              </div>
              {errors.gender && (
                <span className="text-red-600 font-thin text-sm">
                  Please carefully fill this field out!
                </span>
              )}
              {errors.number && (
                <span className="text-red-600 font-thin text-sm">
                  Please carefully fill this field out!
                </span>
              )}
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary">
                  Register
                </button>
              </div>
            </form>
              <Divider textAlign="left" className="text-red-500">
                O R
              </Divider>
              <SocialLogin></SocialLogin>
          </div>
        </div>
      </div>
    </>
  );
};

export default Registration;
