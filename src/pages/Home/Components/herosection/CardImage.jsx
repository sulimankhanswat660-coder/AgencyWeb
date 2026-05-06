import React from "react";
import card1 from "../../../../../public/Card1.jpg";

import card2 from "../../../../../public/Card2.jpg";
import card3 from "../../../../../public/Card3.jpg";
import card4 from "../../../../../public/Card4.jpg";
import card5 from "../../../../../public/Card5.jpg";
import card6 from "../../../../../public/Card6.jpg";

import { Box } from "@mui/material";

function CardImage() {
  return (
    <>
      <Box
        component="img"
        src={card1}
        alt="example"
        sx={{ width:{xs:'100%',sm:'372px'}, height:{xs:' 223px'}, borderRadius: "20px" }}
      />
      <Box
        component="img"
        src={card2}
        alt="example"
        sx={{ width:{xs:'100%',sm:'372px'}, height: {xs:'223px'}, borderRadius: "20px" }}
      />
      <Box
        component="img"
        src={card3}
        alt="example"
        sx={{
          width: { xs: "100%", sm: "332px" },
          height: { xs:"223px" },
          borderRadius: "20px",
        }}
      />
      <Box
        component="img"
        src={card4}
        alt="example"
        sx={{
        display:{xs:'none',md:'block'},
          width:'246px',
          height:'223px',
          objectFit:'cover',
          borderRadius: "20px",
        }}
      />
       <Box
        component="img"
        src={card5}
        alt="example"
        sx={{
        display:{xs:'none',md:'block'},
          width:'400px',
          height:'223px',
          borderRadius: "20px",
        }}
      />
       <Box
        component="img"
        src={card6}
        alt="example"
      
        sx={{
          width:{xs:'100%',sm:'430px'},
          height:{xs:'223px'},
          borderRadius: "20px",
        }}
      />
    </>
  );
}

export default CardImage;
