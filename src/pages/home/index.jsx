import React, { useEffect, useState } from "react";
import Logo from "../../assets/icons/logo.svg";
import search from "../../assets/icons/search.svg";
import account from "../../assets/icons/account.svg";
import dots from "../../assets/icons/3dot.svg";
import { apiSections } from "../../constants";
import { Accordioncomp } from "../../components/accordion";
  import TemporaryDrawer from "../../components/drawer";
 import { TestRun } from "../../components/run-test";
import { CodeBlock } from "../../components/code-block";
import { RequestBody } from "../../components/request-body";
import { ResponseBody } from "../../components/response-body";
export const Home = () => {
  const [toggleRun, setToggleRun] = useState(false);
   const [copyText, setCopyText] = useState(false);
  const [selectedResponseCode, setSelectedResponseCode] = useState("200");
   const [selectedTitle, setSelectedTitle] = useState("");

  const handleTitleSelect = (title) => {
    setSelectedTitle(title);
  };

  useEffect(() => {
    if (toggleRun) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [toggleRun]);

  if (copyText) {
    setTimeout(() => {
      setCopyText(false);
    }, 3000);
  }

   
  return (
    <div>
      <header className="  bg-white/20 border-b-2 lg:sticky backdrop-blur-md top-0  z-10 w-full">
        <div className=" fb  items-center p-3  md:p-4">
          <div className=" font-poppins flex items-center">
            <img
              className=" w-[80px] md:w-[120px] cursor-pointer"
              src={Logo}
              alt="logo"
            />
            <div className=" hidden ml-10 w-[350px] h-10 border-2 border-[#9A9A9A] rounded-md sm:flex justify-between items-center">
              <input
                placeholder="search anything  "
                className=" ml-2  outline-none"
                type="text"
                name=""
                id=""
              />
              <img className="  size-8 p-1 mr-1" src={search} alt="search" />
            </div>
          </div>
          <div>
            <img className=" size-5 md:size-10" src={account} alt="" />
          </div>
        </div>
      </header>
      <section className="sticky    top-0 z-30">
        <div className="my-5  w-full backdrop-blur-2xl  py-2 bg-black/10  xl:hidden">
          <TemporaryDrawer />
        </div>
      </section>
      <div className=" relative px-7">
        <section className=" font-poppins ">
          <div className="fb items-center">
            <h1 className=" font-bold text-[20px] md:text-[30px] xl:text-[36px] capitalize">
              swagger pet store
            </h1>
            <img
              className=" hidden md:block cursor-pointer"
              src={dots}
              alt="dots"
            />
          </div>
          <div>
            <p className=" mt-4 md:my-5  text-[12px] md:text-[14px] lg:text-[16px] leading-[24px] ">
              This is a sample Pet Store Server based on the OpenAPI 3.0
              specification. You can find out more about Swagger at{" "}
              <a
                href=" http://swagger.io"
                className=" md:text-[14px] text-[12px] font-medium underline"
              >
                {" "}
                http://swagger.io.
              </a>{" "}
              In the third iteration of the pet store, we've switched to the
              design first approach! You can now help us improve the API whether
              it's by making changes to the definition itself or to the code.
              That way, with time, we can improve the API in general, and expose
              some of the new features in OAS3.
            </p>
          </div>
        </section>
        <section className="    py-5 md:py-10">
          <div className=" flex     justify-between">
            <div className="hidden   xl:block md:w-1/4  bg-white">
              {" "}
              <ul>
                {apiSections?.map((item, index) => (
                  <li key={index}>
                    <Accordioncomp
                      title={item.title}
                      onSelectTitle={handleTitleSelect}
                      method={item.methods}
                    />
                  </li>
                ))}
              </ul>
            </div>

            <div className="   md:px-10 w-full xl:w-3/4">
              <div>
                <h1 className=" text-[22px]    md:text-[24px]  font-bold">
                  {selectedTitle ? selectedTitle : "Update an existing pet"}
                </h1>
                <span className=" text-[14px] md:text-[16px]">
                  Update an existing pet by Id
                </span>
              </div>
              {/* Request body */}
              <h2 className=" text-[20px] mt-5 font-semibold"> Request Body</h2>
              <div className="font-inter border-b-2   border-[#A7A7A7]  mt-5 pb-10 md:mt-5 flex-col md:flex-row flex md:justify-between w-full">
                <div className="w-full md:w-3/5  overflow-y-auto text-[10px]   ">
                  <RequestBody />

                  <div className=" my-10">
                    <hr />
                  </div>

                  {/* Responses */}
                  <div>
                    <h1 className=" text-[20px] font-bold text-[#020817]">
                      Responses
                    </h1>
                    <ResponseBody
                      selectedResponseCode={selectedResponseCode}
                      setSelectedResponseCode={setSelectedResponseCode}
                    />
                  </div>
                </div>
                <div className=" w-full md:w-2/5 mt-10 md:mt-0 md:ml-10 flex md:flex-col flex-col-reverse ">
                  {/* test code block */}
                  <div>
                    <CodeBlock
                      id={false}
                      setToggleRun={setToggleRun}
                      item={"1"}
                    />
                  </div>
                  {/* Request body examples */}
                  <div className=" my-5">
                    <CodeBlock id={false} item={'2'} title={"Request body example"} />
                  </div>
                  {/* examples response */}
                  <div>
                    <div className=" my-5">
                      <CodeBlock
                        selectedResponseCode={selectedResponseCode}
                        setSelectedResponseCode={setSelectedResponseCode}
                        id={true}
                        title={"Example Responses"}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="">
          {toggleRun && (
            <div className="fixed inset-0 z-20 flex items-center justify-center bg-black bg-opacity-65">
              <div className="w-full  mx-3 lg:w-[80%] relative bg-[#f8f7fc] rounded-md">
                <TestRun setToggleRun={setToggleRun} />
              </div>
            </div>
          )}
        </section>
      </div>
    </div>
  );
};
