import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/index";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Home from "./pages/Home";
import Shop from "./pages/Shop/shop";
import Featured from "./pages/Featured/featured";
import Footer from "./components/Footer/index";

// const useStyles = makeStyles({
//   root: {
//     position: 'relative',
//     content: 'cover'
//   },
//   video: {
//     objectFit: 'cover',
//     width: '100vw',
//     height: '80vh',
//     position: 'fixed',
//     left: '0',
//   }

// });

function App() {
  // const classes = useStyles();
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/shop" component={Shop} />
        <Route path="/featured" component={Featured} />
        <Redirect to="/" />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
