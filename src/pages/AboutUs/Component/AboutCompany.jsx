import { Box, CardHeader, Typography } from "@mui/material";
import React from "react";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
function AboutCompany() {
  return (
    <Box sx={{ width: "100%", p: 3,mt:4 }}>
      <Box
        sx={{
          width: { xs: "100%", md: "80%" },
          margin:'auto'
        }}
      >
        <Typography
          sx={{
            fontSize: "25px",
            fontWeight: "600",
            fontFamily: "Poppins",
            my:5
          }}
        >
          Why work with us
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: { xs: "center", sm: "space-between" },
            alignContent: "center",
            
            width:'100%'
          }}
        >
          {services.map((item, index) => (
            <Box
              sx={{
                maxWidth: { xs: "300px" },
                height: "328px",
                bgcolor: "#f2f2f2",
                borderRadius: "20px",
                p: { xs: 3, sm: 4 },
                my: { xs: "20px" },
              }}
            >
              <Box
                sx={{
                  display: "inline-block",
                  bgcolor: `${item.btnBgcolor}`,
                  color: `${item.btnColor}`,
                  px: 2,
                  py: 0.8,
                  borderRadius: "10px",
                  fontSize: "14px",
                  fontWeight: 500,
                  mb: 2,
                  mt: 4,
                }}
              >
                {item.btn}
              </Box>

              <Typography
                variant="h6"
                sx={{
                  fontWeight: "bold",
                  mb: 1.5,
                }}
              >
                {item.title}
              </Typography>

              <Typography
                variant="body2"
                sx={{
                  color: "text.secondary",
                  lineHeight: 1.7,
                }}
              >
                {item.discription}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

export default AboutCompany;

const services = [
  {
    btn: "Lorem ipsum",
    title: "Lorem Ipsum",
    btnColor: "#B000DC",
    btnBgcolor: "#B000DC1C",
    discription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
  },
  {
    btn: "Lorem ipsum",
    btnColor: "#DC1A00",
    btnBgcolor: "#DC42001C",
    title: "Lorem Ipsum",
    discription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
  },
  {
    btn: "Lorem ipsum",
    btnColor: "#00DC72",
    btnBgcolor: "#00DC8D1C",
    title: "Lorem Ipsum",
    discription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
  },
];
