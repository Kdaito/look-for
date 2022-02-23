import {
  AppBar,
  Box,
  CssBaseline,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import LoginIcon from "@mui/icons-material/Login";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import ArticleIcon from "@mui/icons-material/Article";
import MenuIcon from "@mui/icons-material/Menu";
import { pathNames } from "../../../../routers/path";

const MainLayout: React.FC = ({ children }) => {
  const history = useHistory();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const onClickLink = (path: string) => {
    history.push(path);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ padding: "15px", zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar sx={{ display: "flex" }}>
          <Typography variant="h5" noWrap component="div" sx={{ flexGrow: 1 }}>
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
          <Box
            sx={{
              display: {
                xs: "none",
                sm: "none",
                md: "block",
              },
            }}
          >
            <Button
              color="inherit"
              size="large"
              sx={{ marginRight: "20px" }}
              onClick={() => onClickLink(pathNames.home)}
            >
              投稿一覧
            </Button>
            <Button
              color="inherit"
              size="large"
              sx={{ marginRight: "20px" }}
              onClick={() => onClickLink(pathNames.signIn)}
            >
              ログイン
            </Button>
            <Button
              color="inherit"
              size="large"
              onClick={() => onClickLink(pathNames.signUp)}
            >
              新規登録
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        anchor="right"
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      >
        <Box
          sx={{ width: 250, paddingTop: "120px" }}
          role="presentation"
          onClick={() => setIsDrawerOpen(false)}
          onKeyDown={() => setIsDrawerOpen(false)}
          component="div"
        >
          <List>
            <ListItem
              button
              onClick={() => onClickLink(pathNames.home)}
              sx={{ marginY: "10px" }}
            >
              <ListItemIcon>
                <ArticleIcon />
              </ListItemIcon>
              <ListItemText primary={"投稿一覧"} />
            </ListItem>
            <ListItem
              button
              onClick={() => onClickLink(pathNames.signIn)}
              sx={{ marginY: "10px" }}
            >
              <ListItemIcon>
                <LoginIcon />
              </ListItemIcon>
              <ListItemText primary={"ログイン"} />
            </ListItem>
            <ListItem
              button
              onClick={() => onClickLink(pathNames.signUp)}
              sx={{ marginY: "10px" }}
            >
              <ListItemIcon>
                <PersonAddAltIcon />
              </ListItemIcon>
              <ListItemText primary={"新規登録"} />
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
          margin: "60px auto 0",
        }}
      >
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
};

export default MainLayout;
