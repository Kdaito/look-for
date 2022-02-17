import React from "react";
import Icon from "@mui/icons-material/AccountCircle";
import { Box, Typography } from "@mui/material";
import { UserData } from "../../../../data/type";

type Props = {
  userData: UserData;
};

const SidebarIcon: React.VFC<Props> = ({ userData }) => (
  <Box
    sx={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
      py: "23px",
    }}
  >
    <Icon sx={{ fontSize: "150px" }} />
    <Typography variant="h5">{`${userData.firstName}${userData.lastName}`}</Typography>
    <Typography>{`${userData.firstNameKana} ${userData.lastNameKana}`}</Typography>
  </Box>
);

export default SidebarIcon;
