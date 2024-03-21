"use client"; // This is a client component
import Link from "next/link";
import * as React from "react";
// Material UI for burger menu
import { IconButton } from "@mui/material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Dehaze } from "@mui/icons-material";

const Navbar: React.FC = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <nav
        id="navbar"
        className="fixed top-0 left-0 w-svw px-5 z-50 dark:bg-black h-36 
        flex flex-row justify-between items-center flex-nowrap
        md:px-20 md:h-44"
      >
        <div className="">
          <Link href="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="299.87"
              height="97.83"
              viewBox="0 0 299.87 97.83"
              className="fill-current dark:text-white w-40 cursor-pointer
              md:w-60"
            >
              <defs>
                <style>.cls-1{}</style>
              </defs>
              <g id="Layer_7" data-name="Layer 7">
                <path
                  className="cls-1"
                  d="M75.12,2h8.31V43.18H74.61V16L64.8,29.77h-7L47.85,16.42V43.18H39V2H47.4l14,19Z"
                />
                <path
                  className="cls-1"
                  d="M93.73,2h25.7v8H102.55v7.43H117.4v8H102.55v9.69h16.88v8H93.73Z"
                />
                <path
                  className="cls-1"
                  d="M157.93,2h8.83V43.18h-8.42L138.61,16.31V43.18h-8.82V2H138l19.91,27Z"
                />
                <path
                  className="cls-1"
                  d="M175.6,2h29.83v8h-10.5V43.18H186.1V10H175.6Z"
                />
                <path
                  className="cls-1"
                  d="M233.71,1.45a19,19,0,0,1,7.9,1.68,20.49,20.49,0,0,1,6.47,4.59,22.14,22.14,0,0,1,4.35,6.73,21.11,21.11,0,0,1,1.6,8.18,21.46,21.46,0,0,1-1.6,8.19,22.06,22.06,0,0,1-4.35,6.79,21,21,0,0,1-6.47,4.61,19.08,19.08,0,0,1-15.79,0,20.56,20.56,0,0,1-6.44-4.61,22.2,22.2,0,0,1-4.33-6.79,21.45,21.45,0,0,1-1.59-8.19,21.11,21.11,0,0,1,1.59-8.18,22.27,22.27,0,0,1,4.33-6.73,20,20,0,0,1,6.44-4.59A19,19,0,0,1,233.71,1.45Zm0,33.72a10.28,10.28,0,0,0,4.46-1,11.79,11.79,0,0,0,3.65-2.7,12.88,12.88,0,0,0,2.46-4,13.1,13.1,0,0,0,.89-4.88,13.28,13.28,0,0,0-.89-4.9,12.85,12.85,0,0,0-2.46-4A11.79,11.79,0,0,0,238.2,11a10.64,10.64,0,0,0-8.92,0,11.64,11.64,0,0,0-3.64,2.7,12.49,12.49,0,0,0-2.46,4,13.29,13.29,0,0,0-.9,4.9,13.11,13.11,0,0,0,.9,4.88,12.52,12.52,0,0,0,2.46,4,11.64,11.64,0,0,0,3.64,2.7A10.28,10.28,0,0,0,233.74,35.17Z"
                />
                <path
                  className="cls-1"
                  d="M293.1,14.27a12.46,12.46,0,0,1-.55,3.75A12.3,12.3,0,0,1,291,21.27a11.56,11.56,0,0,1-2.38,2.61,12.89,12.89,0,0,1-3,1.83l13.64,17.47H289l-12.71-16.6h-3.94v16.6h-8.82V2h17.76a11.3,11.3,0,0,1,4.61,1,11.63,11.63,0,0,1,3.77,2.61,12.45,12.45,0,0,1,2.53,3.89A12.3,12.3,0,0,1,293.1,14.27Zm-12.94,4.3a3.94,3.94,0,0,0,2.91-1.25,4.2,4.2,0,0,0,1.21-3.05,4.15,4.15,0,0,0-1.21-3A3.93,3.93,0,0,0,280.16,10h-7.83v8.53Z"
                />
                <path
                  className="cls-1"
                  d="M19,55.23a11.11,11.11,0,0,1,4.59,1,11.93,11.93,0,0,1,3.75,2.61,12.44,12.44,0,0,1,3.46,8.68,12.53,12.53,0,0,1-.92,4.79,12.78,12.78,0,0,1-2.53,3.91,11.5,11.5,0,0,1-3.74,2.64,11.11,11.11,0,0,1-4.59,1h-9v16.6H1.24V55.23ZM17.85,71.77a4,4,0,0,0,2.92-1.25,4.13,4.13,0,0,0,1.24-3,4.08,4.08,0,0,0-1.24-3,4,4,0,0,0-2.92-1.25h-7.8v8.53Z"
                />
                <path
                  className="cls-1"
                  d="M47.85,88.37H64.74v8H39V55.23h8.81Z"
                />
                <path
                  className="cls-1"
                  d="M103,55.23l17.18,41.15h-9.52L107,87.56H89.51l-3.66,8.82H76.27L93.46,55.23Zm.64,24.32-5.4-12.94L92.88,79.55Z"
                />
                <path
                  className="cls-1"
                  d="M157.2,55.23H166V96.38h-8.41L137.87,69.51V96.38h-8.81V55.23h8.23L157.2,82.28Z"
                />
              </g>
            </svg>
          </Link>
        </div>
        <div className="md:hidden">
          <IconButton
            aria-label="fingerprint"
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
            className="p-5"
          >
            <Dehaze className="size-12 text-white" />
          </IconButton>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem
              className="uppercase text-xl font-bold"
              onClick={handleClose}
            >
              <Link href="/">Forside</Link>
            </MenuItem>
            <MenuItem
              className="uppercase text-xl font-bold"
              onClick={handleClose}
            >
              <Link href="/employees">Medarbejdere</Link>
            </MenuItem>
            <MenuItem
              className="uppercase text-xl font-bold"
              onClick={handleClose}
            >
              <Link href="#">Menu 3</Link>
            </MenuItem>
            <MenuItem
              className="uppercase text-xl font-bold"
              onClick={handleClose}
            >
              <Link href="#">Menu 4</Link>
            </MenuItem>
          </Menu>
        </div>
        <div
          className="hidden flex-row gap-5 justify-end items-center px-5 
        text-white uppercase font-bold text-3xl font-conduitbold
        md:flex"
        >
          <Link href="/">Home</Link>
          <Link href="/employees">Employees</Link>
          <Link href="#">Menu Item 3</Link>
          <Link href="#">Menu Item 4</Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
