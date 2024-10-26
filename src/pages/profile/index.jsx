import React, { useState } from "react";
import personIcon from "../../assets/icons/account.svg";
import { projectData } from "../../constants/projectsData";
import dots from "../../assets/icons/3dot.svg";
import { Folders } from "../../components/folders";
import { Link } from "react-router-dom";

export const Projects = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const filteredProjects = projectData.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <div>
        <section className=" sm:flex sm:justify-between items-center pt-10 px-7">
          <div className=" flex  items-center justify-between">
            <div className="fc    ">
              <span className="font-albert text-[16px] sm:text-[22px] md:text-[26px] font-semibold capitalize">
                Hello, Hishasm
              </span>
              <span className="font-poppins text-[10px] md:text-[12px] ">
                Here is your Projects Details
              </span>
            </div>
            <div className=" sm:hidden">
              <img
                className="cursor-pointer size-5"
                src={personIcon}
                alt="icon"
              />
            </div>
          </div>
          <div>
            <input
              className="border-2 mt-2 h-[30px] w-full sm:w-[300px]  text-[10px] md:text-[14px] outline-none pl-3 rounded-md"
              placeholder="search project"
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div>
            <img
              className="cursor-pointer hidden sm:block size-8"
              src={personIcon}
              alt="icon"
            />
          </div>
        </section>
        <section className="bg-white rounded-md shadow-2xl w-[95%] mx-auto lg:px-7 mt-10 md:mt-20">
          <div>
            <h1 className="font-poppins text-[20px] p-3 font-semibold">
              Projects
            </h1>

            <ul className="px-4 py-7 grid gap-y-3 lg:gap-x-10 grid-cols-1 sm:grid-cols-2 md:gap-x-10 xl:grid-cols-3">
              {filteredProjects.length === 0 ? (
                <li className="text-center text-gray-500 font-medium">
                  No projects found
                </li>
              ) : (
                filteredProjects.map((item, index) => (
                  <Link to={"/home"}>
                  <li
                    className="fb hover:bg-gray-400 p-2 rounded-md relative lg:min-w-[400px]"
                    key={index}
                  >
                    
                      <Folders title={item.title} desc={item.desc} />

                      <div className="mt-3">
                        <img className="cursor-pointer h-4" src={dots} alt="" />
                      </div>
                    
                  </li>
                  </Link>
                ))
              )}
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};
