import { useContext, useState } from "react";
import TextField from "@mui/material/TextField";
import bg from "../../../assets/music-sheet-bg.jpg";
import Divider from "@mui/material/Divider";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialLogin from "../../../Shared/SocialLogin/SocialLogin";
import { AuthContext } from "../../../Providers/AuthProvider";
import { FaRegUser } from "react-icons/fa";
import {AiFillEye, AiFillEyeInvisible} from 'react-icons/ai';

const Login = () => {
  const [seePassword, setSeePassword] = useState(false);
  const { LogIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation;
  const from = location?.state?.from?.pathname || "/";

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
    LogIn(data.email, data.password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        Swal.fire("Good job!", "You are successfully logged in!!", "success");
        reset();
        navigate(from, { replace: true });
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

  return (
    <>
      <Helmet>
        <title>Chorus Camp | Log In</title>
      </Helmet>
      <div
        className="hero min-h-screen"
        style={{ backgroundImage: `url('${bg}')`, backgroundSize: "contain" }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="card text-center text-neutral-content">
          <div className="card-body md:w-[700px] shadow-2xl bg-base-200/80 rounded-xl my-5">
            <h2 className="text-3xl text-green-800 text-center font-bold flex items-center justify-center gap-2 mt-3">
              <FaRegUser /> Log In
            </h2>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="md:p-12 w-full grid gap-4"
            >
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
              <div className="form-control">
                <span className="flex items-center gap-1">
                  <TextField
                    required
                    type={seePassword? 'text' : 'password'}
                    label="Password"
                    className="w-full"
                    {...register("password", {
                      required: true,
                      minLength: 6,
                      maxLength: 20,
                      pattern:
                        /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                    })}
                  />
                  <button onClick={()=>setSeePassword(!seePassword)} className="btn btn-circle btn-ghost text-2xl text-green-800">{
                    seePassword? <AiFillEye /> : <AiFillEyeInvisible />
                  }</button>
                </span>
                {errors.password && (
                  <span className="text-red-600 font-thin text-sm">
                    Please carefully fill this field out!
                  </span>
                )}
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary">
                  Login
                </button>
              </div>
            </form>
            <Divider textAlign="left" className="text-red-500">
              O R
            </Divider>
            <SocialLogin></SocialLogin>
            <div>
              <p className="text-slate-500">
                Don't have an account?{" "}
                <Link to="/register" className="font-semibold">
                  Sign Up here!
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
