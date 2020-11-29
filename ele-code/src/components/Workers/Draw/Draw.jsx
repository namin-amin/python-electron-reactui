import React , {useState} from 'react'
import classes from '../Multiply/Multiply.module.css'
import axios from 'axios'

const Draw = () => {
  const [answer , setanswer] = useState()
  const [num1 , setnum1] = useState(0)
  const [num2 , setnum2] = useState(0)

  const adder = ()=>{
      axios.get(`http://127.0.0.1:5000/calc/draw/${num1}/${num2}`)
      .then((res)=>{
          setanswer(res.data)
      }).catch((err)=>{
          console.log(err)
      })
  }

    return (
        <div className={classes.contain}>
          <h3>this page Adds numbers (numbers should be less than 100)</h3>
          <h2 className={classes.answer}>{answer}</h2>
        <input type="text" className={classes.inputs} onChange={(eve)=>setnum1(eve.target.value)} value={num1}/>
        <input type="text"className={classes.inputs} onChange={(eve)=>setnum2(eve.target.value)} value={num2}/>
        <button className={classes.btn} onClick={adder}>Draw </button>
        </div>
    )
}

export default Draw;
