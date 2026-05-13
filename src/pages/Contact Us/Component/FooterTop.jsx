import React from "react";
import {
  Box,
  Stack,
  Typography,
  IconButton,
  Divider,
} from "@mui/material";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const FooterTop = () => {
  return (
   <Box sx={{width:'100%',height:'max-content',mb:'30px',mt:'-50px'}}>
    <Box sx={{width:'80%',mx:"auto"}}>
         <Box
      sx={{
      
        py: 4,
        px: { xs: 2, sm: 4, md: 8 },
      }}
    >
      <Stack
        direction={{ xs: "column", md: "row" }}
        alignItems={{ xs: "flex-start", md: "center" }}
        justifyContent="space-between"
        spacing={{ xs: 4, md: 2 }}
      >
        <Stack spacing={2} sx={{ width: "100%" }}>
          <Typography
            sx={{
              fontSize: "14px",
              fontWeight: 500,
              color: "#000",
            }}
          >
            Follow us
          </Typography>

          <Stack direction="row" spacing={1.5}>
            {[FacebookIcon,InstagramIcon, TwitterIcon, LinkedInIcon].map(
              (Icon, index) => (
                <IconButton
                  key={index}
                  sx={{
                    width: 40,
                    height: 40,
                    bgcolor: "#fff",
                    boxShadow: "0px 4px 10px rgba(0,0,0,0.08)",
                    "&:hover": {
                      bgcolor: "#fff",
                    },
                  }}
                >
                  <Icon sx={{ fontSize: 18, color: "#000" }} />
                </IconButton>
              )
            )}
          </Stack>
        </Stack>

        <Divider
          orientation="vertical"
          flexItem
          sx={{
            display: { xs: "none", md: "block" },
            borderColor: "#d9d9d9",
            mx: 2,
          }}
        />

        <Stack
          direction="row"
          spacing={2}
          alignItems="center"
          sx={{ width: "100%" }}
        >
          <PhoneInTalkIcon sx={{ color: "#000", fontSize: 28 }} />

          <Typography
            sx={{
              fontSize: "16px",
              color: "#6b6b6b",
            }}
          >
            +94 0000 00000
          </Typography>
        </Stack>

        <Divider
          orientation="vertical"
          flexItem
          sx={{
            display: { xs: "none", md: "block" },
            borderColor: "#d9d9d9",
            mx: 2,
          }}
        />

        <Stack
          direction="row"
          spacing={2}
          alignItems="flex-start"
          sx={{ width: "100%" }}
        >
          <LocationOnIcon sx={{ color: "#000", fontSize: 28 }} />

          <Typography
            sx={{
              fontSize: "16px",
              color: "#6b6b6b",
              maxWidth: "260px",
              lineHeight: 1.6,
            }}
          >
            but also the leap into electronic typesetting
          </Typography>
        </Stack>
      </Stack>
    </Box>
        
    </Box>


   </Box>
  );
};

export default FooterTop;