import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

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
        className={`uppercase font-bold text-xl font-conduitbold ${textColor} transition-colors duration-500`}
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
      >
        <MenuItem
          className={`font-conduit`}
          onClick={handleClose}
          href="/service-employment"
        >
          Beskæftigelsesindsatser
        </MenuItem>
        <MenuItem
          className={`font-conduit`}
          onClick={handleClose}
          href="service-youth"
        >
          Ungeindsatser
        </MenuItem>
        <MenuItem
          className={`font-conduit`}
          onClick={handleClose}
          href="service-youth"
        >
          Socialindsatser
        </MenuItem>
      </Menu>
    </div>
  );
};

export default NavbarButton;
