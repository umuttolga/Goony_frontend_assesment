import React from "react";
import { Link } from "react-router-dom";
import backIcon from "../assests/back_icon.png";
import Card from "../layout/Card";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
// layout fix terms and button!!!
// https://jasonwatmore.com/post/2021/09/15/react-hook-form-password-and-confirm-password-match-validation-example see here to validate matching password!!!

const SignUpPage = (props) => {
  const validationSchema = Yup.object().shape({
    gender: Yup.string().required("This field is required"),
    accepTerms: Yup.bool().oneOf(
      [true],
      "Accept terms and conditions are required"
    ),
    firstName: Yup.string().required("Please enter your name"),
    lastName: Yup.string().required(""),
    userEmail: Yup.string().required("Email is required"),
    userAge: Yup.date().required("Age is required"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters"),
    confirmPassword: Yup.string()
      .required("Confirm Password is required")
      .oneOf([Yup.ref("password")], "Passwords must match"),
  });
  const formOptions = { resolver: yupResolver(validationSchema) };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm(formOptions);
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <Card bgColor="text-xl  bg-gray-700 ">
      <Link to="/">
        <img src={backIcon} alt="back" />
      </Link>
      <div>
        <h3 className="text-3xl text-center">Sign Up</h3>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mt-8 text-black focus:outline-none space-y-2"
        >
          <div className="flex justify-start">
            <label className=" text-zinc-400 ">First & Last Name</label>
          </div>
          <div className="mt-2 flex justify-between">
            <input
              {...register("firstName", { required: true })}
              type="text"
              className="p-1 focus:outline-none placeholder:text-center py-1 w-full rounded-md"
              placeholder="First Name"
            />

            <input
              {...register("lastName", { required: true })}
              type="text"
              className="p-1 focus:outline-none placeholder:text-center py-1 w-full ml-2 rounded-md"
              placeholder="Last Name"
            />
          </div>
          <span className="text-[#F18F01] text-sm">
            {errors.firstName?.message}
          </span>
          <div className="flex justify-start">
            <label className=" text-zinc-400 ">Email</label>
          </div>
          <input
            {...register("userEmail", { required: true })}
            type="email"
            className="placeholder:text-center p-1 py-1 w-full rounded-md"
            placeholder="Email"
          />
          {errors.email && (
            <span className="text-[#F18F01] text-sm">
              This field is required!
            </span>
          )}
          <div className="flex justify-start">
            <label className=" text-zinc-400 ">Age</label>
          </div>
          <div className="flex justify-between">
            <input
              {...register("userAge", { required: true })}
              type="date"
              className="p-1 text-center focus:outline-none placeholder:text-center py-1 w-full md:w-10px rounded-md"
              placeholder="Age"
            />
          </div>
          <div className="flex justify-start">
            <label className=" text-zinc-400 ">Gender</label>
          </div>
          <div className="flex justify-between">
            <select className="w-52 text-center rounded-md py-1" {...register("gender")} name="gender" id="gender">
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div className="flex justify-start">
            <label className=" text-zinc-400 ">Password</label>
          </div>
          <div className="space-y-4">
            <input
              {...register("password", { required: true })}
              name="password"
              type="password"
              className="p-1 focus:outline-none placeholder:text-center py-1 w-full rounded-md"
              placeholder="Password"
            />
            <input
              {...register("confirmPassword")}
              name="confirmPassword"
              type="password"
              className=" focus:outline-none placeholder:text-center py-1 w-full rounded-md"
              placeholder="Password"
            />
            <span className="text-[#F18F01] text-sm">
              {errors.userPassword?.message}
            </span>
            <span className="text-[#F18F01] text-sm">
              {errors.confirmPassword?.message}
            </span>
          </div>
          <div className="">
            <div className="text-sm text-white flex justify-evenly md:justify-around ">
              <input
                {...register("accepTerms")}
                className="w-4 "
                type="checkbox"
              />
              <label>
                I accept the{" "}
                <span className="underline">Terms and Conditions.</span>
              </label>
            </div>
          </div>
          <span className="text-[#F18F01] text-sm">
            {errors.accepTerms?.message}
          </span>

          <div className="">
            <button
              className="text-white border-none px-16 rounded-md bg-green-700 mt-12"
              type="submit"
            >
              Create Account
            </button>
          </div>
        </form>
      </div>
    </Card>
  );
};

export default SignUpPage;
