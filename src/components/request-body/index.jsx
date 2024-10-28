import React, { useState } from "react";
import nested from "../../assets/icons/nested.svg";

export const RequestBody = () => {
  const [showNestedTagResponse, setShowNextedTagResponse] = useState(false);
  const [showNested, setShowNexted] = useState(false);

  return (
    <div>
      <div className=" bg-[#F9FAFC]  rounded-lg p-3 border-2 w-full">
        <ul className=" text-[14px] ">
          <li className=" border-b-2 py-2">name string</li>
          <li className=" border-b-2 py-2">
            <span className=" ">photoUrls</span>
            <span className=" ml-2 text-[#727272]">string[]</span>
          </li>
          <li className=" border-b-2 py-2">
            <span>id</span>
            <span className=" mx-2 text-[#727272]">integer</span>
            <span className="  font-medium px-[10px]  text-[10px] py-1 border-2 border-[#DADADA]  ml-3 rounded-lg">
              Optional
            </span>{" "}
          </li>
          <li className=" border-b-2 py-2">
            <div>
              <div>
                <span>Category</span>
                <span className=" ml-2 text-[#727272]">object[]</span>
                <span className=" font-medium  text-[10px] px-[10px] py-1 border-2 border-[#DADADA]  ml-3 rounded-lg">
                  Optional
                </span>
              </div>
              <div
                onClick={() => setShowNexted((prev) => !prev)}
                className=" inline-flex  items-center cursor-pointer text-[10px] my-4 border-2 border-[#DADADA] rounded-lg p-2 bg-white "
              >
                <img className=" size-4" src={nested} alt="nested" />
                <span className=" ml-2">
                  {showNested ? "Hide" : "Show"} nested properties
                </span>
              </div>
              {showNested && (
                <div className=" border-2 rounded-lg p-2">
                  <div className="  border-b-2 p-3 rounded-md ">
                    <span>id</span>
                    <span className=" text-[#727272] px-3">integer</span>
                    <span className=" px-[10px]  font-medium  text-[10px] py-1 border-2 border-[#DADADA]  ml-3 rounded-lg">
                      Optional
                    </span>
                  </div>
                  <div>
                    <div className="  border-b-2 p-3 rounded-md ">
                      <span>id</span>
                      <span className=" text-[#727272] px-3">string</span>
                      <span className="   text-black px-[10px] py-1 font-medium      text-[10px] border-2 border-[#DADADA]  ml-3 rounded-lg">
                        Optional
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </li>
          <li className=" border-b-2 py-2">
            <div>
              <div>
                <span>Tags</span>
                <span className=" ml-2 text-[#727272]">object[]</span>
                <span className=" font-medium text-[10px] px-[10px] py-1 border-2 border-[#DADADA]  ml-3 rounded-lg">
                  Optional
                </span>
              </div>
              <div
                onClick={() => setShowNextedTagResponse((prev) => !prev)}
                className=" inline-flex text-[10px]  items-center cursor-pointer my-4 border-2 border-[#DADADA] rounded-lg p-2 bg-white "
              >
                <img className=" size-4" src={nested} alt="nested" />
                <span className=" ml-2">
                  {showNestedTagResponse ? "Hide " : "Show "}
                  nested properties
                </span>
              </div>
              {showNestedTagResponse && (
                <div className=" border-2 rounded-lg p-2">
                  <div className="  border-b-2 p-3 rounded-md ">
                    <span>id</span>
                    <span className=" text-[#727272] px-3">integer</span>
                    <span className=" px-[10px]  font-medium text-[10px] py-1 border-2 border-[#DADADA]  ml-3 rounded-lg">
                      Optional
                    </span>
                  </div>
                  <div>
                    <div className="  border-b-2 p-3 rounded-md ">
                      <span>id</span>
                      <span className=" text-[#727272] px-3">string</span>
                      <span className="   text-black px-[10px] py-1 font-medium     text-[12px] border-2 border-[#DADADA]  ml-3 rounded-lg">
                        Optional
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </li>
          <li className="   mb-5">
            <div className=" my-2">
              <span>status</span>
              <span className=" ml-2 text-[#727272]">string</span>
              <span className=" px-[10px] font-medium text-[10px] py-1 border-2 border-[#DADADA]  ml-3 rounded-lg">
                Optional
              </span>
            </div>
            <div>
              <span className=" text-[#363636]">pet status in the store</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};
