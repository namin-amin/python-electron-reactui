import React, { useState} from "react";
import classes from '../Multiply/Multiply.module.css'
import axios from "axios";

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
      <h3>capture screen</h3>
      <img
        src={image}
        alt="https://www.elegantthemes.com/blog/wp-content/uploads/2018/02/502-error.png" width='500px'
     height='500px' />

      <button className={classes.btn} onClick={Capture}>
        Capture
      </button>
    </div>
  );
}

export default Screencpt;
