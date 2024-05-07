import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import {
  Button,
  Grid,
  TextField,
  Box,
  Checkbox,
  Divider,
  FormControlLabel,
  FormGroup,
} from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  return (
    <>
      <div className="login-container">
        <Grid container spacing={2} className="d-flex">
          <Grid item xs={12} md={12} xl={6} lg={6} className="d-flex">
            <Card className="card-size">
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h6"
                  align="center"
                  component="div"
                  color="primary"
                >
                  ~Login to your workspace~
                </Typography>
                <br />
                <Typography variant="body2" color="text.secondary">
                  <Box
                    component="form"
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",

                      "& .custom-textfield": {
                        m: 1.7, // Apply margin to elements with the class 'custom-textfield'
                      },
                    }}
                    noValidate
                    autoComplete="off"
                    className="mr-1"
                  >
                    <TextField
                      id="outlined-basic"
                      label="Phone Number / Email"
                      variant="outlined"
                      size="small"
                      fullWidth
                      className="custom-textfield"
                    />
                    <TextField
                      id="outlined-basic"
                      label="Password"
                      variant="outlined"
                      size="small"
                      fullWidth
                      className="custom-textfield"
                    />
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        width: "100%",
                      }}
                    >
                      <FormGroup>
                        <FormControlLabel
                          control={<Checkbox defaultChecked />}
                          label="Remeber me"
                          size="small"
                        />
                      </FormGroup>
                      <Typography variant="body2" component="div" size="small">
                        Forgot Password
                      </Typography>
                    </div>
                    <Button variant="contained" fullWidth>
                      Login
                    </Button>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        width: "100%",
                      }}
                    >
                      <Typography
                        variant="body2"
                        component="div"
                        size="small"
                        className="mt-2"
                      >
                        Don't have an account?
                        <u
                          className="font-weight-bolder text-black track-link"
                          onClick={() => {
                            navigate("/signup");
                          }}
                        >
                          {" "}
                          Signup
                        </u>
                      </Typography>
                    </div>
                    <br /> <br />
                    <Divider className="mb-4">OR USE EMAIL</Divider>
                    <Button variant="outlined" fullWidth>
                      <GoogleIcon /> &ensp; Sign in with Google
                    </Button>
                  </Box>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default Login;
