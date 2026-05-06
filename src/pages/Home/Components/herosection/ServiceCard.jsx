import React from "react";
import { Box, Grid, Typography, IconButton } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import ComputerIcon from "@mui/icons-material/Computer";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import ViewInArIcon from "@mui/icons-material/ViewInAr";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import CategoryIcon from "@mui/icons-material/Category";

const services = [
  { id: 1, title: "Mobile Game Development", icon: <PhoneIphoneIcon /> },
  { id: 2, title: "PC Game Development", icon: <ComputerIcon /> },
  { id: 3, title: "PS4 Game Development", icon: <SportsEsportsIcon /> },
  { id: 4, title: "AR/VR Solutions", icon: <ViewInArIcon /> },
  { id: 4, title: "AR/VR Design", icon: <DesignServicesIcon /> },
  { id: 4, title: "3D Modelings", icon: <CategoryIcon /> },
];

export default function ServiceCard() {
  return (
    <Box sx={{ maxHeight: "max-content" }}>
      <Grid container spacing={12} justifyContent="center">
        {services.map((item, index) => (
          <Grid
            item
            xs={12}
            md={3}
            key={index}
            sx={{
              textAlign: "center",
              display: { xs: item.id === 4  ? "none" : "block",lg:'block' },
            }}
          >
            <Box
              sx={{
                width: 60,
                height: 60,
                borderRadius: "50%",
                backgroundColor: "#f5e6d8",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                mx: "auto",
                mb: 2,
                color: "#E87D0E",
              }}
            >
              {item.icon}
            </Box>

            <Typography
              sx={{ fontSize: "16px", fontWeight: "500", mb: { xs: "20px" } }}
            >
              {item.title}
            </Typography>

            <IconButton sx={{ color: "#E87D0E" }}>
              <ArrowForwardIcon />
            </IconButton>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
