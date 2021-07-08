import { Container, Typography, makeStyles } from '@material-ui/core';
import React from 'react';
import img from '../../img/light.jpg';

const useStyles = makeStyles((theme) => ({
    root: {
        //width: '100vw',
        //height: "100vh",
        backgroundColor: theme.palette.grey[300],
        maxWidth: 950,
    },
}));

const Contact = () => {
    const classes = useStyles();
    return (
        <div>
            <br /><br /><br />
            <img src={img} style={{ width: "100%", height: "400px" }} />
            <Container className={classes.root}>
                <Typography variant="h2" align="center">
                    Contact
                </Typography>
            </Container>
        </div>
    )
}

export default Contact;
