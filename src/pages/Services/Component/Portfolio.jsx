import React from "react";
import { Box, Button, Typography, Stack, Grid } from "@mui/material";
import image from "../../../../public/Portfolio.jpg";

function Portfolio() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "max-content",
        mt: "50px",
        pl: { xs: "0px", md: "70px" },
        pt: { xs: "20px", md: "80px" },
        display: "flex",
        flexDirection: { xs: "column-reverse", md: "row" },
        gap: 10,
      }}
    >
      <Stack
        spacing={3}
        sx={{
          alignSelf: "center",
          width: { xs: "80%", md: "40%" },
          mb: "20px",
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: "21px", md: "30px" },
            fontWeight: "500",
            fontFamily: "poppins",
          }}
        >
          Lorem Ipsum is simply dummy text dummy text
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: "13px", md: "17px" },
            fontWeight: "400",
            fontFamily: "poppins",
            color: "#515151",
          }}
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries,
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: "13px", md: "17px" },
            fontWeight: "400",
            fontFamily: "poppins",
            color: "#515151",
          }}
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </Typography>
        <Button
          disableElevation
          sx={{
            color: "white",
            backgroundColor: "#FB9E3C",
            width: "176px",
            height: "47px",
            px: "20px",
            py: "10px",
            mt: { xs: "2px", md: "50px" },
            ml: { xs: "30px", md: "70px" },
            textTransform: "none",
          }}
        >
          Get more
        </Button>
      </Stack>
      <Box
        component="img"
        src={image}
         sx={{
          width: { xs: "100%", md: "40%" },
          height:{xs:'400px',sm:'600px',md:'460px'},
          objectFit: "cover",
          mt: "20px",
        }}
      />
    </Box>
  );
}

export default Portfolio;
