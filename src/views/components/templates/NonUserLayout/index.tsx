import {
  AppBar,
  Box,
  CssBaseline,
  Toolbar,
  Typography,
  Button,
} from "@mui/material";
import React from "react";
import { useHistory } from "react-router-dom";
import { pathNames } from "../../../../routers/path";

const MainLayout: React.FC = ({ children }) => {
  const history = useHistory();

  const onClickLink = (path: string) => {
    history.push(path);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ padding: "15px" }}>
        <Toolbar sx={{ display: "flex" }}>
          <Typography variant="h5" noWrap component="div" sx={{ flexGrow: 1 }}>
            Look For
          </Typography>
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
        </Toolbar>
      </AppBar>
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
