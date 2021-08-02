import React, { useState } from 'react';
import { Container, Typography, Grid, FormLabel, FormControlLabel, RadioGroup, Radio, Paper, Grow, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
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
}));

const Home = () => {
    const classes = useStyles();
    const [spacing] = useState(2);

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
            </Container>
        </div>

    );
};

export default Home;

