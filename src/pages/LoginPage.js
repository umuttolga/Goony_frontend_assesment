import React from "react";
import goonyLogo from "../assests/goony-1.png";
import { useForm } from "react-hook-form";
import Card from "../layout/Card";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const {
    register,
    resetField,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    resetField("username");
    resetField("password");
  };
  

  return (
    <Card bgColor="bg-green-600">
      <div className="mt-[15%]">
        <h2 className="text-5xl font-bold tracking-widest">Goony</h2>
      </div>
      <div className="flex justify-center">
        <img src={goonyLogo} alt="Goony Logo" />
      </div>
      <div>
        <h3 className="text-2xl font-bold">Login</h3>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="text-black space-y-10 m-2  "
        >
          <input
            {...register("username", { required: true })}
            className="focus:outline-none p-1 mb-2 shadow-slate-600 shadow-lg w-full h-[2rem] rounded-lg placeholder:text-center"
            placeholder="User Name"
            type="text"
          />
          {errors.username && (
            <span className=" text-[#F18F01]">This field is required!</span>
          )}
          <div className="">
            <input
              {...register("password", { required: true })}
              className="mb-2 p-1 focus:outline-none w-full h-[2rem] rounded-lg shadow-slate-600 shadow-lg placeholder:text-center"
              placeholder="Password"
              type="password"
            />
            {errors.password && (
              <span className=" text-[#F18F01]">This field is required!</span>
            )}
            <p className="hover:cursor-pointer hover:text-orange-600 mt-4 italic text-slate-300">
              Forgot Password?
            </p>
          </div>
          <button
            type="submit"
            className={` hover:bg-slate-700 hover:text-white tracking-wider text-2xl border-2 font-bold shadow-slate-700 shadow-2xl bg-white px-12 py-1 rounded-xl text-slate-500`}
          >
            <Link to="/profile">Login</Link>
          </button>
          <h2 className=" text-white text-xl font-semibold">or</h2>
          <div>
            <Link
              to="/signup"
              className="hover:text-black text-2xl text-white font-bold"
            >
              Sign Up
            </Link>
          </div>
        </form>
      </div>
    </Card>
  );
};

export default LoginPage;
