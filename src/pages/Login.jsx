import React from "react";
import { useForm } from "react-hook-form";
import { loginFunction } from "../apiLayer/index";
import { useNavigate } from "react-router";
import { FaRegUser } from "react-icons/fa";
import { CiLock } from "react-icons/ci";
import { Link } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    loginFunction(data).then(() => {
      navigate("/");
    });
  };
  console.log(watch());
  return (
    <>
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <form
          className="bg-white p-6 rounded-md shadow-md w-full max-w-sm"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-gray-700 font-bold mb-2 "
            >
              <FaRegUser className="inline-block mr-1" />
              Username:
            </label>
            <input
              id="username"
              type="text"
              {...register("username")}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#e5e7eb]"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-gray-700 font-bold mb-2"
            >
              <CiLock className="inline-block mr-1" />
              Password:
            </label>
            <input
              id="password"
              type="password"
              {...register("password")}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#e5e7eb]"
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="w-[20%] p-2 bg-[#8e0413] text-white rounded-md hover:bg-[#cb0b0a] focus:outline-none focus:ring-2 focus:ring-[#8e0413] font-bold"
            >
              Login
            </button>
          </div>
          <div className="mt-2 text-center">
            <span>
              Not registered yet?{" "}
              <Link to="/signup" className="hover:text-[#cb0b0a]">
                Sign Up
              </Link>
            </span>
          </div>
        </form>
      </div>
    </>
  );
}

export default Login;
