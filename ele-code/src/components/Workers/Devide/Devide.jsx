import React , {useState} from 'react'
import classes from '../Multiply/Multiply.module.css'
import axios from 'axios'
import {Button , Alert} from "react-bootstrap"

function Devide() {

  const [answer , setanswer] = useState()
  const [num1 , setnum1] = useState(0)
  const [num2 , setnum2] = useState(0)


  const division = ()=>{
      axios.get(`http://127.0.0.1:5000/calc/divide/${num1}/${num2}`)
      .then((res)=>{
        if (Number(num2) === 0){
            setanswer(<Alert variant="danger">
            <Alert.Heading>Oops</Alert.Heading>
            <p>
               cannot devide by 0
            </p>
          </Alert>)
          }else{
            setanswer(<h2>{res.data}</h2>)
          }
      }).catch((err)=>{
          console.log(err)
      })
  }

    return (
        <div className={classes.contain}>
        <h3 className="text-primary" >this page devides numbers</h3>
          {answer}
          <input type="number" className="form-control"  onChange={(eve)=>setnum1(eve.target.value)} value={num1}/>
          <input type="number" className="form-control" onChange={(eve)=>setnum2(eve.target.value)} value={num2}/>
          <Button variant="outline-primary" className={classes.btn}  onClick={division} >Devide / </Button>
        </div>
    )
}

export default Devide
