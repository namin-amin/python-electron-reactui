import React from "react";
import { Switch, Route } from "react-router-dom";

import classes from "./App.module.css";
import Add from "./components/Workers/Add/Add";
import Multiply from "./components/Workers/Multiply/Multiply";
import Devide from "./components/Workers/Devide/Devide";
import Tabs from './components/UI-components/Tab/Tabs'

function App() {

  return (

    <div className={classes.App}>
    <Switch>
      <Route path="/" exact>
       <Multiply />
      </Route>
      <Route path="/Add">
        <Add />
      </Route>
      <Route path="/Devide">
        <Devide />
      </Route>
    </Switch>
    <Tabs />
    </div>


  );

}

export default App;
