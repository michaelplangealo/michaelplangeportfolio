import React from "react";
import { Switch, Route } from "react-router-dom";

// components
import Home from "./Components/Home.js";
import About from "./Components/About.js";
import Projects from "./Components/Projects.js";
import Write from "./Components/Write.js";

export default (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/About" component={About} />
    <Route path="/Projects" component={Projects} />
    <Route path="/Write" component={Write} />
  </Switch>
);
