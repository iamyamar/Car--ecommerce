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
import Layout from "./pages/Layout/index";
import Pages from "./pages/Pages/index";
import Footer from "./components/Footer/index";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/shop" component={Shop} />
        <Route path="/featured" component={Featured} />
        <Route path="/layout" component={Layout} />
        <Route path="/Pages" component={Pages} />
        <Redirect to="/" />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
