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
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";

function NewsHero() {
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
            <Link color="inherit" href="/" underline="none">
              Home
            </Link>
            <Link underline="none" color="inherit" href="/services">
              Services
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
        <Stack
          direction="row"
          sx={{
            width: { xs:'90%',sm: "60%",md:"35%" },
            bgcolor: "#F1F1F1",
            borderRadius: "10px",
            mx:'auto',
            mt:"50px"
          }}
        >
          <IconButton type="button" sx={{ pl: "20px" }} aria-label="search">
            <SearchIcon />
          </IconButton>

          <TextField
            placeholder="Search"
            variant="outlined"
            size="medium"
            sx={{
              flex: 1,
              "& fieldset": { border: "none" },
            }}
          />
        </Stack>
      </Box>
    </Box>
  );
}

export default NewsHero;
