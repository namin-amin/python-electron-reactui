import React, { useState} from "react";
import classes from '../Multiply/Multiply.module.css'
import axios from "axios";
import {Button , Image} from "react-bootstrap"

function Screencpt() {
  const [update,updater] = useState(0)
  const [image, setimage] = useState();

  const Capture = () => {
    axios
      .get(`http://127.0.0.1:5000/screenshot`)
      .then((res) => {
        setimage(`http://127.0.0.1:5000/captured/${update}`)
        updater(update+1)
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className={classes.contain}>
      <h3 className="text-primary" >capture screen</h3>
      <Image
        src={image}
         width='600px'
     height='337.50px' thumbnail />

      <Button variant="outline-primary" className={classes.btn} onClick={Capture}>
        Capture
      </Button>
    </div>
  );
}

export default Screencpt;
