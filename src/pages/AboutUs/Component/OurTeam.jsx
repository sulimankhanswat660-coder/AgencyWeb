import { Avatar, Box, Stack, Typography } from "@mui/material";
import React from "react";
import Av1 from "../../../../public/Avtar1.png";
import Av2 from "../../../../public/Avtar2.png";
import Av3 from "../../../../public/Avtar3.png";
import Av4 from "../../../../public/Avtar4.png";

function OurTeam() {
  return (
    <Box sx={{ width: "100%", height: "max-content", my: "80px" }}>
      <Stack spacing={5} sx={{ width: "90%", pl: { xs: "15px", md: "70px" } }}>
        <Typography
          sx={{ fontFamily: "poppins", fontSize: "25px", fontWeight: "600" }}
        >
          Our Team
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: "20px",
            justifyContent: "center",
          }}
        >
          {card.map((item) => (
            <Box
              sx={{
                width: "100%",
                maxWidth: { xs: "90%", xs: "250px" },
                bgcolor: "#f2f2f2",
                borderRadius: "20px",
                py: { xs: 4, sm: 5 },
                textAlign: "center",
              }}
            >
              <Avatar
                src={item.image}
                alt="John Peter"
                sx={{
                  width: 80,
                  height: 80,
                  mx: "auto",
                  mb: 2,
                }}
              />
              <Typography
                variant="h6"
                sx={{
                  fontWeight: "bold",
                }}
              >
                {item.name}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: "text.secondary",
                  letterSpacing: "1px",
                }}
              >
                {item.co}
              </Typography>
            </Box>
          ))}
        </Box>
      </Stack>
    </Box>
  );
}

export default OurTeam;

const card = [
  { image: Av4, name: "John peter", co: "COO" },
  { image: Av3, name: "John peter", co: "COO" },

  { image: Av2, name: "John peter", co: "COO" },
  { image: Av1, name: "John peter", co: "COO" },
];
