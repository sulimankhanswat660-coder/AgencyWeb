import React from "react";
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Stack,
} from "@mui/material";

export default function Contact() {
  return (
    <Box sx={{ py: { xs: 4, md: 8, lg: 12 }, pl:{xs:'5px',lg:'35px'} }}>
      <Container maxWidth="lg" sx={{fontFamily:'poppins'}}>
        <Typography variant="h5" fontWeight="600" gutterBottom fontSize={'30px'}>
          Lorem Ipsum
        </Typography>

        <Typography variant="body1" sx={{fontSize:'16px',color:'#525252'}} mb={4}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </Typography>

        <Box
          sx={{
            bgcolor: "#121212",
            color: "#fff",
            borderRadius: "16px",
            mt:'60px',
            p: { xs: 3, md: 5 },
          }}
        >
          <Stack
            direction={{ xs: "column", md: "row" }}
            spacing={3}
            alignItems={{ xs: "flex-start", md: "center" }}
            justifyContent="space-between"
          >
            <Box>
              <Typography variant="h6" fontWeight="bold" mb={1}>
                Stay in the loop
              </Typography>

              <Typography variant="body2" color="#fff">
                Subscribe to receive the latest news and updates about TDA.
                <br />
                We promise not to spam you!
              </Typography>
            </Box>
            <Stack
              direction="row"
              alignItems="center"
              sx={{
                width: {xs:"100%",lg:'50%'},
                bgcolor: "#fff",
                pr:'10px',
                borderRadius: "8px",
                overflow: "hidden",
              }}
            >
              <TextField
                placeholder="Enter email address"
                variant="outlined"
                size="medium"

                sx={{
                  flex: 1,
                  "& fieldset": { border: "none" },
                }}
              />

              <Button
                variant="contained"
                sx={{
                  size:{xs:'small'},
                  bgcolor: "#E87D0E",
                  px: { xs: 2, sm: 3 }, 
                  borderRadius: 2,
                  flexShrink: 0, 
                  whiteSpace: "nowrap", 
                }}
              >
                Continue
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}
