import React from 'react'
import {NavLink} from 'react-router-dom'
import classes from './Tabs.module.css'

function Tabs() {
  return (<div className={classes.contain}>

    <NavLink className={classes.tabs} to="/" activeStyle={{
        borderBottom: "solid 1px blue"
      }} exact="exact">
      <p>
        multiply 2 numbers</p>
    </NavLink>
    <NavLink className={classes.tabs} to="/add" activeStyle={{
        borderBottom: "solid 1px blue"
      }}>
      <p>add 2 numbers</p>
    </NavLink>
    <NavLink className={classes.tabs} to="/devide" activeStyle={{
        borderBottom: "solid 1px blue"
      }}>
      <p>devide 2 numbers</p>
    </NavLink>
  </div>)
}

export default Tabs
