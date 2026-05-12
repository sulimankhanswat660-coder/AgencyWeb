import React from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
function ContactForm() {
  return (
    <Box
      sx={{
        width: "100%",
        bgcolor: "#F5F5F5",
        py: "50px",
        position: "relative",
      }}
    >
      <Box sx={{ width: {xs:'90%', md:'40%'}, mx: "auto" }}>
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
                  width: "176px",
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
  );
}

export default ContactForm;
