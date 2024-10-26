import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export const Accordioncomp = ({ title, method, onSelectTitle }) => {
  return (
    <div className=" font-poppins">
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
          className=" text-[14px] md:text-[16px] font-semibold"
        >
          {title}
        </AccordionSummary>
        <AccordionDetails>
          <ul>
            {method?.map((item, index) => (
              <li
                onClick={() => onSelectTitle(item.name)}
                className=" hover:bg-black/10  py-1  px-1  rounded-md cursor-pointer my-1 w-[300px] flex justify-between items-center"
                key={index}
              >
                <span className=" truncate text-[12px]">{item.name}</span>
                <span
                  className={`${
                    item.method === "GET"
                      ? "bg-[#4ADE80]"
                      : item.method === "PUT"
                      ? "bg-[#FACC15]"
                      : item.method === "POST"
                      ? "bg-[#38BDF8]"
                      : "bg-[#F87171]"
                  } px-2 text-[10px]   text-white font-bold py-[2px] rounded-md`}
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
