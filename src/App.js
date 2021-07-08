import React from "react";
import "./styles/App.css";
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Pages/Home';
import About from './components/Pages/About';
import Service from './components/Pages/Service';
import Blog from './components/Pages/Blog';
import Contact from './components/Pages/Contact';
import Protfolio from './components/Pages/Protfolio';


const useStyles = makeStyles((theme) => ({
  root: {
    //width: '100vw',
    //height: "100vh",
    backgroundColor: theme.palette.grey[300],
    maxWidth: 950,
  },
}));

const App = () => {
  const classes = useStyles();

  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/service" component={Service} />
        <Route exact path="/blog" component={Blog} />
        <Route exact path="/protfolio" component={Protfolio} />
        <Route exact path="/contact" component={Contact} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
