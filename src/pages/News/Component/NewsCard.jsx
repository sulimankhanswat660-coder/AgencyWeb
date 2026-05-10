import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import image1 from "../../../../public/NCard1.jpg";
import image2 from "../../../../public/NCard2.jpg";
import image3 from "../../../../public/NCard3.jpg";
import image4 from "../../../../public/NCard4.jpg";
import image5 from "../../../../public/NCard5.jpg";
import image6 from "../../../../public/NCard6.jpg";
import image7 from "../../../../public/NCard7.jpg";

const cardData = [
  {
    id: 1,
    image: image1,
    bgcolor: "#000",
    title: "John smash",
    time: ".5min",
    heading: "Lorem Ipsum is simply dummy text dummy text",
    hideOnMobile: false,
  },
  {
    id: 2,
    image: image2,
    bgcolor: "#2351F5",
    title: "John smash",
    time: ".5min",
    heading: "Lorem Ipsum is simply dummy text dummy text",
    hideOnMobile: false,
  },
  {
    id: 3,
    image: image3,
    bgcolor: "#FF7C32",
    title: "John smash",
    time: ".5min",
    heading: "Lorem Ipsum is simply dummy text dummy text",
    hideOnMobile: false,
  },
  {
    id: 4,
    image: image5,
    bgcolor: "#2351F5",
    title: "John smash",
    time: ".5min",
    heading: "Lorem Ipsum is simply dummy text dummy text",
    hideOnMobile: false,
  },
  {
    id: 5,
    image: image4,
    bgcolor: "#23A54F",
    title: "John smash",
    time: ".5min",
    heading: "Lorem Ipsum is simply dummy text dummy text",
    hideOnMobile: true,
  },
  {
    id: 6,
    image: image6,
    bgcolor: "#2351F5",
    title: "John smash",
    time: ".5min",
    heading: "Lorem Ipsum is simply dummy text dummy text",
    hideOnMobile: true,
  },
  {
    id: 7,
    image: image7,
    bgcolor: "#9921C3",
    title: "John smash",
    time: ".5min",
    heading: "Lorem Ipsum is simply dummy text dummy text",
    hideOnMobile: true,
  },
];
function NewsCard() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 6 }}>
      {cardData.map((item) => (
        <Stack
          key={item.id}
          direction={"row"}
          sx={{
            gap: { xs: "15px", md: "30px" },
            display: {
              xs: item.hideOnMobile=== true ? "none" : "flex",
              lg: "flex",
            },
          }}
        >
          <Box
            src={item.image}
            component="img"
            sx={{
              width: { xs: "101px", md: "175px" },
              height: { xs: "91px", md: "163px" },
              borderRadius: "20px",
            }}
          />
          <Stack sx={{ gap: { xs: "20px", md: "30px" } }}>
            <Stack
              direction={"row"}
              spacing={1}
              sx={{ pt: { xs: "10px", md: "25px" } }}
            >
              <Box
                sx={{
                  width: { xs: "40%", md: "30%" },
                  height: "100%",
                  bgcolor: `${item.bgcolor}`,
                }}
              >
                <Typography
                  sx={{
                    color: "#FFFCFC",
                    textAlign: "center",
                    pt: "2px",
                    fontSize: { xs: "10px", md: "16px" },
                  }}
                >
                  {item.title}
                </Typography>
              </Box>
              <Typography
                sx={{
                  fontFamily: "poppins",
                  fontSize: "14px",
                  fontWeight: "400",
                }}
              >
                {item.time}
              </Typography>
            </Stack>
            <Typography
              sx={{
                fontFamily: "poppins",
                fontSize: { xs: "13px", md: "20px" },
                fontWeight: "600",
              }}
            >
              {item.heading}
            </Typography>
          </Stack>
        </Stack>
      ))}
    </Box>
  );
}

export default NewsCard;
