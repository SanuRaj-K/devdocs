import React from "react";
import CloseIcon from "@mui/icons-material/Close";

export default function TextFields({ onRemove }) {
  return (
    <div className="border-2 h-[45px] bg-[#f5f8fb] mb-1 rounded-md text-[10px] border-[#e2e8f0] flex justify-between items-center w-full">
      <input
        className="px-2 h-[45px] outline-blue-600 border-r-2 bg-[#f5f8fb] w-1/2"
        placeholder="Name"
        type="text"
      />
      <div className="flex items-center group w-1/2">
        <input
          className="px-2 h-[45px] w-full outline-blue-600 bg-[#f5f8fb]"
          placeholder="Value"
          type="text"
        />
        <div onClick={onRemove} className="cursor-pointer p-2">
          <CloseIcon />
        </div>
      </div>
    </div>
  );
}
