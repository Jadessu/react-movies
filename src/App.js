import React from "react"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import { useEffect, useState } from "react";
import BootstrapCarousel from "./BootstrapCarousel";
import './App.css';
import Navbar from "./components/Navbar"
import Categories from "./components/pages/Categories"
import Comedy from "./components/pages/Comedy"
import Drama from "./components/pages/Drama"
import Fantasy from "./components/pages/Fantasy"
import Horror from "./components/pages/Horror"
import Romance from "./components/pages/Romance"
import NowPlaying from "./components/pages/NowPlaying"
import TopRatedFetch from "./components/pages/TopRatedFetch";
import ActionFetch from "./components/pages/ActionFetch";
import AnimationFetch from "./components/pages/AnimationFetch";
import UpcomingFetch from "./components/pages/UpcomingFetch";

function App() {
  
  return (
  
    
    <Router>
      
    <Navbar />
    
    <Switch>
      <div className = "pages">
        <BootstrapCarousel/>
    <Route path="/" exact> <NowPlaying/> </Route>
    <Route path="/action" exact> <ActionFetch/> </Route>
    <Route path="/animation" exact> <AnimationFetch/> </Route> 
    <Route path="/categories" exact component={Categories} />
    <Route path="/comedy" exact component={Comedy} />
    <Route path="/drama" exact component={Drama} />
    <Route path="/fantasy" exact component={Fantasy} />
    <Route path="/horror" exact component={Horror} />
    <Route path="/romance" exact component={Romance} />
    <Route path="/toprated" exact> <TopRatedFetch/> </Route> 
    <Route path="/upcoming" exact> <UpcomingFetch/> </Route>
    </div>
    </Switch>
    </Router>
  );
}

export default App;
