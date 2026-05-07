import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import image from "../../../../public/ServiceList.png";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
function ServicesList() {
  return (
    <Box sx={{ width: "100%", height: "max-content" ,}}>
      <Box sx={{ width: "85%", mx: "auto", display: "flex",flexDirection:{xs:'column-reverse',md:'row'}, gap: 6 }}>
        <Box
          sx={{
            position: "relative",
            width: "100%",
            maxWidth: 600,
            height:{xs:'50%',md:'100%'},
            borderRadius: "12px",
            overflow: "hidden",
            cursor: "pointer",
          }}
        >
          <Box
            component="img"
            src={image}
            alt=""
            sx={{
              width: "100%",
              height: { xs: "200px", md: "360px" },
              display: "block",
            }}
          />

          <Box
            sx={{
              position: "absolute",
              inset: 0,
              bgcolor: "rgba(0,0,0,0.3)",
            }}
          />
        </Box>

        <Stack spacing={3}>
          <Typography
            sx={{ fontFamily: "poppins", fontSize: "30px", fontWeight: "700" }}
          >
            Lorem Ipsum is simply dummy text.
          </Typography>
          <Typography  sx={{ fontFamily: "poppins", fontSize: "14px", fontWeight: "400" }}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.Lorem Ipsum is simply dummy .
           </Typography>
           <Typography sx={{ fontFamily: "poppins", fontSize: "15px", fontWeight: "400",}}><CheckCircleIcon sx={{ fontSize: 15 }}  color="success"/>  Lorem Ipsum is simply</Typography>
           <Typography sx={{ fontFamily: "poppins", fontSize: "15px", fontWeight: "400" }}> <CheckCircleIcon sx={{ fontSize: 15 }}  color="success"/>  Lorem Ipsum is simply</Typography>
           <Typography sx={{ fontFamily: "poppins", fontSize: "15px", fontWeight: "400" }}> <CheckCircleIcon sx={{ fontSize: 15 }}  color="success"/>  Lorem Ipsum is simply</Typography>
           <Typography sx={{ fontFamily: "poppins", fontSize: "15px", fontWeight: "400" }}> <CheckCircleIcon sx={{ fontSize: 15 }}  color="success"/>  Lorem Ipsum is simply</Typography>
        </Stack>
      </Box>
    </Box>
  );
}

export default ServicesList;
