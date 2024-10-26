import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export const Accordioncomp = ({ title, method }) => {
  return (
    <div className=" font-poppins">
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
          className=" text-[14px] md:text-[20px] font-medium"
        >
            
          {title}
        </AccordionSummary>
        <AccordionDetails>
          <ul>
            {method?.map((item, index) => (
              <li className=" cursor-pointer my-2 w-[300px] flex justify-between items-center" key={index}>
                <span className=" truncate text-[14px]">{item.name}</span>
                <span
                  className={`${
                    item.method === "GET"
                      ? "bg-[#4ADE80]"
                      : item.method === "PUT"
                      ? "bg-[#FACC15]"
                      : item.method === "POST"
                      ? "bg-[#38BDF8]"
                      : "bg-[#F87171]"
                  } px-2 text-[12px]   text-white font-bold py-[2px] rounded-md`}
                >
                  {item.method}
                </span>
              </li>
            ))}
          </ul>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};
