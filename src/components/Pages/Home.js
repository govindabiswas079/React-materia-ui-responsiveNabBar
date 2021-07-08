import { Container, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import img from '../../img/p2.jpg';

const useStyles = makeStyles((theme) => ({
    root: {
        //width: '100vw',
        //height: "100vh",
        backgroundColor: theme.palette.grey[300],
        maxWidth: 950,
    },
}));

const Home = () => {
    const classes = useStyles();
    return (
        <div>
            <br /><br /><br />
            <img src={img} style={{ width: "100%", height: "400px" }} />
            <Container className={classes.root}>
                <Typography variant="h2" align="center">
                    Home
                </Typography>
            </Container>
        </div>

    );
};

export default Home;

