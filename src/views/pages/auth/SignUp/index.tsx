import React from "react";
import {
  Box,
  Button,
  Card,
  Grid,
  Link,
  TextField,
  Typography,
} from "@mui/material";

const SignUp: React.VFC = () => {
  const handleSubmit = () => console.log("handle submit");
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        p: 4,
      }}
    >
      <Card
        sx={{
          marginTop: 8,
          padding: "50px 25px",
          display: "inline-flex",
          flexDirection: "column",
          alignItems: "center",
          maxWidth: "600px",
        }}
      >
        <Typography component="h1" variant="h2" color={"#fff"} mb={"15px"}>
          Look For
        </Typography>
        <Typography component="h2" variant="h5" color={"#fff"}>
          ユーザー登録
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="given-name"
                name="firstName"
                fullWidth
                label="First Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Last Name"
                name="lastName"
                autoComplete="family-name"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                name="password"
                label="Password"
                type="password"
                autoComplete="new-password"
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            登録する
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="/auth/sign-in" variant="body2">
                既に登録している方はこちら
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Card>
    </Box>
  );
};

export default SignUp;
