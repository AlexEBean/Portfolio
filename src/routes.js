import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Home from "./components/Home/Home"
import About from "./components/About/About"
import Contact from "./components/Contact/Contact"

export default (
    <Switch>
      <Route exact path= "/" component = {Home} />
      <Route exact path= "/contact" component = {Contact} />
      <Route exact path= "/about" component = {About} />
    </Switch>
  )