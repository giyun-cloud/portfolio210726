import React from "react";
import GlobalStyle from "./GlobalStyle";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import AboutMe from "../routes/AboutMe";
import Projects from "../routes/Projects";
import Footer from "./Footer";
import Home from "../routes/Home";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/aboutme" component={AboutMe} />
        <Route path="/projects:id" component={Projects} />
        <Redirect from="*" to="/" />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
