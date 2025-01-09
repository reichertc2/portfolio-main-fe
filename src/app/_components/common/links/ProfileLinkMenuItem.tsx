import React from "react";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import Link from "next/link";

interface IProfileLinkMenuItemProps {
  url: string;
  text: string;
  handleCloseUserMenu: () => void;
}

export const ProfileLinkMenuItem: React.FC<IProfileLinkMenuItemProps> = ({
  url,
  text,
  handleCloseUserMenu,
}) => {
  return (
    <MenuItem onClick={handleCloseUserMenu}>
      <Link href={url}>
        <Typography textAlign="center">{text}</Typography>
      </Link>
    </MenuItem>
  );
};
export default ProfileLinkMenuItem;
