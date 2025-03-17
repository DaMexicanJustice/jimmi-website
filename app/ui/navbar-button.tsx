import * as React from "react";
import { Button } from "@mui/base/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Link from "next/link";

interface NavbarButtonProps {
  textColor: string;
}

const NavbarButton: React.FC<NavbarButtonProps> = ({ textColor }) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        className={`uppercase text-lg font-conduit font-bold ${textColor} transition-colors duration-500`}
      >
        Ydelser
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        disableScrollLock={true}
      >
        <MenuItem
          className={`font-conduit`}
          onClick={handleClose}
          component={Link}
          href="/service-employment"
        >
          Beskæftigelsesindsatser
        </MenuItem>
        <MenuItem
          className={`font-conduit`}
          onClick={handleClose}
          component={Link}
          href="/service-youth"
        >
          Ungeindsatser
        </MenuItem>
        <MenuItem
          className={`font-conduit`}
          onClick={handleClose}
          component={Link}
          href="/service-social"
        >
          Social indsats under § 85
        </MenuItem>
      </Menu>
    </div>
  );
};

export default NavbarButton;
