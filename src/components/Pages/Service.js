import React from 'react';
import { Container, Typography, makeStyles } from '@material-ui/core';
import img from '../../img/p2.jpg';

const useStyles = makeStyles((theme) => ({
    root: {
        //width: '100vw',
        //height: "100vh",
        backgroundColor: theme.palette.grey[300],
        maxWidth: '950px',
        margin: '0 auto',
    },
    bg: {

        backgroundImage: `url(${img})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'bottom left',
    }
}));


const Service = () => {
    const classes = useStyles();

    return (
        <div className={classes.bg}>
            <Container className={classes.root}><br /><br /><br /><br />
                <Typography variant="h2" align="center">
                    Service
                </Typography>
            </Container>

        </div>
    )
}

export default Service;
