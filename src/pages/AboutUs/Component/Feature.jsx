import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import logo1 from '../../../../public/Logo.png'
import logo2 from '../../../../public/Logo2.png'
import logo3 from '../../../../public/Logo3.png'
import logo4 from '../../../../public/Logo4.png'
import logo5 from '../../../../public/Logo5.png'

function Feature() {
  return (
    <Box sx={{width:'100%',bgcolor:'#F5F5F5',height:'max-content'}}>
        <Stack spacing={8} sx={{pl:{xs:'20px',md:'70px'},py:'70px'}}>
            <Typography sx={{fontSize:'26px',fontFamily:'poppins',fontWeight:'600'}}>Our Partnership and Collabratiors</Typography>
            <Box sx={{width:'70%', display:'flex',justifyContent:'space-evenly', flexWrap:'wrap'}}>
                <Box
                component='img'
                src={logo1}
                sx={{width:'105px',height:'105px'}}
                />
                <Box
                component='img'
                src={logo2}
                sx={{width:'155px',height:'120px'}}
                />
                <Box
                component='img'
                src={logo3}
                sx={{width:'158px',height:'130px'}}
                />
                <Box
                component='img'
                src={logo4}
                sx={{width:'145px',height:'60px', alignSelf:'center'}}
                />
                <Box
                component='img'
                src={logo5}
                sx={{width:'170px',height:'120px'}}
                />
            </Box>
        </Stack>
    </Box>
  )
}

export default Feature