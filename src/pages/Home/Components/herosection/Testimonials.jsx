import { Box, Button, Typography, Stack, Grid } from "@mui/material";
import React from "react";
import img3 from "../../../../../public/Section5.png";

function Testimonials() {
  return (
    <Box
      sx={{
        width: "100%",
        height: { xs: "max-content", },
        display: "flex",
        mt: { xs: "30px", lg: "60px" },
        flexDirection: { xs: "column-reverse", md: "row" },
      }}
    >
      <Box
        component="img"
        src={img3}
        sx={{
          width: { xs: "100%", md: "50%" },
          objectFit: "cover",
          borderRadius: "20px",
        }}
      />
      <Box
        sx={{
          width: { xs: "100%", md: "50%" },
          alignSelf: "center",
        }}
      >
        <Stack
          spacing={3}
          sx={{
            py: { xs: "20px" },
            width: { xs: "90%", md: "80%" },
            margin: "auto",
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
            sx={{ fontSize: "17px", fontWeight: "400", fontFamily: "poppins",color:'#515151' }}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries,
          </Typography>
          <Typography  sx={{ fontSize: "17px", fontWeight: "400", fontFamily: "poppins",color:'#515151' }}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
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
            Get in touch
          </Button>
        </Stack>
      </Box>
    </Box>
  );
}

export default Testimonials;
