import React from "react"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import './App.css';
import Navbar from "./components/Navbar"


function App() {
  return (
    <Router>
    <Navbar />
    <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/action" exact component={Action} />
    <Route path="/animation" exact component={Animation} />
    <Route path="/categories" exact component={Categories} />
    <Route path="/comedy" exact component={Comedy} />
    <Route path="/drama" exact component={Drama} />
    <Route path="/fantasy" exact component={Fantasy} />
    <Route path="/horror" exact component={Horror} />
    <Route path="/romance" exact component={Romance} />
    <Route path="/toprated" exact component={TopRated} />
    <Route path="/upcoming" exact component={Upcoming} />




    </Switch>
    </Router>
  );
}

export default App;
