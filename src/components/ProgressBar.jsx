import React, { useEffect, useState } from 'react'


const ProgressBar = ({value=0}) => {


  // for 0 to 100% handeling cases
  // store current percentage

  const [percent, setpercent] = useState(value)

  useEffect(()=>{
    setpercent(Math.min(100,Math.max(value,0)))
  },[value])
  return (
    <div className='progress'>
        <span style={{color:percent>49?'white':'black'}}>{percent.toFixed()}%</span>
        <div style={{width:`${percent}%`}}></div>
    </div>
  )
}

export default ProgressBar