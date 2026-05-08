import React from "react";
import { Box, Container, IconButton, Stack, Typography } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
function Footer() {
  return (
    // <Container maxWidth={"xl"}>
    <Box sx={{ height: {xs:'50px',md:'320px'}, bgcolor: "#1B1B1B", width:'100%' ,mt:'0'}}>
      <Box
        sx={{
          height: "161px",
          mx: {md:'80px',lg:'120px'},
          py: {md:'30px',lg:'50px'},
          display: {xs:'none', md:'flex'},
          color: "white",
          // fontSize:{md:'14px'},
          justifyContent: "space-between",
          gap: "50px",
        }}
      >
        <Stack direction={"column"} spacing={"20px"}>
          <Typography variant="h6" fontWeight="bold">
            LOGO
          </Typography>
          <Typography component={"p"} variant="body2">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.{" "}
          </Typography>
          <Typography component={"p"}>@Company.com</Typography>
        </Stack>
        <Stack direction={"column"} spacing={"20px"}  width="150px">
          <Typography variant="body1" fontWeight="500">
            About us
          </Typography>
          <Typography  fontWeight="400" variant="body2">
            <ul
              style={{
                listStyle: "none",
                lineHeight: "1.9",
              }}
            >
              <li>Company</li>
              <li>Protfolio</li>
              <li>Careers</li>
              <li>Contact us</li>
            </ul>
          </Typography>
        </Stack>
        <Stack direction={"column"} spacing={"20px"}>
          <Typography variant="body1" fontWeight="500">
            Contact us
          </Typography>
          <Typography component={"p"} variant="body2">
            Lorem Ipsum is simply dummy text of the printing and typesetting{" "}
            <br />
            industry.{" "}
          </Typography>
          <Typography variant="body2">+9000 0000 0000</Typography>
        </Stack>
        <Stack
          direction={"column"}
          spacing={"20px"}
          sx={{ width: "184px", mt:'100px' }}
        >
          <Stack spacing={2} direction={"row"}>
            <FacebookIcon sx={{ fontSize: 30 }} />
            <InstagramIcon sx={{ fontSize: 30 }} />
            <TwitterIcon sx={{ fontSize: 30 }} />
            <LinkedInIcon sx={{ fontSize: 30 }} />
          </Stack>
        </Stack>
      </Box>
      <Box
        color={"white"}
        sx={{
          mt: { sm:'30px',lg:'80px'},

          height: {xs:'50px',md:'120px',lg:'80px'},
          fontSize:{sm:'12px',md:'14',lg:'16px'},
          display: 'flex',
          justifyContent:  {xs:'center'},

          alignItems: {xs:'center',},
          borderTop: "0.8px solid #D2D2D2",
        }}
      >
        <Typography variant="body2" >
          Copyright ® 2026 Company All rights Rcerved
        </Typography>
      </Box>
    </Box>

    // </Container>
  );
}

export default Footer;
