import React , {useState} from 'react'
import classes from './Multiply.module.css'
import axios from 'axios'
import {Button} from "react-bootstrap"

function Multiply() {

  const [answer , setanswer] = useState()
  const [num1 , setnum1] = useState(0)
  const [num2 , setnum2] = useState(0)


  const multiply = ()=>{
      axios.get(`http://127.0.0.1:5000/calc/multiply/${num1}/${num2}`)
      .then((res)=>{
          setanswer(res.data)
      }).catch((err)=>{
          console.log(err)
      })
  }


    return (
        <div className={classes.contain}>
          <h3 className="text-primary" >this page Multiplies numbers</h3>
          <h2>{answer}</h2>
        <input type="number" className="form-control" onChange={(eve)=>setnum1(eve.target.value)} value={num1}/>
        <input type="number" className="form-control"  onChange={(eve)=>setnum2(eve.target.value)} value={num2}/>
        <Button variant="outline-primary" className={classes.btn} onClick={multiply}>Multiply x</Button>
        </div>
    )
}

export default Multiply
