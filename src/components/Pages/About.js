import React from 'react';
import { Container, Typography, Paper, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        //width: '100vw',
        //height: "100vh",
        backgroundColor: theme.palette.grey[300],
        maxWidth: '950px',
    },
    root1: {
        flexGrow: 1,
        marginTop: 30,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

const About = () => {
    const classes = useStyles();
    return (
        <div>
            <Container className={classes.root}><br /><br /><br /><br />
                <Typography variant="h2" align="center">
                    About
                </Typography>
                <div>
                    <div className={classes.root}>
                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                                <Paper className={classes.paper}>xs=12</Paper>
                            </Grid>

                            <Grid item xs={12} sm={6}>
                                <Paper className={classes.paper}>xs=12 sm=6</Paper>
                            </Grid>

                            <Grid item xs={12} sm={6}>
                                <Paper className={classes.paper}>xs=12 sm=6</Paper>
                            </Grid>

                            <Grid item xs={6} sm={3}>
                                <Paper className={classes.paper}>xs=6 sm=3</Paper>
                            </Grid>

                            <Grid item xs={6} sm={3}>
                                <Paper className={classes.paper}>xs=6 sm=3</Paper>
                            </Grid>

                            <Grid item xs={6} sm={3}>
                                <Paper className={classes.paper}>xs=6 sm=3</Paper>
                            </Grid>

                            <Grid item xs={6} sm={3}>
                                <Paper className={classes.paper}>xs=6 sm=3</Paper>
                            </Grid>
                        </Grid>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default About;
