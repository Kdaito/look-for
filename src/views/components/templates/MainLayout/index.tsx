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
  IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import {
  CreditCard as PostIcon,
  AddCard as AddPostIcon,
  Settings as SettingsIcon,
  Logout as LogoutIcon,
} from "@mui/icons-material";
import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import SidebarIcon from "../../molecules/SidebarIcon";
import { pathNames } from "../../../../routers/path";
import { AuthContext } from "../../../../providers/authProvider";
import { useSelector } from "react-redux";
import { State } from "../../../../stores";

const DRAWER_WIDTH = 240;

const MainLayout: React.FC = ({ children }) => {
  const history = useHistory();
  const userData = useSelector((s: State) => s.user);
  const { signOut } = useContext(AuthContext);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

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
        <Toolbar
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="h5" noWrap component="div">
            Look For
          </Typography>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={() => setIsDrawerOpen(!isDrawerOpen)}
            sx={{
              display: {
                md: "none",
              },
            }}
          >
            <MenuIcon />
          </IconButton>
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
          display: {
            xs: "none",
            sm: "none",
            md: "block",
          },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: "auto", height: "100%" }}>
          <SidebarIcon userData={userData} />
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
            <ListItem button onClick={signOut}>
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
      <Drawer
        anchor="right"
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      >
        <Box
          sx={{ width: 250, paddingTop: "60px" }}
          role="presentation"
          onClick={() => setIsDrawerOpen(false)}
          onKeyDown={() => setIsDrawerOpen(false)}
          component="div"
        >
          <SidebarIcon userData={userData} />
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
            <ListItem button onClick={signOut}>
              <ListItemIcon>
                <LogoutIcon />
              </ListItemIcon>
              <ListItemText primary={"ログアウト"} />
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </Box>
  );
};

export default MainLayout;
