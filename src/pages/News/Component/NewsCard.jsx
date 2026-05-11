import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import Divider from "@mui/material/Divider";

import image from "../../../../public/Newscard.jpg";
import image2 from "../../../../public/Newscard2.jpg";
function NewsCard() {
  return (
    <Stack sx={{ width: "100%" }}>
      <Box
        component="img"
        src={image}
        sx={{
        //   width: { xs: "100%" },
          height: { lg: "280px" },
          borderRadius: "20px",
        }}
      />
      <Stack spacing={2} sx={{ mt: "20px" }}>
        <Stack
          direction={"row"}
          spacing={1}
          sx={{ pt: { xs: "10px", md: "25px" } }}
        >
          <Box
            sx={{
              px: "20px",
              py: "5px",
              bgcolor: "blue",
            }}
          >
            <Typography
              sx={{
                color: "#FFFCFC",
                textAlign: "center",
                fontSize: { xs: "10px", md: "16px" },
              }}
            >
              John smash
            </Typography>
          </Box>
          <Typography
            sx={{
              fontFamily: "poppins",
              fontSize: "14px",
              fontWeight: "400",
              pt: "10px",
            }}
          >
            .5min
          </Typography>
        </Stack>
        <Typography
          sx={{
            fontSize: { xs: "20px", md: "30px" },
            fontWeight: "600",
            fontFamily: "poppins",
          }}
        >
          Lorem Ipsum is simply dummy text dummy text{" "}
        </Typography>

        <Typography
          sx={{
            fontSize: { xs: "12px", md: "17px" },
            fontWeight: "400",
            fontFamily: "poppins",
            lineHeight: "160%",
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
            fontSize: { xs: "12px", md: "17px" },
            fontWeight: "400",
            fontFamily: "poppins",
            lineHeight: "170%",
            color: "#515151",
          }}
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.{" "}
        </Typography>
      </Stack>
      <Divider
        orientation="horizental"
        bgcolor="#A5A5A5"
        variant="middle"
        sx={{ mt: "60px" }}
      />
      <Box sx={{display:{xs:'block',md:'none',lg:'block'}}}>
        <Box
        component="img"
        src={image2}
        sx={{
        //   width: { xs: "100%" },
          height:  "280px" ,
          borderRadius: "20px",
          mt: "50px",
          objectFit:'cover'
        }}
      />
      <Stack spacing={2} sx={{ mt: "20px", width: "95%" }}>
        <Stack
          direction={"row"}
          spacing={1}
          sx={{ pt: { xs: "10px", md: "25px" } }}
        >
          <Box
            sx={{
              px: "20px",
              py: "5px",
              bgcolor: "blue",
            }}
          >
            <Typography
              sx={{
                color: "#FFFCFC",
                textAlign: "center",
                fontSize: { xs: "10px", md: "16px" },
              }}
            >
              John smash
            </Typography>
          </Box>
          <Typography
            sx={{
              fontFamily: "poppins",
              fontSize: "14px",
              fontWeight: "400",
              pt: "10px",
            }}
          >
            .5min
          </Typography>
        </Stack>
        <Typography
          sx={{
            fontSize: { xs: "20px", md: "30px" },
            fontWeight: "600",
            fontFamily: "poppins",
          }}
        >
          Lorem Ipsum is simply dummy text dummy text{" "}
        </Typography>

        <Typography
          sx={{
            fontSize: { xs: "12px", md: "17px" },
            fontWeight: "400",
            fontFamily: "poppins",
            lineHeight: "170%",
            color: "#515151",
          }}
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries,
        </Typography>
      </Stack>
      </Box>
    </Stack>
  );
}

export default NewsCard;
