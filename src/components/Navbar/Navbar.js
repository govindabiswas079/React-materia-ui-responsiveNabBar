import React, { useState } from "react";
import { Typography, AppBar, Toolbar, Button, IconButton, MenuItem, SwipeableDrawer, List, Divider } from '@material-ui/core';
import { Menu } from '@material-ui/icons'
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    Navbar: {
        display: "none",
        [theme.breakpoints.up("md")]: {
            display: "flex",
        }
    },
    ResNavbar: {
        [theme.breakpoints.up("md")]: {
            display: "none",
        }
    }
}));

const Navbar = () => {
    const classes = useStyles();
    const [open, setOpen] = useState(null);
    const isMobileMenuOpen = Boolean(open);

    const openMobileMenu = (event) => {
        setOpen(event.currentTarget);
    };
    const closeMobileMenu = () => {
        setOpen(null);
    };

    const MobileMenu = (
        <SwipeableDrawer onClick={closeMobileMenu} anchorEl={open} id="mobilr-menu" keepMounted open={isMobileMenuOpen}>
            <List>
                <Typography component={Link} to="/" variant="h5" style={{ textDecoration: "none", }}>Material UI</Typography>
                <Divider />
                <div style={{margin: "25px"}}>
                    <MenuItem onClick={closeMobileMenu} component={Link} to="/">Home</MenuItem>
                    <Divider />
                    <MenuItem onClick={closeMobileMenu} component={Link} to="/about">About</MenuItem>
                    <Divider />
                    <MenuItem onClick={closeMobileMenu} component={Link} to="/service">Service</MenuItem>
                    <Divider />
                    <MenuItem onClick={closeMobileMenu} component={Link} to="/blog">Blog</MenuItem>
                    <Divider />
                    <MenuItem onClick={closeMobileMenu} component={Link} to="/protfolio">Protfolio</MenuItem>
                    <Divider />
                    <MenuItem onClick={closeMobileMenu} component={Link} to="/contact">Contact</MenuItem>
                </div>
            </List>
        </SwipeableDrawer>
    )

    return (
        <React.Fragment>
            <AppBar>
                <Toolbar>
                    <Typography component={Link} to="/" variant="h5" style={{ flexGrow: 1, textDecoration: "none", color: "white" }}>Material UI</Typography>
                    <div className={classes.Navbar}>
                        <Button component={Link} to="/" color="inherit">Home</Button>
                        <Button component={Link} to="/about" color="inherit">About</Button>
                        <Button component={Link} to="/service" color="inherit">Service</Button>
                        <Button component={Link} to="/blog" color="inherit">Blog</Button>
                        <Button component={Link} to="/protfolio" color="inherit">Protfolio </Button>
                        <Button component={Link} to="/contact" color="inherit">Contact </Button>
                    </div>
                    <IconButton color="inherit" className={classes.ResNavbar} onClick={openMobileMenu}>
                        <Menu color="inherit" />
                    </IconButton>
                </Toolbar>
            </AppBar>
            { MobileMenu}
        </React.Fragment>
    );
}

export default Navbar;
