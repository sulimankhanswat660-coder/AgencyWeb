import { Box } from '@mui/material'
import React from 'react'
import Swat from './Swat'
function FeaturedNews() {
  return (
    <Box sx={{width:'100%',height:'max-content',}}>
        <Box sx={{width:'90%', mx:'auto',display:'flex',justifyContent:'space-between'}}>
            <Box>j</Box>
            <Box sx={{width:{xs:'100%',md:'50%'}}}>
                <Swat/>
            </Box>
        
        </Box>

    </Box>
  )
}

export default FeaturedNews