import React from "react";
import { Tabs,Tab } from 'react-bootstrap';
import './bootstrap.min.css';


import Add from "./components/Workers/Add/Add";
import Multiply from "./components/Workers/Multiply/Multiply";
import Devide from "./components/Workers/Devide/Devide";
import Draw from './components/Workers/Draw/Draw'
import Screencpt from './components/Workers/Screencpt/Screencpt'


function App() {

  return (

    <Tabs defaultActiveKey="add" id="uncontrolled-tab-example">
  <Tab eventKey="add" title="Add" mountOnEnter unmountOnExit>
    <Add />
  </Tab>
  <Tab eventKey="multy" title="Multiply" mountOnEnter unmountOnExit>
    <Multiply />
  </Tab>
  <Tab eventKey="devide" title="Devide" mountOnEnter unmountOnExit>
    <Devide/>
  </Tab>
  <Tab eventKey="draw" title="Draw" mountOnEnter unmountOnExit>
    <Draw/>
  </Tab>
  <Tab eventKey="scrncapt" title="Screencapture" mountOnEnter unmountOnExit>
    <Screencpt/>
  </Tab>
</Tabs>


  );

}

export default App;
