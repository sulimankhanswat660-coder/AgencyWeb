import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Avatar,
  Rating,
  IconButton,
  Stack,
  Card,
} from "@mui/material";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
const cardData = [
  {
    name: "Viezh Robert",
    data: Date.now(),
    rating: "4.5",
    avatar: "../../../../public/swat.jpeg",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
  },
  {
    name: "Viezh Robert",
    data: Date.now(),
    rating: "4.5",
    avatar: {image1},
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
  },
  {
    name: "Viezh Robert",
    data: Date.now(),
    rating: "4.5",
    avatar: "../../../../public/Suliman.png",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
  },
];
export default function Testimonial() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "max-content",
        my: "70px",
        py: "50px",
        bgcolor: "#DDDDDD",
      }}
    >
      <Stack spacing={3} sx={{ width: { xs: "90%", md: "40%" }, mx: "auto" }}>
        <Typography
          sx={{
            color: "#0B132A",
            fontSize: { xs: "23px", md: "35px" },
            fontWeight: "600",
            fontFamily: "poppins",
            lineHeight: "50px",
            textAlign: "center",
          }}
        >
          Trusted by Thousands of Happy Customer
        </Typography>
        <Typography
          sx={{
            color: "#525252",
            fontSize: { xs: "12px", md: "14px" },
            fontWeight: "400",
            fontFamily: "poppins",
            lineHeight: "188%",
            textAlign: "center",
          }}
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.Lorem Ipsum is simply dummy .{" "}
        </Typography>
      </Stack>
      <Box
        sx={{
          width: "90%",
          margin: "auto",
          marginBlock: "50px",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: { xs: "15px", md: "10px" },
        }}
      >
        {cardData.map((item, i) => {
          return (
            <Card
              key={i}
              sx={{
                borderRadius: "10px",
              }}
            >
              <CardHeader
                avatar={
                  <Avatar
                    src={item.avatar}
                    sx={{ width: 56, height: 56, bgcolor: "red[500] " }}
                    aria-label="recipe"
                  />
                }
                action={
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 0.5,
                      mt: "16px",
                      mr: { xs: "2px", sm: "10px" },
                    }}
                  >
                    <Typography fontWeight={500}>{item.rating}</Typography>

                    <Rating value={1} readOnly max={1} size="small" />
                  </Box>
                }
                title={item.name}
                subheader={item.data}
              />
              <CardContent>
                <Typography
                  sx={{
                    fontFamily: "poppins",
                    fontSize: "14px",
                    color: "#525252",
                  }}
                >
                  {item.description}
                </Typography>
              </CardContent>
            </Card>
          );
        })}
      </Box>
      <Box
        sx={{
          display: "flex",
          width: "90%",
          margin: "auto",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: { xs: "column", sm: "row" },
          gap: 3,
        }}
      >
        {/* DOTS */}
        <Box
          sx={{
            display: "flex",
            gap: 1,
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              width: 40,
              height: 12,
              borderRadius: "20px",
              bgcolor: "#E87D0E",
            }}
          />

          {[1, 2, 3].map((item) => (
            <Box
              key={item}
              sx={{
                width: " 12px",
                height: "12px",
                borderRadius: "50%",
                bgcolor: "#828384",
              }}
            />
          ))}
        </Box>

        {/* BUTTONS */}
        <Box sx={{ display: "flex", gap: 2 }}>
          <IconButton
            sx={{
              border: "2px solid #E87D0E",
              color: "#E87D0E",
              width: 50,
              height: 50,
            }}
          >
            <ArrowBackIcon />
          </IconButton>

          <IconButton
            sx={{
              bgcolor: "#E87D0E",
              color: "#fff",
              width: 50,
              height: 50,
              "&:hover": {
                bgcolor: "#cf6f0c",
              },
            }}
          >
            <ArrowForwardIcon />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
}
