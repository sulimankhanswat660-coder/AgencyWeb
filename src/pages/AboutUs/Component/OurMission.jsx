import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import image from "../../../../public/AMission.jpg";
function OurMission() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "max-content",
        mt: "70px",
        pl: {xs:'0px',md:'70px'},
        pt: {xs:'0px',md:"80px"},
        bgcolor: "#F5F5F5",
        display: "flex",
        flexDirection:{xs:'column',md:'row'},
        gap: 10,
      }}
    >
      <Box component="img" src={image}sx={{ height:{xs:'20%'} , width:{xs:'100%',md:"40%"}}} />
      <Stack spacing={3} sx={{ alignSelf: "center", width: {xs:'80%',md:"40%"},mb:'20px', }}>
        <Typography
          sx={{
            fontFamily: "poppins",
            fontSize: "16px",
            fontWeight: "500",
            color: "#DC7000",
          }}
        >
          Lorem ipsum
        </Typography>
        <Typography
          sx={{ fontFamily: "poppins", fontSize: {xs:'24px',md:"28px"}, fontWeight: "600",lineHeight:'138%' }}
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.{" "}
        </Typography>
        <Typography
          sx={{ fontFamily: "poppins", fontSize: "16px", fontWeight: "00" }}
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries,
        </Typography>
      </Stack>
    </Box>
  );
}

export default OurMission;
