import React from "react";
import { Card, CardActions, CardContent } from "@mui/material";

const RegisterRequirement: React.VFC = () => {
  return (
    <>
      <Card sx={{ width: "80%", maxWidth: "1000px" }}>
        <CardContent>フォームの内容が入る</CardContent>
        <CardActions>登録ボタンが入る</CardActions>
      </Card>
    </>
  );
};

export default RegisterRequirement;
