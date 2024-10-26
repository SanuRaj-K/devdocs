import * as React from "react";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";

import MenuIcon from "@mui/icons-material/Menu";
import { Accordioncomp } from "../accordion";
import { apiSections } from "../../constants";

export default function TemporaryDrawer() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  return (
    <div>
      <Button onClick={toggleDrawer(true)}>
        <MenuIcon />

        <span className=" font-poppins text-black ml-2">Menu</span>
      </Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        <ul className=" mt-10 ">
            <h1 className=" py-5 px-2">Overview</h1>
          {apiSections?.map((item, index) => (
            <li className="" key={index}>
              <Accordioncomp title={item.title} method={item.methods} />
            </li>
          ))}
        </ul>{" "}
      </Drawer>
    </div>
  );
}
