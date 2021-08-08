import React, { useState } from 'react';
import { Container, Typography, Grid, FormLabel, FormControlLabel, RadioGroup, Radio, Paper, Grow, Box, Tab, Tabs } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Service from './Service';
import About from './About';
import Contact from './Contact';
import img from '../../img/p2.jpg';

const useStyles = makeStyles((theme) => ({
  root: {
    //width: '100vw',
    //height: "100vh",
    backgroundColor: theme.palette.grey[300],
    maxWidth: '950px',
    margin: '0 auto'
  },

  root1: {
    flexGrow: 1,
    marginTop: 20,
  },
  paper: {
    height: 300,
    width: 200,
    transition: 'all',
    position: 'relative',
    '&:Hover': {
      transform: 'scale(1.1)',

    }
  },
  control: {
    padding: theme.spacing(2),
  },
  paperroot: {
    marginTop: 20,
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(16),
      height: theme.spacing(16)
    },
  },
  roottab: {
    flexGrow: 1,
  },
  /* grid: {
    '&:Hover': {
      backgroundColor: 'red',
    }

  } */
}));

const Home = () => {
  const classes = useStyles();
  const [spacing] = useState(2);

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  /* const handleChange = (event) => {
      setSpacing(Number(event.target.value));
  } */
  return (
    <div>
      <br /><br /><br />
      <img src={img} alt="" style={{ width: "100%", height: "400px" }} />
      <Container className={classes.root}>
        <Typography variant="h2" align="center">
          Home
        </Typography>
        <div> {/* Grid */}
          <Grow in>
            <Box boxShadow={2} m={1}>
              <Grid container className={classes.root1} spacing={3}>
                <Grid item xs={12}>
                  <Grid container justifyContent="center" spacing={spacing}>
                    {/* {[0,].map((value) => ( */}
                    <Grid /* key={value} */ item /* className={classes.grid} */>
                      <Paper className={classes.paper} />
                    </Grid>
                    <Grid /* key={value} */ item>
                      <Paper className={classes.paper} />
                    </Grid>
                    <Grid /* key={value} */ item>
                      <Paper className={classes.paper} />
                    </Grid>
                    <Grid /* key={value} */ item>
                      <Paper className={classes.paper} />
                    </Grid>
                    <Grid /* key={value} */ item>
                      <Paper className={classes.paper} />
                    </Grid>
                    <Grid /* key={value} */ item>
                      <Paper className={classes.paper} />
                    </Grid>
                    <Grid /* key={value} */ item>
                      <Paper className={classes.paper} />
                    </Grid>
                    <Grid /* key={value} */ item>
                      <Paper className={classes.paper} />
                    </Grid>
                    {/* ))} */}
                  </Grid>
                </Grid>
                {/* <Grid item xs={12}>
                            <Paper className={classes.control}>
                                <Grid container>
                                    <Grid item>
                                        <FormLabel>spacing</FormLabel>
                                        <RadioGroup
                                            name="spacing"
                                            aria-label="spacing"
                                            value={spacing.toString()}
                                            onChange={handleChange}
                                        >
                                            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((value) => (
                                                <FormControlLabel
                                                    key={value}
                                                    value={value.toString()}
                                                    control={<Radio />}
                                                    label={value.toString}
                                                />
                                            ))}
                                        </RadioGroup>
                                    </Grid>
                                </Grid>
                            </Paper>
                        </Grid> */}
              </Grid>
            </Box>
          </Grow>
        </div>{/* end Grid */}
        <div> {/* paper */}
          <div className={classes.paperroot}>
            <Paper elevation={0} />
            <Paper />
            <Paper elevation={3} />
            <Paper variant="outlined" />
            <Paper variant="outlined" square />
          </div>
        </div>

        <div>
          <Paper className={classes.roottab}>
            <Tabs value={value} onChange={handleChange} indicatorColor="primary" textColor="primary" centered >
              <Tab label="Service">
                <Service />
              </Tab>
              <Tab label="about">
                <About />
              </Tab>
              <Tab label="contact">
                <Contact />
              </Tab>
            </Tabs>
          </Paper>
        </div>
      </Container>
    </div >

  );
};

export default Home;







/* tab center

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const useStyles = makeStyles({
  roottab: {
    flexGrow: 1,
  },
});

export default function CenteredTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper className={classes.roottab}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab label="Item One" />
        <Tab label="Item Two" />
        <Tab label="Item Three" />
      </Tabs>
    </Paper>
  );
}
*/
















/* tab fixed


import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

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
  root: {
    backgroundColor: theme.palette.background.paper,
    width: 500,
  },
}));

export default function FullWidthTabs() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="Item One" {...a11yProps(0)} />
          <Tab label="Item Two" {...a11yProps(1)} />
          <Tab label="Item Three" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          Item One
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          Item Two
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          Item Three
        </TabPanel>
      </SwipeableViews>
    </div>
  );
}



*/