import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import Loading from "../loading";
import TextFields from "../text-field";
import SelectSmall from "../select";

export const TestRun = ({ setToggleRun }) => {
  const [activeButton, setActiveButton] = useState("Headers");
  const [headers, setHeaders] = useState([]);

  const addHeader = () => {
    setHeaders((prev) => [...prev, { id: Date.now() }]);
  };
  const removeHeader = (id) => {
    setHeaders((prev) => prev.filter((header) => header.id !== id));
  };
  const [isLoading, setIsLoading] = useState(false);

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  return (
    <div>
      <section className="      ">
        <div className="  flex  flex-col lg:flex-row  overflow-y-auto  bg-[#f8f7fc] rounded-md h-[500px] z-50">
          <div className=" lg:w-1/2 relative bg-[#f8f7fc]  border-b-2 pb-10 lg:pb-0 lg:border-r-2   border-[#e2e8f0] px-2 md:p-3">
            <div className="">
              <div className=" flex flex-col mt-10 lg:mt-0  lg:flex-row ">
                <div className=" py-1 bg-white w-full lg:w-[85%]  rounded-md  border-2">
                  <span className="bg-[#f1f5f9] pl-2 text-[14px] border-r-2 font-semibold p-2">
                    PUT
                  </span>
                  <span className=" text-[#aaaeb4] pl-2 text-sm">
                    zudoku-petstore-main-c32e252.d2.zuplo.dev
                    <span className=" text-[13px] text-black">/pet</span>
                  </span>
                </div>
                <div
                  onClick={() => setIsLoading(true)}
                  className=" cursor-pointer mt-3  lg:mt-0 lg:ml-5"
                >
                  <div className="bg-[#2563eb] inline  text-sm  font-medium  px-3 py-2 rounded-lg text-white">
                    Send
                  </div>
                </div>
              </div>
              <div className=" text-sm fb m-3">
                <div>
                  <div className="flex items-center rounded-md px-4 py-2 bg-[#f1f5f9] text-[#6a7b90] font-medium">
                    <span
                      className={`cursor-pointer rounded-lg px-2 py-1 ${
                        activeButton === "Headers" ? "bg-white  text-black" : ""
                      }`}
                      onClick={() => handleButtonClick("Headers")}
                    >
                      {`Headers ${
                        headers.length > 0 ? `(${headers.length})` : ""
                      }`}
                    </span>
                    <span
                      className={`cursor-pointer px-2 py-1 ml-2 ${
                        activeButton === "Body"
                          ? "bg-white rounded-md text-black"
                          : ""
                      }`}
                      onClick={() => handleButtonClick("Body")}
                    >
                      Body
                    </span>
                  </div>
                </div>
                <div className="flex items-center ">
                  <span className=" mr-1 text-black">Auth:</span>
                  <SelectSmall />
                </div>
              </div>
            </div>
            <div className=" w-full">
              {activeButton === "Headers" && (
                <div>
                  {headers.map((header) => (
                    <TextFields
                      key={header.id}
                      index={header.id}
                      onRemove={() => removeHeader(header.id)}
                    />
                  ))}
                </div>
              )}

              <div className=" w-full">
                {activeButton === "Headers" ? (
                  <>
                    <div className=" flex justify-end">
                      <div
                        onClick={addHeader}
                        className=" cursor-pointer inline  px-3 py-2 rounded-lg  mt-2  text-[12px] font-semibold text-white bg-[#2563eb]"
                      >
                        Add header
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="  w-full ">
                      <textarea
                        className=" w-full h-[150px]"
                        name=""
                        id=""
                      ></textarea>
                    </div>
                  </>
                )}
              </div>
            </div>
            <div
              onClick={() => setToggleRun(false)}
              className=" lg:hidden absolute right-0   top-0 cursor-pointer"
            >
              <CloseIcon />
            </div>
          </div>
          <div className=" relative p-3 mt-20 lg:mt-0  lg:w-1/2">
            <div
              onClick={() => setToggleRun(false)}
              className=" hidden lg:block absolute right-0 p-3 top-0 cursor-pointer"
            >
              <CloseIcon />
            </div>

            <div className=" flex h-full justify-center items-center content-center my-auto">
              <span className=" text-[#64738b]">
                {isLoading ? (
                  <>
                    <Loading />
                  </>
                ) : (
                  <>
                    <span> Send a request first to see the response here</span>
                  </>
                )}
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
