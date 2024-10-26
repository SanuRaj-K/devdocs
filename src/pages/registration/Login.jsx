import React, { useState } from "react";
import RightImage from "../../assets/images/registration/computer.svg";
import Eyeicon from "../../assets/icons/eye.svg";
import hideEye from "../../assets/icons/hide.png";
import rightArrow from "../../assets/icons/right-arrow.svg";
import { Link } from "react-router-dom";
export const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div>
      <section className=" font-sora lg:font-rubik">
        <div className=" flex flex-col lg:flex-row min-h-screen  lg:fb    items-center">
          <div className="px-10 lg:py-16 py-3  flex md:justify-center lg:justify-normal lg:h-screen    w-full lg:w-1/2 bg-[#EBF5FF] ">
            <img
              className=" w-[570px]   p-5 lg:p-10 xl:h-full xl:w-full my-auto  lg:h-[500px]"
              src={RightImage}
              alt="computer"
            />
          </div>
          <div className="px-10 py-7 lg:py-16  w-full lg:w-1/2">
            <div className=" lg:h-[500px]  ">
              <h1 className=" text-[20px] lg:text-[32px] font-semibold text-center">
                Login
              </h1>
              <form className=" mt-5 lg:mt-10 lg:px-20" action="">
                <div className=" flex flex-col">
                  <label
                    className=" text-[16px] lg:text-[22px] mb-2 font-medium"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    className=" border-2 px-3 outline-none rounded-sm h-[40px] border-[#BAE4FF] bg-[#F4F9FC]"
                    type="text"
                    required
                    name="email"
                    placeholder="Enter your email"
                    id="email"
                  />
                </div>
                <div className=" pt-5 flex flex-col">
                  <label
                    className=" text-[16px] lg:text-[22px] mb-2 font-medium"
                    htmlFor="password"
                  >
                    Password
                  </label>
                  <div className="flex relative w-full">
                    <input
                      placeholder="Enter your password"
                      className="border-2 px-3 w-full outline-none rounded-sm h-[40px] border-[#BAE4FF] bg-[#F4F9FC] pr-10"
                      type={showPassword ? "text" : "password"}
                      name="password"
                      required
                      id="password"
                    />
                    <img
                      onClick={() => setShowPassword((prev) => !prev)}
                      className="absolute  size-4 lg:size-6 right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
                      src={showPassword ? hideEye : Eyeicon}
                      alt="eye"
                    />
                  </div>
                </div>
                <div className=" flex items-center mt-3">
                  <input
                    className="  size-3 bg-black"
                    type="checkbox"
                    name="remember"
                    id="remember"
                  />
                  <span
                    id="remember"
                    className="  text-[10px] lg:text-[16px] font-semibold text-[#232321] ml-1 lg:ml-2"
                  >
                    Remember me
                  </span>
                </div>
                <div className=" hidden lg:block bg-[#3399FF] group rounded-md mt-7 mb-5 text-white">
                  <Link to={"/projects"}>
                    <button className=" flex  items-center content-center justify-center w-full py-2 ">
                      <span className=" font-medium text-[14px]">
                        Email login
                      </span>
                      <img
                        className=" group-hover:transform group-hover:translate-x-2 transition-all duration-100 size-4  ml-2"
                        src={rightArrow}
                        alt="icon"
                      />
                    </button>
                  </Link>
                </div>
                <div className=" lg:hidden bg-[#3399FF] group rounded-md mt-7 mb-5 text-white">
                  <button className=" flex  items-center content-center justify-center w-full py-2 ">
                    <span className=" font-medium text-[14px]">login</span>
                  </button>
                </div>
              </form>
              <div className=" text-center text-[14px] lg:text-[16px]">
                <span>Don't have account?</span>
                <span className=" font-semibold ml-2 cursor-pointer">
                  Request
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
