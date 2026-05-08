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
import image1 from "../../../../public/swat.jpeg";
import image2 from "../../../../public/Suliman.png";
import image3 from "../../../../public/shakir.jpeg";


export default function Testimonial() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "max-content",
        my: "80px",
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
          width: { md: "90%" },
          mx: "auto",
          pt: "50px",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap:{ xs:"15px",md:'10px'},
        }}
      >
        <Card
          sx={{
            width: { xs: "90%", md: "28%" },
            ml: { xs: "20px" },
            borderRadius: "10px",
          }}
        >
          <CardHeader
            avatar={
              <Avatar
                src={image2}
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
                <Typography fontWeight={500}>4.5</Typography>

                <Rating value={1} readOnly max={1} size="small" />
              </Box>
            }
            title="Shrimp and Chorizo Paella"
            subheader="September 14, 2016"
          />
          <CardContent>
            <Typography
              sx={{ fontFamily: "poppins", fontSize: "14px", color: "#525252" }}
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s,
            </Typography>
          </CardContent>
        </Card>
        <Card
          sx={{
            width: { xs: "90%", md: "28%" },
            ml: { xs: "20px" },
            borderRadius: "10px",
          }}
        >
          <CardHeader
            avatar={<Avatar src={image1} sx={{ width: 56, height: 56 }} />}
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
                <Typography fontWeight={500}>4.5</Typography>

                <Rating value={1} readOnly max={1} size="small" />
              </Box>
            }
            title="Muhammad Suliman"
            subheader="September 14, 2016"
          />
          <CardContent>
            <Typography
              sx={{ fontFamily: "poppins", fontSize: "14px", color: "#525252" }}
            >
              Lorem Ipsum is simply dummy text of the printing and{" "}
            </Typography>
          </CardContent>
        </Card>
        <Card
          sx={{
            width: { xs: "90%", md: "28%" },
            ml: { xs: "20px" },
            borderRadius: "10px",
          }}
        >
          <CardHeader
            avatar={
              <Avatar
              src={image3}
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
                <Typography fontWeight={500}>4.5</Typography>

                <Rating value={1} readOnly max={1} size="small" />
              </Box>
            }
            title="Shakir Ullah"
            subheader="September 14, 1996"
          />
          <CardContent>
            <Typography
              sx={{ fontFamily: "poppins", fontSize: "14px", color: "#525252" }}
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </Typography>
          </CardContent>
        </Card>
      </Box>

    </Box>
  );
}
