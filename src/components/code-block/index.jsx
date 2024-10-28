import React, { useState } from "react";
import { jsonData, languages, responseCode } from "../../constants";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import DoneIcon from "@mui/icons-material/Done";
import play from "../../assets/icons/play.svg";
import select from "../../assets/icons/select.svg";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coy } from "react-syntax-highlighter/dist/esm/styles/prism";

export const CodeBlock = ({
  title,
  item,
  id,
  selectedResponseCode,
  setSelectedResponseCode,
  setToggleRun,
}) => {
  const [copyText, setCopyText] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("cURL");

  const handleCopy = () => {
    navigator.clipboard.writeText(JSON.stringify(jsonData)).then(() => {
      setCopyText(true);
    });
  };
  if (copyText) {
    setTimeout(() => {
      setCopyText(false);
    }, 3000);
  }

  console.log(selectedLanguage);

  return (
    <div>
      <div className=" bg-[#F4F4F5] p-3 rounded-lg border-2 flex flex-col justify-between ">
        <div className=" ">
          {item === "1" ? (
            <>
              <div className="border-b-2 border-[#DDDDDD] pb-3 fb items-center">
                <div className=" text-sm">
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
            </>
          ) : (
            <>
              <div className="border-b-2 border-[#DDDDDD] pb-3 fb items-center">
                <div>
                  <span className="  font-medium text-sm">{title}</span>
                </div>
              </div>
            </>
          )}

          {!id && (
            <div className="pb-3 group relative mt-3">
              <div
                onClick={handleCopy}
                className=" absolute  group-hover:block cursor-pointer  right-0 z-20  hidden top-0 mr-2 size-1 "
              >
                {copyText ? <DoneIcon /> : <ContentCopyIcon />}
              </div>
              {item === "1" ? (
                selectedLanguage === "cURL" ? (
                  <>
                    <p className="text-[12px]  ">
                      <SyntaxHighlighter language="json" style={coy}>
                        {JSON.stringify(jsonData, null, 2)}
                      </SyntaxHighlighter>
                    </p>
                  </>
                ) : (
                  <>
                    <span className=" text-sm italic">
                      <span className=" font-semibold mr-2">
                        {selectedLanguage}
                      </span>
                      language code available soon
                    </span>
                  </>
                )
              ) : (
                <>
                  <p className="text-[12px]  ">
                    <SyntaxHighlighter language="json" style={coy}>
                      {JSON.stringify(jsonData, null, 2)}
                    </SyntaxHighlighter>
                  </p>
                </>
              )}
            </div>
          )}

          {id && (
            <div>
              <ul className=" text-[12px]  my-3 flex">
                {responseCode?.map((item, index) => (
                  <li
                    onClick={() => setSelectedResponseCode(item)}
                    className={`${
                      selectedResponseCode === item
                        ? " text-[#020817] rounded-md bg-white border-2 px-3"
                        : ""
                    } mx-3 cursor-pointer   `}
                    key={index}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div>
            {id &&
              (selectedResponseCode === "200" ? (
                <>
                  <div className="pb-3 group relative mt-3">
                    <div
                      onClick={handleCopy}
                      className=" absolute  group-hover:block cursor-pointer  right-0 z-20  hidden top-0 mr-2 size-1 "
                    >
                      {copyText ? <DoneIcon /> : <ContentCopyIcon />}
                    </div>

                    <p className="text-[12px] ">
                      <SyntaxHighlighter language="json" style={coy}>
                        {JSON.stringify(jsonData, null, 2)}
                      </SyntaxHighlighter>
                    </p>
                  </div>
                </>
              ) : (
                <>
                  <div className=" bg-[#F9FAFC]  rounded-lg p-3 border-2 w-full">
                    <span className=" text-[12px] italic">Empty response</span>
                  </div>
                </>
              ))}
          </div>
        </div>
        {item === "1" && (
          <div className="flex relative border-t-2 pt-3 text-[12px]   border-[#DDDDDD]  mt-10 items-center justify-end">
            <span className="mr-5">show example in</span>
            <img
              className="  absolute  right-0 z-10 "
              src={select}
              alt="select"
            />

            <select
              onChange={(e) => setSelectedLanguage(e.target.value)}
              className=" px-3 rounded-md  appearance-none h-[30px] "
            >
              {languages.map((language, index) => (
                <option key={index} className=" " value={language}>
                  <div>{language}</div>
                </option>
              ))}
            </select>
          </div>
        )}
        
        {id && (
          <span className=" border-t-2 pt-2 mt-2 text-[10px] capitalize font-medium  text-right">
            {selectedResponseCode === "200"
              ? "Successfull operation"
              : "invalid input"}
          </span>
        )}
      </div>
    </div>
  );
};
