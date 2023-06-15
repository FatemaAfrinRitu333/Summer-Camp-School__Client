import React, { useContext, useState } from "react";
import TextField from "@mui/material/TextField";
import bg from "../../../assets/music-sheet-bg.jpg";
import { TiTick } from "react-icons/ti";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";
import { FaGoogle, FaSignInAlt } from "react-icons/fa";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../Providers/AuthProvider";
import Swal from "sweetalert2";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialLogin from "../../../Shared/SocialLogin/SocialLogin";
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

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
  const from = location?.state?.from?.pathname || "/";
  const [open, setOpen] = useState(false);
    const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
  
      setOpen(false);
    };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    // console.log(data);
    if (data.password !== data.confirmPassword) {
      return Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Password didn't match!",
      });
    }

    createUser(data.email, data.password)
      .then((result) => {
        const loggedUser = result.user;
        loggedUser.displayName = data.name;
        loggedUser.photoURL = data.photo;
        // console.log(loggedUser);
        const saveUser = {
          name: loggedUser.displayName,
          email: loggedUser.email,
          role: "",
        };
        fetch("http://localhost:5000/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(saveUser),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.insertedId) {
              reset();
              <Snackbar
                open={open}
                autoHideDuration={4000}
                onClose={handleClose}
              >
                <Alert
                  onClose={handleClose}
                  severity="success"
                  sx={{ width: "100%" }}
                >
                  This is a success message!
                </Alert>
              </Snackbar>
              navigate(from, {replace: true})
            }
          });
      })
      .catch((error) => {
        console.log(error);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `${error.message}`,
        });
      });
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
            <h2 className="text-3xl text-green-800 text-center font-bold flex items-center justify-center gap-2 mt-3">
              <FaSignInAlt /> Register
            </h2>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="md:p-12 w-full grid gap-4"
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
                  Make sure to include at least one capital, one small, one
                  special, one number and 6characters in your password!
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
            <div>
              <p className="text-slate-500">
                Already have an account?{" "}
                <Link to="/login" className="font-semibold">
                  Log In here!
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Registration;
