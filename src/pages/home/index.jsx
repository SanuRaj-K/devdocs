import React, { useEffect, useState } from "react";
import Logo from "../../assets/icons/logo.svg";
import search from "../../assets/icons/search.svg";
import account from "../../assets/icons/account.svg";
import dots from "../../assets/icons/3dot.svg";
import { apiSections, jsonData } from "../../constants";
import { Accordioncomp } from "../../components/accordion";
import nested from "../../assets/icons/nested.svg";
import play from "../../assets/icons/play.svg";
import select from "../../assets/icons/select.svg";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import DoneIcon from "@mui/icons-material/Done";
import TemporaryDrawer from "../../components/drawer";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coy } from "react-syntax-highlighter/dist/esm/styles/prism";
import { TestRun } from "../../components/run-test";
import { Details } from "../../components/details";
export const Home = () => {
  const [toggleRun, setToggleRun] = useState(false);
  const [copyText, setCopyText] = useState(false);
  const [showNested, setShowNexted] = useState(false);
  const [selectedTitle, setSelectedTitle] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("C#");

  const languages = [
    "cURL",
    "Javascript",
    "Python",
    "Java",
    "Go",
    "C#",
    "Kotlin",
    "Objective C",
    "PHP",
    "Ruby",
    "Swift",
  ];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleTitleSelect = (title) => {
    setSelectedTitle(title);
  };
  const handleLanguageSelect = (language) => {
    setSelectedLanguage(language);
    setIsOpen(false);
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

  const handleCopy = () => {
    navigator.clipboard.writeText(JSON.stringify(jsonData)).then(() => {
      setCopyText(true);
    });
  };
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
        <div className="my-5  w-full backdrop-blur-2xl  py-2 bg-black/10  lg:hidden">
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
            <div className=" w-full">
              <Details  selectedTitle={selectedTitle} />
              <Details />
              <Details />
              <Details />
              <Details />
              <Details />
              <Details />
              <Details />
              <Details />
              <Details />
            </div>

            {/* <div className="   md:px-10 w-full xl:w-3/4">
              <div>
                <h1 className=" text-[22px]    md:text-[24px]  font-bold">
                  {selectedTitle ? selectedTitle : "update an existing pet"}
                </h1>
                <span className=" text-[14px] md:text-[16px]">
                  Update an existing pet by Id
                </span>
              </div>
              <h2 className=" text-[20px] mt-5 font-semibold"> Request Body</h2>
              <div className="font-inter border-b-2   border-[#A7A7A7]  mt-5 pb-10 md:mt-5 flex-col md:flex-row flex md:justify-between w-full">
                <div className="w-full lg:w-2/3 rounded-lg p-3 border-2 bg-[#F9FAFC] overflow-y-auto   ">
                  <ul className=" text-[14px] ">
                    <li className=" border-b-2 py-2">name string</li>
                    <li className=" border-b-2 py-2">
                      <span className=" ">photoUrls</span>
                      <span className=" ml-2 text-[#727272]">string[]</span>
                    </li>
                    <li className=" border-b-2 py-2">
                      <span>id</span>
                      <span className=" mx-2 text-[#727272]">integer</span>
                      <span className="  font-medium px-[10px] text-[12px] py-1 border-2 border-[#DADADA]  ml-3 rounded-lg">
                        Optional
                      </span>{" "}
                    </li>
                    <li className=" border-b-2 py-2">
                      <div>
                        <div>
                          <span>Category</span>
                          <span className=" ml-2 text-[#727272]">object[]</span>
                          <span className=" font-medium text-[12px] px-[10px] py-1 border-2 border-[#DADADA]  ml-3 rounded-lg">
                            Optional
                          </span>
                        </div>
                        <div
                          onClick={() => setShowNexted((prev) => !prev)}
                          className=" inline-flex  items-center cursor-pointer my-4 border-2 border-[#DADADA] rounded-lg p-2 bg-white "
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
                              <span className=" text-[#727272] px-3">
                                integer
                              </span>
                              <span className=" px-[10px]  font-medium text-[12px] py-1 border-2 border-[#DADADA]  ml-3 rounded-lg">
                                Optional
                              </span>
                            </div>
                            <div>
                              <div className="  border-b-2 p-3 rounded-md ">
                                <span>id</span>
                                <span className=" text-[#727272] px-3">
                                  string
                                </span>
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
                <div className="w-full xl:w-1/3 mt-10 md:mt-0 md:ml-10 bg-[#F4F4F5] p-3 rounded-lg border-2 flex flex-col justify-between ">
                  <div>
                    <div className="border-b-2 border-[#DDDDDD] pb-3 fb items-center">
                      <div>
                        <span className="text-[#FACC15]">PUT</span>
                        <span>/pet</span>
                      </div>
                      <div
                        onClick={() => setToggleRun(true)}
                        className="flex items-center cursor-pointer bg-[#4E80ED] rounded-md px-2 py-1"
                      >
                        <span className="text-white font-medium text-[12px]">
                          Test
                        </span>
                        <img className="ml-2 size-2" src={play} alt="icon" />
                      </div>
                    </div>
                    <div className="pb-3 group relative mt-3">
                      <div
                        onClick={handleCopy}
                        className=" absolute  group-hover:block cursor-pointer  right-0 z-20  hidden top-0 mr-2 size-1 "
                      >
                        {copyText ? <DoneIcon /> : <ContentCopyIcon />}
                      </div>

                      <p className="text-[12px]">
                        <SyntaxHighlighter language="json" style={coy}>
                          {JSON.stringify(jsonData, null, 2)}
                        </SyntaxHighlighter>
                      </p>
                    </div>
                  </div>

                  <div className="flex relative border-t-2 pt-3 text-[12px]   border-[#DDDDDD]  mt-10 items-center justify-end">
                    <span className="mr-5">show example in</span>
                    <img
                      className="  absolute  right-0 z-10 "
                      src={select}
                      alt="select"
                    />

                    <select className=" px-3 rounded-md  appearance-none h-[30px] ">
                      {languages.map((language, index) => (
                        <option key={index} className=" " value={language}>
                          {language}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            </div> */}
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
