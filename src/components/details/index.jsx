import React, { useState } from "react";
import nested from "../../assets/icons/nested.svg";
import play from "../../assets/icons/play.svg";
import select from "../../assets/icons/select.svg";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import DoneIcon from "@mui/icons-material/Done";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coy } from "react-syntax-highlighter/dist/esm/styles/prism";
import { jsonData } from "../../constants";

export const Details = ({selectedTitle}) => {
  const [showNested, setShowNexted] = useState(false);
  const [copyText, setCopyText] = useState(false);
//   const [selectedTitle, setSelectedTitle] = useState("");
  const [toggleRun, setToggleRun] = useState(false);


  const [selectedLanguage, setSelectedLanguage] = useState("C#");
  const [isOpen, setIsOpen] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(JSON.stringify(jsonData)).then(() => {
      setCopyText(true);
    });
  };

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

  const handleLanguageSelect = (language) => {
    setSelectedLanguage(language);
    setIsOpen(false);
  };

  return (
    <div>
      <div className="   md:px-10 w-full  ">
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
                        <span className=" text-[#727272] px-3">integer</span>
                        <span className=" px-[10px]  font-medium text-[12px] py-1 border-2 border-[#DADADA]  ml-3 rounded-lg">
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
      </div>
    </div>
  );
};
