import React, { useContext, useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../Providers/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


const SocialLogin = () => {
  const { googleSignIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation;
  const from = location?.state?.from?.pathname || "/";

  const handleGoogleSignin = () => {
    // console.log('clicked')
    googleSignIn()
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);

        const saveUser = { name: loggedUser.name, email: loggedUser.email, role: "" };
        fetch(`https://summer-camp-school-server-production.up.railway.app/users`, {
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
              Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'You are successfully logged in!',
                showConfirmButton: false,
                timer: 1500
              })
              navigate(from);
            }
          });
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `${error.message}`,
        });
      });
  };

  return (
    <div className="w-full text-center">
      <p className="text-green-800 font-thin">Sign in with:</p>
      <button
        onClick={handleGoogleSignin}
        type="submit"
        className="btn btn-circle mt-4"
      >
        <FaGoogle className="text-3xl text-green-800" />
      </button>
    </div>
  );
};

export default SocialLogin;
