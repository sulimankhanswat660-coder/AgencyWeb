import { Box } from '@mui/material'
import React from 'react'
import Categories from './Categories'
import NewsCard from './NewsCard'
function FeaturedNews() {
  return (
    <Box sx={{width:'100%',height:'max-content',}}>
        <Box sx={{width:'90%', mx:'auto',display:'flex',flexDirection:{xs:'column',md:'row'},justifyContent:'space-between',gap:'50px'}}>
            <Box sx={{width:{xs:'100%',md:'50%'}}}>
              <NewsCard/>
            </Box>
            <Box sx={{width:{xs:'100%',md:'50%'},justifyItems:{sm:'center'}}}>
                <Categories/>
            </Box>
        
        </Box>

    </Box>
  )
}

export default FeaturedNews