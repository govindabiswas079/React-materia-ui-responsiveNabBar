import React, { useState } from 'react';
import SwipeableViews from 'react-swipeable-views';
import PropTypes from 'prop-types';
import { Container, Typography, makeStyles, Paper, Tabs, Tab, AppBar, useTheme, Box } from '@material-ui/core';
import Service from './Service';
import About from './About';
import Blog from './Blog';
import img from '../../img/light.jpg';


function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    main: {
        //width: '100vw',
        //height: "100vh",
        backgroundColor: theme.palette.grey[300],
        maxWidth: 950,
    },
    root: {
        backgroundColor: theme.palette.background.paper,
        width: 800,
    },
}));

const Contact = () => {
    const classes = useStyles();

    const theme = useTheme();
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index) => {
        setValue(index);
    };

    return (
        <div>
            <br /><br /><br />
            <img src={img} style={{ width: "100%", height: "400px" }} />
            <Container className={classes.main}>
                <Typography variant="h2" align="center">
                    Contact
                </Typography>

                <div style={{ margin: "0 auto" }} className={classes.root}>
                    <AppBar position="static" color="default">
                        <Tabs value={value} onChange={handleChange} indicatorColor="primary" textColor="primary" variant="fullWidth" aria-label="full width tabs example" >
                            <Tab label="Item One" {...a11yProps(0)} />
                            <Tab label="Item Two" {...a11yProps(1)} />
                            <Tab label="Item Three" {...a11yProps(2)} />
                        </Tabs>
                    </AppBar>
                    <SwipeableViews axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'} index={value} onChangeIndex={handleChangeIndex} >
                        <TabPanel value={value} index={0} dir={theme.direction}>
                            Item One
                            <Service />
                        </TabPanel>
                        <TabPanel value={value} index={1} dir={theme.direction}>
                            Item Two
                            <About />
                        </TabPanel>
                        <TabPanel value={value} index={2} dir={theme.direction}>
                            Item Three
                            <Blog />
                        </TabPanel>
                    </SwipeableViews>
                </div>
            </Container>
        </div>
    )
}

export default Contact;
