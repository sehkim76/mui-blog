import { Drafts, Home, Inbox, ShoppingBag, ShoppingCart } from '@mui/icons-material'
import { Box, List, ListItem, ListItemIcon, ListItemText } from '@mui/material'
import React from 'react'

const LeftBody = () => {
  return (
    <Box flex={1}
        sx={{
            display: {xs: 'none', sm: 'block'},
        }}
        bgcolor={'#ffffff'}
        >
            <Box position='fixed'>
                <List>
                    <ListItem>
                        <ListItemIcon>
                            <Home/>
                        </ListItemIcon>
                        <ListItemText primary="Home" />
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <Inbox/>
                        </ListItemIcon>
                        <ListItemText primary="Inbox" />
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <Drafts/>
                        </ListItemIcon>
                        <ListItemText primary="Drafts" />
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <ShoppingCart/>
                        </ListItemIcon>
                        <ListItemText primary="Shopping" />
                    </ListItem>
                </List>
            </Box>
    </Box>
  )
}

export default LeftBody