import { Box, Stack, Typography, Button, Grid, TextField } from "@mui/material";
import React from "react";

function ContactPage() {
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
    </Box>
  );
}

export default ContactPage;
