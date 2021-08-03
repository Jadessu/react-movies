import React from "react"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import './App.css';
import Navbar from "./components/Navbar"
import Home from "./components/pages/Home"
import Action from "./components/pages/Action"
import Animation from "./components/pages/Animation"
import Categories from "./components/pages/Categories"
import Comedy from "./components/pages/Comedy"
import Drama from "./components/pages/Drama"
import Fantasy from "./components/pages/Fantasy"
import Horror from "./components/pages/Horror"
import Romance from "./components/pages/Romance"
import TopRated from "./components/pages/TopRated"
import Upcoming from "./components/pages/Upcoming"


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
