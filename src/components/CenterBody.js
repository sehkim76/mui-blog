import { Box } from '@mui/material'
import React from 'react'
import Item from './Item'

const CenterBody = () => {
  return (
    <Box
        bgcolor={'#ffffff'}
        flex={3}
        p={2}
        gap={2}
        sx={{ 
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        }}
    >
        <Item/>
        <Item/>
        <Item/>
        <Item/>

    </Box>
    )
}

export default CenterBody