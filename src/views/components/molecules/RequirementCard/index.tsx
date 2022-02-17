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
import React, { useMemo, useState } from "react";
import Modal from "../../atoms/Modal";
import { Requirement } from "../../../../data/type";
import { getStringDate } from "../../../../modules/date";

type Props = {
  requirement: Requirement;
  isAuthor: boolean;
  onClickEdit?: (id: string) => void;
};

const RequirementCard: React.VFC<Props> = ({
  requirement,
  isAuthor,
  onClickEdit,
}) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const startDate = useMemo(
    () => getStringDate(requirement.data.period.startDate),
    [requirement.data.period.startDate]
  );
  const endDate = useMemo(
    () => getStringDate(requirement.data.period.endDate),
    [requirement.data.period.endDate]
  );

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
                      <Typography>email</Typography>
                    </TableCell>
                    <TableCell align="left" scope="row">
                      {requirement.data.email}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell component="th" scope="row">
                      <Typography>電話番号</Typography>
                    </TableCell>
                    <TableCell align="left">
                      {requirement.data.phoneNumber}
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        </Modal>
        <Skeleton sx={{ height: 190 }} animation="wave" variant="rectangular" />
        <CardContent>
          <Typography
            my={"20px"}
            variant="h6"
            sx={{ height: "30px", overflow: "hidden", textAlign: "center" }}
          >
            {requirement.data.title}
          </Typography>
          <Typography
            variant="body1"
            sx={{ height: "100px", overflow: "hidden" }}
          >
            {requirement.data.text}
          </Typography>
          <Typography mt={"10px"} variant="body2">
            募集開始日: {startDate}
          </Typography>
          <Typography variant="body2">募集終了日: {endDate}</Typography>
        </CardContent>
        <CardActions>
          {isAuthor && onClickEdit ? (
            <Button
              variant="contained"
              color="primary"
              sx={{ margin: "0 auto 15px" }}
              onClick={() => onClickEdit(requirement.id)}
            >
              編集する
            </Button>
          ) : (
            <Button
              variant="contained"
              color="primary"
              sx={{ margin: "0 auto 15px" }}
              onClick={() => setModalOpen(true)}
            >
              連絡する
            </Button>
          )}
        </CardActions>
      </Card>
    </>
  );
};

export default RequirementCard;
