import React from "react";
import Avtar from "../../../../public/Avtar2.png";
import {
  Box,
  Container,
  Typography,
  Grid,
  Avatar,
  Rating,
  IconButton,
  Stack,
} from "@mui/material";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const testimonials = [
  {
    name: "Viezh Robert",
    country: "Warsaw, Poland",
    rating: 4.5,
    image: "Avtar",
    desc: `Lorem Ipsum is simply dummy text of the printing and
    typesetting industry. Lorem Ipsum has been the industry's
    standard dummy text ever since the 1500s,`,
    active: true,
  },

  {
    name: "Yessica Christy",
    country: "Shanxi, China",
    rating: 4.5,
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    desc: `Lorem Ipsum is simply dummy text of the printing and`,
  },

  {
    name: "Kim Young Jou",
    country: "Seoul, South Korea",
    rating: 4.5,
    image: "https://randomuser.me/api/portraits/men/46.jpg",
    desc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.`,
  },
];

export default function TestimonialSection() {
  return (
    // <Box
    //   sx={{
    //     py: { xs: 6, md: 10 },
    //     bgcolor: "#fff",
    //   }}
    // >
    //   <Container maxWidth="lg">
    //     {/* TOP HEADING */}
    //     <Box textAlign="center" mb={8}>
    //       <Typography
    //         sx={{
    //           fontSize: { xs: "32px", md: "42px" },
    //           fontWeight: 700,
    //           color: "#0B132A",
    //           lineHeight: 1.3,
    //           mb: 2,
    //         }}
    //       >
    //         Trusted by Thousands of
    //         <br />
    //         Happy Customer
    //       </Typography>

    //       <Typography
    //         sx={{
    //           color: "#6c6c6c",
    //           fontSize: "15px",
    //           maxWidth: "550px",
    //           mx: "auto",
    //           lineHeight: 1.8,
    //         }}
    //       >
    //         Lorem Ipsum is simply dummy text of the printing and
    //         typesetting industry.Lorem Ipsum is simply dummy .
    //       </Typography>
    //     </Box>

    //     {/* CARDS */}
    //     <Grid container spacing={4}>
    //       {testimonials.map((item, index) => (
    //         <Grid item xs={12} md={3} key={index}>
    //           <Box
    //             sx={{
    //               border: item.active
    //                 ? "2px solid #E87D0E"
    //                 : "1px solid #ddd",
    //               borderRadius: "14px",
    //               p: 3,
    //               height: "100%",
    //               transition: "0.3s",
    //               "&:hover": {
    //                 transform: "translateY(-5px)",
    //                 boxShadow: 3,
    //               },
    //             }}
    //           >
    //             {/* TOP */}
    //             <Box
    //               sx={{
    //                 display: "flex",
    //                 justifyContent: "space-between",
    //                 alignItems: "center",
    //                 mb: 3,
    //               }}
    //             >
    //               {/* LEFT */}
    //               <Box
    //                 sx={{
    //                   display: "flex",
    //                   alignItems: "center",
    //                   gap: 2,
    //                 }}
    //               >
    //                 <Avatar src={item.image} />

    //                 <Box>
    //                   <Typography
    //                     sx={{
    //                       fontWeight: 600,
    //                       color: "#0B132A",
    //                     }}
    //                   >
    //                     {item.name}
    //                   </Typography>

    //                   <Typography
    //                     sx={{
    //                       fontSize: "14px",
    //                       color: "#777",
    //                     }}
    //                   >
    //                     {item.country}
    //                   </Typography>
    //                 </Box>
    //               </Box>

    //               {/* RATING */}
    //               <Box
    //                 sx={{
    //                   display: "flex",
    //                   alignItems: "center",
    //                   gap: 0.5,
    //                 }}
    //               >
    //                 <Typography fontWeight={500}>
    //                   {item.rating}
    //                 </Typography>

    //                 <Rating
    //                   value={1}
    //                   readOnly
    //                   max={1}
    //                   size="small"
    //                 />
    //               </Box>
    //             </Box>

    //             {/* DESCRIPTION */}
    //             <Typography
    //               sx={{
    //                 color: "#4F5665",
    //                 lineHeight: 1.9,
    //                 fontSize: "15px",
    //               }}
    //             >
    //               {item.desc}
    //             </Typography>
    //           </Box>
    //         </Grid>
    //       ))}
    //     </Grid>

    //     {/* BOTTOM */}
    //     <Box
    //       sx={{
    //         mt: 6,
    //         display: "flex",
    //         justifyContent: "space-between",
    //         alignItems: "center",
    //         flexDirection: { xs: "column", sm: "row" },
    //         gap: 3,
    //       }}
    //     >
    //       {/* DOTS */}
    //       <Box
    //         sx={{
    //           display: "flex",
    //           gap: 1,
    //           alignItems: "center",
    //         }}
    //       >
    //         <Box
    //           sx={{
    //             width: 40,
    //             height: 12,
    //             borderRadius: "20px",
    //             bgcolor: "#E87D0E",
    //           }}
    //         />

    //         {[1, 2, 3].map((item) => (
    //           <Box
    //             key={item}
    //             sx={{
    //               width: 12,
    //               height: 12,
    //               borderRadius: "50%",
    //               bgcolor: "#DDE0E4",
    //             }}
    //           />
    //         ))}
    //       </Box>

    //       {/* BUTTONS */}
    //       <Box sx={{ display: "flex", gap: 2 }}>
    //         <IconButton
    //           sx={{
    //             border: "2px solid #E87D0E",
    //             color: "#E87D0E",
    //             width: 50,
    //             height: 50,
    //           }}
    //         >
    //           <ArrowBackIcon />
    //         </IconButton>

    //         <IconButton
    //           sx={{
    //             bgcolor: "#E87D0E",
    //             color: "#fff",
    //             width: 50,
    //             height: 50,
    //             "&:hover": {
    //               bgcolor: "#cf6f0c",
    //             },
    //           }}
    //         >
    //           <ArrowForwardIcon />
    //         </IconButton>
    //       </Box>
    //     </Box>
    //   </Container>
    // </Box>

    <Box
      sx={{
        width: "100%",
        height: "max-content",
        my: "80px",
        bgcolor: "#DDDDDD",
      }}
    >
      <Stack spacing={3} sx={{ width:{xs:'90%',md: "40%"}, mx: "auto" }}>
        <Typography
          sx={{
            color: "#0B132A",
            fontSize: {xs:'23px',md:"35px"},
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
            fontSize:  {xs:'12px',md:"14px"},
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
    </Box>
  );
}
