import React, { useState } from "react";
import { jsonData, responseCode } from "../../constants";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import DoneIcon from "@mui/icons-material/Done";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coy } from "react-syntax-highlighter/dist/esm/styles/prism";

export const CodeBlock = ({
  title,
  id,
  selectedResponseCode,
  setSelectedResponseCode,
}) => {
  const [copyText, setCopyText] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(JSON.stringify(jsonData)).then(() => {
      setCopyText(true);
    });
  };

  return (
    <div>
      <div className=" bg-[#F4F4F5] p-3 rounded-lg border-2 flex flex-col justify-between ">
        <div className=" ">
          <div className="border-b-2 border-[#DDDDDD] pb-3 fb items-center">
            <div>
              <span className=" text-sm">{title}</span>
            </div>
          </div>
          {!id && (
            <div className="pb-3 group relative mt-3">
              <div
                onClick={handleCopy}
                className=" absolute  group-hover:block cursor-pointer  right-0 z-20  hidden top-0 mr-2 size-1 "
              >
                {copyText ? <DoneIcon /> : <ContentCopyIcon />}
              </div>

              <p className="text-[12px]  ">
                <SyntaxHighlighter language="json" style={coy}>
                  {JSON.stringify(jsonData, null, 2)}
                </SyntaxHighlighter>
              </p>
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
                    <span className=" text-sm italic">
                      No response Specified
                    </span>
                  </div>
                </>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};
