import { Box, Typography } from "@mui/material";
import React from "react";
import img1 from "../../../../../public/Group 21.svg";
import img2 from "../../../../../public/Rectangle 4.svg";
function AboutSection() {
  return (
    <Box sx={{ width: "100%", height: "max-content", py:{xs:'30px',lg:'50px'} }}>
      <Box
        sx={{
          width: "100%",
          height: "94px",
          margin: "auto",
        }}
      >
        <Typography
          textAlign={"center"}
          sx={{
            fontSize: { xs: "16px", md: "20px", lg: "25px" },
            fontWeight: "600",
            lineHeight: "188%",
            color: "#222222",
            fontFamily: "Poppins",
            width: { xs: "75%", sm: "50%" },
            margin: "auto",
          }}
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </Typography>
      </Box>
      <Box
        sx={{
          width: { xs: "100%", md: "40%" },
          height: "174px",
          ml: "135px",
          mt: "50px",
          display: { xs: "none", lg: "block" },
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Typography
          sx={{ fontFamily: "poppins", fontWeight: "600", fontSize: "30px" }}
        >
          Lorem Ipsum
        </Typography>
        <Typography
          sx={{
            fontFamily: "poppins",
            fontWeight: "400",
            fontSize: "16px",
            lineHeight: "188%",
          }}
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s,
        </Typography>
      </Box>
      <Box sx={{ml:{md:'50px',lg:'30px'}}}>
        <Box sx={{ position: "relative",borderRadius:{xs:'15px',lg:'0'}, width: { xs: "290px",sm:'500px' ,lg:'934px' } }}>
          <img src={img2} alt="" width={"100%"} height={"362px"} />
          <Box
            sx={{
                width: { xs: "78px", lg: "196px" },
                height: { xs: "54px", lg: "154px" },
              position: "absolute",
              right:{ xs:-15,lg:20},
              top:{xs:30,sm:-10,md:-20,lg:-50},
              zIndex: -1,
            }}
          >
            <img src={img1} width={"100%"} height={"154px"} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default AboutSection;
