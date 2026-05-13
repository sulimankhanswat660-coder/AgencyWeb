import { Box, Stack } from "@mui/material";
import { Grid, Button, Typography } from "@mui/material";
import img from "../../../../public/AHero.jpg";
import React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

function AboutHero() {
  return (
    <Box
      sx={{
        width: "100%",
        height: { xs: "max-content", md: "40vh", lg: "100vh" },
        display: "flex",
        mt: { xs: "30px", lg: "60px" },
        flexDirection: { xs: "column-reverse", md: "row" },
        bgcolor: "#E27A0C1F",
        
      }}
    >
      <Box
        sx={{
          width: { xs: "100%", md: "50%" },
          alignSelf: "center",
        }}
      >
        <Stack
          spacing={3}
          sx={{
            py:{xs:'20px'},
            width: { xs: "90%", md: "80%" },
            margin:'auto'
          }}
        >
          <Breadcrumbs separator="›" aria-label="breadcrumb">
            <Link color="#848484" href="/" underline="none">
              Home
            </Link>
            <Link
              underline="none"
              color="#DF7C14"
              href="/about"
            >
              About us
            </Link>
          </Breadcrumbs>
          <Typography
            sx={{
              fontSize: { xs: "21px", md: "30px" },
              fontWeight: "700",
              fontFamily: "poppins",
            }}
          >
            Lorem Ipsum is simply dummy text of the printing and.
          </Typography>
          <Typography
            sx={{ fontSize: "15px", fontWeight: "400", fontFamily: "poppins" }}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </Typography>
          <Button
            disableElevation
            sx={{
              color: "white",
              backgroundColor: "#FB9E3C",
              width: "176px",
              height: "47px",
              borderRadius: "100px",
              px: "20px",
              py: "10px",
              mt: { xs: "2px", md: "50px" },
              ml: { xs: "30px", md: "70px" },
              textTransform: "none",
              // boxShadow: "none",
            }}
          >
            Get in touch
            <ArrowForwardIcon />
          </Button>
        </Stack>
      </Box>
      <Box
        component="img"
        src={img}
        sx={{
          width: { xs: "100%", md: "50%" },
          objectFit: "cover",
        }}
      />
    </Box>
  );
}

export default AboutHero;
