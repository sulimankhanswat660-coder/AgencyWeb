import { Box, Typography } from "@mui/material";
import CardImage from "./PortfolioImage";
import React from "react";
import PortfolioImage from "./PortfolioImage";

function Portfolio() {
  return (
    <Box sx={{ width: "100%", py: "50px" }}>
      <Box sx={{ width: "90%", height: "max-content", mx: "auto" }}>
        <Box
          sx={{
            width: { xs: "302px", lg: "490px" },
            height: "122px",
            m: "auto",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography
            sx={{
              textAlign: "center",
              fontSize: { xs: "25px" },
              fontWeight: "600",
              fontFamily: "poppins",
              lineHeight: { xs: "150%", lg: "188%" },
            }}
          >
            Our Recent Projects
          </Typography>
          <Typography
            sx={{
              pt: { xs: "20px" },
              fontSize: { xs: "12px", lg: "14px" },
              fontWeight: "500",
              fontFamily: "poppins",
              textAlign: "center",
              lineHeight: { xs: "160%", lg: '"188%"' },
            }}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </Typography>
        </Box>
        <Box
          sx={{
            pt: "40px",
            display: "flex",
            flexDirection:'row',
            flexWrap: "wrap",
            gap: "30px",
            justifyContent: {xs:'center',md:'left'},
          }}
        >
          <PortfolioImage />
        </Box>
      </Box>
    </Box>
  );
}

export default Portfolio;
