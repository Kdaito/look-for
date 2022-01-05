import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Paper,
  Skeleton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import Modal from "../../atoms/Modal";

const email = "kdaito@gmail.com";
const phoneNumber = "000-0000-0000";

const RequirementCard: React.VFC = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <>
      <Card>
        <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <Typography mb={3}>連絡先</Typography>
            <TableContainer component={Paper}>
              <Table aria-label="simple table">
                <TableBody>
                  <TableRow>
                    <TableCell component="th" scope="row">
                      email
                    </TableCell>
                    <TableCell align="left" scope="row">
                      {email}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell component="th" scope="row">
                      電話番号
                    </TableCell>
                    <TableCell align="left">{phoneNumber}</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        </Modal>
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
            募集終了日: 2001/12/13
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            variant="contained"
            color="primary"
            sx={{ margin: "0 auto 15px" }}
            onClick={() => setModalOpen(true)}
          >
            連絡する
          </Button>
        </CardActions>
      </Card>
    </>
  );
};

export default RequirementCard;
