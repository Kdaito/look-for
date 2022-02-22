import React from "react";
import Icon from "@mui/icons-material/AccountCircle";
import { Box, Typography } from "@mui/material";
import { UserStoreData } from "../../../../stores/user/types";

type Props = {
  userData: UserStoreData;
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
    {userData.iconURL !== "" ? (
      <Box
        sx={{
          height: 120,
          width: 120,
          borderRadius: 100,
          overflow: "hidden",
          margin: "0 auto",
        }}
      >
        <img
          src={userData.iconURL}
          alt="user icon"
          style={{ objectFit: "cover", width: "100%", height: "100%" }}
        />
      </Box>
    ) : (
      <Icon sx={{ fontSize: "150px" }} />
    )}
    <Typography variant="h5">{`${userData.firstName}${userData.lastName}`}</Typography>
    <Typography>{`${userData.firstNameKana} ${userData.lastNameKana}`}</Typography>
  </Box>
);

export default SidebarIcon;
