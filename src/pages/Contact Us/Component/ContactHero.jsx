import React from "react";
import {
  Box,
  Link,
  Container,
  Stack,
  Typography,
  TextField,
  Button,
} from "@mui/material";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import map from "../../../../public/Map.png";

function ContactHero() {
  return (
    <Box
      sx={{
        my: { xs: "70px", md: "100px" },
        width: "100%",
        height: "max-content",
      }}
    >
      <Box
        sx={{
          width: "90%",
          mx: "auto",
          display:'flex', 
          flexDirection:'column',
          alignItems:'center',
          gap:'50px'
        }}
      >
        <Stack
          spacing={3}
          sx={{
            py: { xs: "20px" },
            width: { xs: "100%" },
            textAlign: "center",
          }}
        >
          <Breadcrumbs
            separator="›"
            aria-label="breadcrumb"
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Link color="#848484" href="/" underline="none">
              Home
            </Link>
            <Link underline="none" color="#DF7C14" href="/contact">
              Contact Us
            </Link>
          </Breadcrumbs>
          <Typography
            sx={{
              fontFamily: "poppins",
              fontSize: { xs: "25px", md: "30px" },
              fontWeight: "600",
            }}
          >
            Lorem Ipsum is simply dummy text of the printing and.
          </Typography>
          <Typography
            sx={{
              fontFamily: "poppins",
              fontSize: { xs: "12px", md: "16px" },
              fontWeight: "500",
              color: "#898989",
              lineHeight: { xs: "150%", md: "100%" },
            }}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.{" "}
          </Typography>
        </Stack>
          <Box
            component="img"
            src={map}
            sx={{ width: { xs: "100%", lg: "80%" } }}
          />
      </Box>
    </Box>
  );
}

export default ContactHero;
