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
import React, { useState } from "react";
import SidebarIcon from "../../molecules/SidebarIcon";

const DRAWER_WIDTH = 240;

const MainLayout: React.FC = ({ children }) => {
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
          <Divider sx={{ backgroundColor: "#0b1929" }} />
          <List>
            <ListItem button>
              <ListItemIcon>
                <PostIcon />
              </ListItemIcon>
              <ListItemText primary={'投稿一覧'} />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <AddPostIcon />
              </ListItemIcon>
              <ListItemText primary={'投稿作成'} />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <SettingsIcon />
              </ListItemIcon>
              <ListItemText primary={'ユーザー設定'} />
            </ListItem>
          </List>
          <Divider sx={{ backgroundColor: "#0b1929" }} />
          <List>
            <ListItem button>
              <ListItemIcon>
                <LogoutIcon />
              </ListItemIcon>
              <ListItemText primary={'ログアウト'} />
            </ListItem>
          </List>
        </Box>
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, backgroundColor: "#0b1929" }}
      >
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
};

export default MainLayout;
