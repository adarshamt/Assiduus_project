import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";

import InputBase from "@mui/material/InputBase";

import SearchIcon from "@mui/icons-material/Search";

import NotificationsIcon from "@mui/icons-material/Notifications";

import Badge from "@mui/material/Badge";


import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';    
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';



const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: '#F6F7F9',
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
//   backgroundColor:'#A9A9A9'

}));

export default function navbar() {
  return (
  <Box sx={{ flexGrow: 1,display:'flex' }}>
      <AppBar position="static">
        <Toolbar sx={{ display: 'flex',height:'40px', justifyContent: 'flex-end',backgroundColor:'#fff'}}>
          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            compo  nent="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            MUI
          </Typography> */}
           {/* <div style={{ backgroundColor: '#A9A9A9' }}> */}
   
  
          <Search >
            <SearchIconWrapper>
              <SearchIcon sx={{color:'black'}} />
            </SearchIconWrapper >
            <StyledInputBase
              placeholder=""
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
          {/* </div> */}

          <Box sx={{ paddingLeft:'20px' }}>
            <Badge color="success" overlap="circular" badgeContent=" " variant="dot">
              <NotificationsIcon sx={{color:'black'}} />
            </Badge>
          </Box>

          <Box sx={{ flexGrow: 0,paddingLeft:'20px' }}>
            <Tooltip title="User">
              <IconButton sx={{ p: 0 }}>
                <Avatar  alt=" no image found" src='https://res.cloudinary.com/dcy1nhstg/image/upload/v1699008629/Employee-Avatar-Transparent-Image_ipoksy.png' />
              </IconButton>
            </Tooltip>
         
          </Box>
      <ArrowDropDownIcon sx={{color:'black',marginLeft:'10px'}} />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
