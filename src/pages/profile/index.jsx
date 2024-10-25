import React, { useState } from "react";
import personIcon from "../../assets/icons/account.svg";
import { projectData } from "../../constants/projectsData";
import dots from "../../assets/icons/3dot.svg";

export const Projects = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const colors = ["#FDBF50", "#DD6243", "#4D725D"];

  function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)];
  }

  const FolderIcon = ({ color }) => (
    <svg
      className="h-[30px] w-[30px] md:h-[45px] md:w-[45px]"
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M40.1735 24.8796C43.4972 24.8794 46.3292 24.8793 48.59 25.135C48.9737 25.1785 49.3562 25.2308 49.7357 25.2945C51.066 25.5178 52.3617 25.8833 53.5605 26.5158V24.3895C53.5605 22.1172 53.5607 20.232 53.3472 18.7289C53.1222 17.1426 52.6315 15.7365 51.4585 14.5811C51.2672 14.3927 51.0652 14.2138 50.8537 14.0452C49.5742 13.0256 48.0405 12.6086 46.3042 12.4152C44.6315 12.2289 42.5242 12.2289 39.9412 12.229H39.0592C36.604 12.229 35.7237 12.2147 34.9265 12.0133C34.4582 11.8951 34.0087 11.7299 33.587 11.522C32.8762 11.1717 32.257 10.644 30.518 9.1033L29.3327 8.0532C28.8352 7.61223 28.4955 7.31125 28.1315 7.04388C26.5697 5.89698 24.6683 5.2033 22.6774 5.03835C22.2138 4.99995 21.7408 4.99998 21.0327 5.00005L20.7416 5.00003C19.1399 4.99975 18.0829 4.99958 17.1651 5.153C13.1529 5.82368 9.90857 8.62858 9.11835 12.3394C8.93855 13.1836 8.93882 14.1509 8.93925 15.5463L8.9393 26.5158C10.138 25.8833 11.4339 25.5178 12.764 25.2945C13.1436 25.2308 13.526 25.1785 13.9098 25.135C16.1705 24.8793 19.0026 24.8794 22.3263 24.8796H40.1735Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.39478 31.947C6.8693 34.3005 7.4989 37.573 8.75808 44.1178C9.6645 48.8293 10.1177 51.185 11.6881 52.7482C12.0955 53.1537 12.5514 53.5132 13.0465 53.8195C14.9549 55 17.4885 55 22.5557 55H39.9443C45.0115 55 47.5452 55 49.4535 53.8195C49.9488 53.5132 50.4045 53.1537 50.812 52.7482C52.3823 51.185 52.8355 48.8293 53.742 44.1178C55.001 37.573 55.6307 34.3005 54.1052 31.947C53.716 31.3465 53.2357 30.8028 52.6802 30.3335C50.5028 28.494 46.9832 28.494 39.9443 28.494H22.5557C15.5167 28.494 11.9972 28.494 9.8198 30.3335C9.26415 30.8028 8.78408 31.3465 8.39478 31.947ZM24.238 42.9518C24.238 41.9538 25.094 41.1445 26.1503 41.1445H36.3495C37.4055 41.1445 38.2617 41.9538 38.2617 42.9518C38.2617 43.95 37.4055 44.759 36.3495 44.759H26.1503C25.094 44.759 24.238 43.95 24.238 42.9518Z"
        fill={color}
      />
    </svg>
  );

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
              className="border-2 mt-2  text-[10px] md:text-[14px] outline-none pl-3 rounded-md"
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
                  <li
                    className="fb hover:bg-gray-400 p-2 rounded-md relative lg:min-w-[400px]"
                    key={index}
                  >
                    <div className="cursor-pointer flex items-center">
                      <div className="p-1">
                        <FolderIcon color={getRandomColor()} />
                      </div>
                      <div className="px-5 fc font-poppins">
                        <div>
                          <span className="truncate text-wrap text-[14px] lg:text-[16px] font-medium">
                            {item.title}
                          </span>
                        </div>

                        <span className="truncate text-[10px] lg:text-[12px]">
                          {item.desc}
                        </span>
                      </div>
                    </div>

                    <div className="mt-3">
                      <img className="cursor-pointer h-4" src={dots} alt="" />
                    </div>
                  </li>
                ))
              )}
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};
