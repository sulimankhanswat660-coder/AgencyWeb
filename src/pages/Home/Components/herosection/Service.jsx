import { Box, Typography } from "@mui/material";
import React from "react";

function Service() {
  return (
    <Box sx={{ width: "100%", height: "max-content", py: "70px" }}>
      <Box sx={{ width: "90%", height: "678px", m:{xs:'30px',lg:'auto'} }}>
        <Box
          sx={{
            width: {xs:'100%',lg:'75%'},
            height: {xs:'226px',lg:"158px"},
            m: "auto",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Typography
            sx={{
              textAlign: "center",
              fontSize: "25px",
              fontWeight: "600",
              fontFamily: "poppins",
              lineHeight: {xs:'150%',lg:'188%'},
            }}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </Typography>
          <Typography
            sx={{
              fontSize: "16px",
              fontWeight: "400",
              textAlign: "center",
              lineHeight: {xs:'150%',lg:'"188%"'},
            }}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s,
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default Service;
