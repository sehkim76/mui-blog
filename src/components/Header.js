import styled from '@emotion/styled'
import { AcUnit, Notifications } from '@mui/icons-material'
import { AppBar, Avatar, Badge, IconButton, InputBase, Menu, MenuItem, Toolbar, Typography } from '@mui/material'
import React, { useState } from 'react'
import { SiMui } from "react-icons/si";

const Header = () => {
    const [open, setOpen] = useState(false);
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClose = () => {
        setAnchorEl(null);
        setOpen(false);
      };

    const StyledToolbar = styled(Toolbar)({
        display: 'flex',
        justifyContent: 'space-between'
    })

    const Search = styled('div')(() => ({
        backgroundColor: "white",
        width: "40%",
        padding: "0 10px"

    }))
    const Icons = styled('div')(() => ({
        display: "flex",
        alignItems: 'center',
        gap: "20px"
    }))
  return (
    <AppBar position='sticky'>
        <StyledToolbar>
        <IconButton onClick={(event)=>{
            console.log('clicked');
            setAnchorEl(event.currentTarget);
            setOpen(true);

        }}>
            <AcUnit sx={{
                display: { xs: "block", sm: "none"}
            }}/>
        </IconButton>

        <Typography variant='h6' sx={{
            display: { xs: "none", sm: "block"}
        }}>
            Material UI
        </Typography>


        <Search>
            <InputBase placeholder='search...'/>
        </Search>
        <Icons>
            <Badge badgeContent={3}>
                <Notifications/>
            </Badge>
            <Avatar>
            N
            </Avatar>
        </Icons>
        </StyledToolbar>
        <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
            'aria-labelledby': 'basic-button',
            }}
        >
        <MenuItem onClick={handleClose}>Home</MenuItem>
        <MenuItem onClick={handleClose}>Inbox</MenuItem>
        <MenuItem onClick={handleClose}>Drafts</MenuItem>
        <MenuItem onClick={handleClose}>Shopping</MenuItem>
      </Menu>
    </AppBar>
  )
}

export default Header