import React, { useState } from "react";
import { responseCode } from "../../constants";
import nested from "../../assets/icons/nested.svg";

export const ResponseBody = ({selectedResponseCode,setSelectedResponseCode}) => {
  const [showNestedTagResponse, setShowNextedTagResponse] = useState(false);
  const [showNested, setShowNexted] = useState(false);

 
  return (
    <div>
      <div>
        <ul className=" my-3 inline-flex bg-[#f1f5f9] text-[#64748b] px-3 py-1 rounded-md text-[14px] font-medium">
          {responseCode?.map((item, index) => (
            <li
              onClick={() => setSelectedResponseCode(item)}
              key={index}
              className={`${
                selectedResponseCode === item
                  ? " text-[#020817] rounded-md bg-white border-2 px-3"
                  : ""
              } mx-3 cursor-pointer   `}
            >
              {item}
            </li>
          ))}
        </ul>
        {selectedResponseCode === "200" ? (
          <>
            <div className=" bg-[#F9FAFC]  rounded-lg p-3 border-2 w-full">
              <ul className=" text-[12px] ">
                <li className=" border-b-2 py-2">name string</li>
                <li className=" border-b-2 py-2">
                  <span className=" ">photoUrls</span>
                  <span className=" ml-2 text-[#727272]">string[]</span>
                </li>
                <li className=" border-b-2 py-4">
                  <span>id</span>
                  <span className=" mx-2 text-[#727272]">integer</span>
                  <span className="  font-medium px-[10px] text-[10px] py-1 border-2 border-[#DADADA]  ml-3 rounded-lg">
                    Optional
                  </span>{" "}
                </li>
                <li className=" border-b-2 py-2">
                  <div>
                    <div>
                      <span>Category</span>
                      <span className=" ml-2 text-[#727272]">object[]</span>
                      <span className=" font-medium text-[10px] px-[10px] py-1 border-2 border-[#DADADA]  ml-3 rounded-lg">
                        Optional
                      </span>
                    </div>
                    <div
                      onClick={() => setShowNexted((prev) => !prev)}
                      className=" inline-flex  text-[10px] items-center cursor-pointer my-4 border-2 border-[#DADADA] rounded-lg p-2 bg-white "
                    >
                      <img className=" size-4" src={nested} alt="nested" />
                      <span className=" ml-2">
                        {showNested ? "Hide " : "Show "}
                        nested properties
                      </span>
                    </div>
                    {showNested && (
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
                            <span className="   text-black px-[10px] py-1 font-medium     text-[10px] border-2 border-[#DADADA]  ml-3 rounded-lg">
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
                    <span className=" px-[10px] font-medium text-[12px] py-1 border-2 border-[#DADADA]  ml-3 rounded-lg">
                      Optional
                    </span>
                  </div>
                  <div>
                    <span className=" text-[#363636]">
                      pet status in the store
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </>
        ) : (
          <>
            <div className=" bg-[#F9FAFC]  rounded-lg p-3 border-2 w-full">
              <span className=" text-sm italic">No response Specified</span>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
