//Libraries
import React, { useState } from "react";
import { Outlet } from "react-router-dom";

//Mui
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";

function SideBarPage() {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
  return (
    <>
      <div>
        <Button onClick={toggleDrawer(true)}>Open side bar</Button>
        <Drawer open={open} onClose={toggleDrawer(false)}>
          <li>miko</li>
          <li>yoni</li>
          <li>mor</li>
        </Drawer>
      </div>
      <Outlet />
    </>
  );
}

export default SideBarPage;
