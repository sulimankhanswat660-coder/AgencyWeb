import { Box, Link, Container, Stack, Typography } from "@mui/material";
import React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Divider from "@mui/material/Divider";
import PersonIcon from "@mui/icons-material/Person";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import StorageIcon from "@mui/icons-material/Storage";

function ServiceHero() {
  return (
    <Box sx={{ my: {xs:'50px',md:"100px"}, width: "100%", height: "max-content" }}>
      <Box
        sx={{
          width: "90%",
          margin: "auto",
        }}
      >
        <Stack
          spacing={2}
          sx={{
            py: { xs: "20px" },
            width: { xs: "100%" },
            textAlign: "center",
          }}
        >
          <Breadcrumbs
            separator="›"
            aria-label="breadcrumb"
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Link color="#848484" href="/" underline="none">
              Home
            </Link>
            <Link underline="none" color="#DF7C14" href="/services">
              Services
            </Link>
          </Breadcrumbs>
          <Typography
            sx={{
              fontFamily: "poppins",
              fontSize: { xs: "25px", md: "30px" },
              fontWeight: "600",
            }}
          >
            Lorem Ipsum is simply dummy text of the printing and.
          </Typography>
          <Typography
            sx={{
              fontFamily: "poppins",
              fontSize: { xs: "12px", md: "16px" },
              fontWeight: "500",
              color: "#898989",
              lineHeight: { xs: "150%", md: "100%" },
            }}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.{" "}
          </Typography>
        </Stack>
        <Box sx={{ width: "100%", pt: "40px", mx: "auto" }}>
          <Box sx={{ bgcolor: "#f5f5f5", borderRadius: "16px", pb: { xs: 3 } }}>
            <Box
              sx={{
                bgcolor: "#fff",
                borderRadius: "16px",
                p: { xs: 3, md: 6 },
              }}
            >
              <Stack
                direction={{ xs: "column", sm: "row" }}
              
                divider={
                  <Divider
                    orientation="vertical"
                    flexItem
                    sx={{
                      display: { xs: "none", md: "block" },
                      height: "70px",
                    }}
                  />
                }
                spacing={{ xs: 3, md: 0 }}
              >
                {stats.map((item, index) => (
                  <Stack
                    key={index}
                    direction="row"
                    alignItems="center"
                    spacing={2}
                    sx={{ width: "100%", justifyContent: "center" }}
                  >
                    <Box
                      sx={{
                        width: 50,
                        height: 50,
                        borderRadius: "50%",
                        bgcolor: "#fdeee4",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#E87D0E",
                      }}
                    >
                      {item.icon}
                    </Box>

                    <Box>
                      <Typography fontWeight="bold">{item.value}</Typography>
                      <Typography variant="body2" color="text.secondary">
                        {item.label}
                      </Typography>
                    </Box>
                  </Stack>
                ))}
              </Stack>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default ServiceHero;

const stats = [
  {
    icon: <PersonIcon />,
    value: "90+",
    label: "Clients",
  },
  {
    icon: <LocationOnIcon />,
    value: "30+",
    label: "Countries",
  },
  {
    icon: <StorageIcon />,
    value: "50+",
    label: "Projects",
  },
];
