import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Skeleton,
  Typography,
} from "@mui/material";
import React from "react";

const RequirementCard: React.VFC = () => {
  return (
    <Card>
      {/* <CardMedia/> */}
      <Skeleton sx={{ height: 190 }} animation="wave" variant="rectangular" />
      <CardContent>
        <Typography textAlign={"center"} my={"20px"} variant="h6">
          名古屋市の少年サッカーチームのメンバー募集
        </Typography>
        <Typography variant="body1">
          名古屋市北区の名古屋北公園で毎週水曜日と金曜日の17:00から練習をしております。サッカーを楽しみたいというかた、募集中です!
        </Typography>
        <Typography mt={"10px"} variant="body2">
          募集開始日: 2001/12/13
        </Typography>
        <Typography mb={"10px"} variant="body2">
          募集開始日: 2001/12/13
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          variant="contained"
          color="primary"
          sx={{ margin: "0 auto 15px" }}
        >
          連絡する
        </Button>
      </CardActions>
    </Card>
  );
};

export default RequirementCard;
