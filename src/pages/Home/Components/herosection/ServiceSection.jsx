import { Box, Typography } from "@mui/material";
import React from "react";
import ServiceCard from "./ServiceCard";

function ServiceSection() {
  return (
    <Box sx={{ width: "100%", height: "max-content", py: { lg: "70px" } }}>
      <Box
        sx={{ width: "90%",  m: { xs: "20px", lg: "auto" } }}
      >
        <Box
          sx={{
            width: { xs: "90%", lg: "70%" },
            height: { xs: "270px", sm: "150px", lg: "150px" },
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
              lineHeight: { xs: "150%", lg: "188%" },
            }}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </Typography>
          <Typography
            sx={{
              pt: { xs: "20px" },
              fontSize: "16px",
              fontWeight: "400",
              textAlign: "center",
              lineHeight: { xs: "160%", lg: '"188%"' },
            }}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s,
          </Typography>
        </Box>
        <Box sx={{width:'100%',pl:{xs:'5px',lg:'35px'},mt:{xs:'90px',lg:'130px'}}}>
          <ServiceCard/>
          
        </Box>
      </Box>
    </Box>
  );
}

export default ServiceSection;
