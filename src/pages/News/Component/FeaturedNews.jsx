import { Box } from '@mui/material'
import React from 'react'
import NewsCard from './Categories'
import Categories from './Categories'
function FeaturedNews() {
  return (
    <Box sx={{width:'100%',height:'max-content',}}>
        <Box sx={{width:'90%', mx:'auto',display:'flex',justifyContent:'space-between'}}>
            <Box>
              <NewsCard/>
            </Box>
            <Box sx={{width:{xs:'100%',md:'50%'},justifyItems:{xs:'center'}}}>
                <Categories/>
            </Box>
        
        </Box>

    </Box>
  )
}

export default FeaturedNews