import {
  Drawer,
  AppBar,
  Box,
  CssBaseline,
  Toolbar,
  Typography,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import {
  CreditCard as PostIcon,
  AddCard as AddPostIcon,
  Settings as SettingsIcon,
  Logout as LogoutIcon,
} from "@mui/icons-material";
import React from "react";
import { useHistory } from "react-router-dom";
import SidebarIcon from "../../molecules/SidebarIcon";
import { pathNames } from "../../../../routers/path";

const DRAWER_WIDTH = 240;

const MainLayout: React.FC = ({ children }) => {
  const history = useHistory();

  const onClickLink = (path: string) => {
    history.push(path);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar>
          <Typography variant="h5" noWrap component="div">
            Look For
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: DRAWER_WIDTH,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: DRAWER_WIDTH,
            boxSizing: "border-box",
          },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: "auto", height: "100%" }}>
          <SidebarIcon />
          <Divider />
          <List>
            <ListItem button onClick={() => onClickLink(pathNames.main)}>
              <ListItemIcon>
                <PostIcon />
              </ListItemIcon>
              <ListItemText primary={"投稿一覧"} />
            </ListItem>
            <ListItem button onClick={() => onClickLink(pathNames.register)}>
              <ListItemIcon>
                <AddPostIcon />
              </ListItemIcon>
              <ListItemText primary={"投稿作成"} />
            </ListItem>
            <ListItem button onClick={() => onClickLink(pathNames.setting)}>
              <ListItemIcon>
                <SettingsIcon />
              </ListItemIcon>
              <ListItemText primary={"ユーザー設定"} />
            </ListItem>
          </List>
          <Divider />
          <List>
            <ListItem button>
              <ListItemIcon>
                <LogoutIcon />
              </ListItemIcon>
              <ListItemText primary={"ログアウト"} />
            </ListItem>
          </List>
        </Box>
      </Drawer>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: "100%",
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
};

export default MainLayout;
