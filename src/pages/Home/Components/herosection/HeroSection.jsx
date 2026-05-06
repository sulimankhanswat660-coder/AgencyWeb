import { Box, Button, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import img1 from "../../../../../public/jevi-web-studio-ar-vr 1.svg";
import { Rowing } from "@mui/icons-material";
import { nnNO } from "@mui/material/locale";
const HeroSection = () => {
  return (
    <Box
      sx={{
        width: "100%",
        bgcolor: "#f5f5f5",
        pt: { xs: "30px", lg: "100px" },
      }}
    >
      <Box
        sx={{
          maxWidth: "1190px",
          height: { xs: "450px", lg: "590px" },
          ml: { xs: "20px", md: "60px", lg: "135px" },
          mt: "50px",
        }}
      >
        <Grid container spacing={2}>
          <Grid size={{ xs: 12, md: 4 }}>
            <Box sx={{ width: { lg: "480px" }, height: "282px" }}>
              <Typography
                variant="body"
                sx={{
                  fontSize: { lg: "20px" },
                  fontWeight: "700",
                  color: "#E87D0E",
                }}
              >
                Digital Marketings
              </Typography>
              <Typography
                variant="h4"
                sx={{ fontSize: { lg: "50px" }, fontWeight: "700", pt: "30px" }}
              >
                Work that we produce for our clients
              </Typography>
              <Typography
                sx={{
                  fontSize: "16px",
                  textAlign: { sx: "center" },
                  py: { xs: "20px", lg: "20px" },
                }}
                fontWeight="600"
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard.
              </Typography>

              <Button
                disableElevation
                sx={{
                  color: "white",
                  backgroundColor: "#E87D0E",
                  borderRadius: "100px",
                  px: "20px",
                  py: "10px",
                  mt: "50px",
                  textTransform: "none",
                  boxShadow: "none",
                  "&:hover": {
                    backgroundColor: "#d96f0c",
                    boxShadow: "none",
                  },
                }}
              >
                Get more detail
              </Button>
            </Box>
          </Grid>
          <Grid
            size={{ sx: 12, lg: 8 }}
            sx={{ display: { xs: "none", md: "block" } }}
          >
            <Box
              sx={{
                ml: "50px",
                width: { md: "470px", lg: "600px" },
                height: { md: "450px", lg: "500px" },
              }}
            >
              <img src={img1} alt="" width={"100%"} height={"100%"} />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default HeroSection;
