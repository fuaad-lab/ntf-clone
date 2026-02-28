import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { auth } from "../lib/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import useAuth from "../context/AuthContext";


const Loging = () => {
  const {login} = useAuth();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async(data) =>{
    try {
      const { email, password } = data;
      const userCredentials = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      navigate('/browser')
      login(userCredentials.user)
    } catch (err) {
      console.log(err);
      alert('username or password is incorrect')
    }
  }

  return (
    <div className="relative flex h-screen w-screen flex-col md:items-center md:justify-center">
      <img
        src="./images/misc/home.jpeg"
        alt=""
        className="absolute h-screen w-full object-cover -z-10  opacity-60 sm:inline "
      />
      <Link to="/">
        <img
          src="./images/logo/mainlogo.svg"
          alt=""
          className="absolute top-0 left-2 w-[100px] md:w-[150px] object-contain"
        />
      </Link>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="relative mt-24 space-y-8 rounded bg-black/70 py-10 px-6 md:mt-0 md:max-w-md md:px-14"
      >
        <h1 className="text-white text-2xl font-semibold">Sing In</h1>
        <label className="inline-block w-full">
          <input
            {...register("email", { required: true })}
            type="email"
            className="form-control"
          />
          {errors.email && (
            <p className="pt-2 text-sm text-orange-500">
              This field is required
            </p>
          )}
        </label>
        <label className="inline-block w-full">
          <input
            {...register("password", { required: true })}
            type="password"
            className="form-control"
          />
          {errors.password && (
            <p className="pt-2 text-sm text-orange-500">
              This field is required
            </p>
          )}
        </label>
        <button className="btn"> Sign In</button>
        <div className="my-4 flex flex-row space-x-2">
          <p className="text-lg text-[#8d8d8d]">New to Netflex?</p>
          <Link className="hover:underline" to="/signup">
            Signup now
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Loging;
