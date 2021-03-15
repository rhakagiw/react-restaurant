// App.js

import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./components/header";
import Home from "./components/home";
import Menu from "./components/menu";
import Banquet from "./components/banquet";
import Culinary from "./components/culinary";
import Contact from "./components/contact";
import Footer from "./components/footer";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
         <Header/>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/menu" component={Menu} />
            <Route path="/banquet" component={Banquet} />
            <Route path="/culinary" component={Culinary} />
            <Route path="/contact" component={Contact} />
          </Switch>
          <Footer/>
        </div>
      </Router>
    );
  }
}

export default App;
