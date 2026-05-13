import { Box, Stack, Typography, Button, Grid, TextField } from "@mui/material";
import React from "react";

function ContactForm() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "max-content",
        bgcolor: "#F5F5F5",
        py: "50px",
      }}
    >
      <Box sx={{ width: "50%", mx: "auto" }}>
        <Stack textAlign={"center"} spacing={2}>
          <Typography
            sx={{ fontFamily: "poppins", fontSize: "30px", fontWeight: "400" }}
          >
            Say hello
          </Typography>
          <Typography
            sx={{
              fontFamily: "poppins",
              fontSize: "13px",
              fontWeight: "500",
              color: "#777777",
            }}
          >
            Lorem Ipsum is simply dummy text of the printing .
          </Typography>
        </Stack>
      </Box>
      <Box
        sx={{
          width: "100%",
          bgcolor: "#F5F5F5",
          py: "50px",
          position: "relative",
        }}
      >
        <Box sx={{ width: { xs: "90%", md: "40%" }, mx: "auto" }}>
          <Grid
            container
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "30px",
              justifyContent: "center",
            }}
          >
            <Grid item xs={12} md={6}>
              <Typography
                sx={{
                  mb: 1,
                  color: "#4F4F4F",
                  fontSize: "16px",
                }}
              >
                First Name
              </Typography>

              <TextField
                fullWidth
                variant="outlined"
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "10px",
                    bgcolor: "#fff",
                  },
                }}
              />
            </Grid>

            <Grid item xs={12} md={4}>
              <Typography
                sx={{
                  mb: 1,
                  color: "#4F4F4F",
                  fontSize: "16px",
                }}
              >
                Last Name
              </Typography>

              <TextField
                fullWidth
                variant="outlined"
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "10px",
                    bgcolor: "#fff",
                  },
                }}
              />
            </Grid>

            <Grid item xs={12}>
              <Typography
                sx={{
                  mb: 1,
                  color: "#4F4F4F",
                  fontSize: "16px",
                }}
              >
                Email Address
              </Typography>

              <TextField
                fullWidth
                variant="outlined"
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "10px",
                    bgcolor: "#fff",
                  },
                }}
              />
            </Grid>

            <Grid item xs={12}>
              <Typography
                sx={{
                  mb: 1,
                  color: "#4F4F4F",
                  fontSize: "16px",
                }}
              >
                Message
              </Typography>

              <TextField
                fullWidth
                multiline
                rows={8}
                variant="outlined"
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "10px",
                    bgcolor: "#fff",
                  },
                }}
              />
            </Grid>

            <Grid item xs={12}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: {
                    xs: "center",
                    sm: "flex-end",
                  },
                  mt: 1,
                }}
              >
                <Button
                  disableElevation
                  sx={{
                    color: "white",
                    backgroundColor: "#DC7000",
                    width: { xs: "90%", sm: "176px" },

                    height: "47px",
                    px: "20px",
                    py: "10px",
                    mt: { xs: "2px", md: "50px" },
                    ml: { xs: "30px", md: "70px" },
                    textTransform: "none",
                    borderRadius: "10px",
                  }}
                >
                  Get in touch
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}

export default ContactForm;
