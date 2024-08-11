import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Menu, MenuItem, Avatar, Button } from '@mui/material';
import { useNavigate, Link } from 'react-router-dom';

const AdminNavbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    handleMenuClose();
    navigate('/login');
  };

  return (
    <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, backgroundColor: 'white', color: 'green' }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography 
          variant="h6" 
          noWrap 
          component={Link} 
          to="/admin"
          sx={{ textDecoration: 'none', color: 'inherit' ,fontSize:'2.0rem'}}
        >
          TurfSplaz
        </Typography>
        <div>
          <Button component={Link} to="/user" sx={{ color: 'inherit', textTransform: 'none', fontSize: '1.25rem' }}>User</Button>
          <Button component={Link} to="/turf" sx={{ color: 'inherit', textTransform: 'none' , fontSize:'1.25rem'}}>Turf</Button>
          <Button component={Link} to="/pay" sx={{ color: 'inherit', textTransform: 'none', fontSize:'1.25rem'}}>Booking</Button>
          <Button component={Link} to="/cart" sx={{ color: 'inherit', textTransform: 'none', fontSize:'1.25rem'}}>Category</Button>
          <Button component={Link} to="/timeadmin" sx={{ color: 'inherit', textTransform: 'none', fontSize:'1.25rem'}}>Time</Button>
        </div>
        <IconButton edge="end" color="inherit" onClick={handleMenuOpen}>
          <Avatar alt="Profile" src="/path-to-profile-image.jpg" />
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
        >
          <MenuItem onClick={handleLogout}>Logout</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default AdminNavbar;
