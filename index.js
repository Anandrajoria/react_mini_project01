import React from 'react'
import ReactDOM from 'react-dom'
import Card from './Card'
import './index.css'
import sdata from './Sdata'


ReactDOM.render(
  <>
  <h1 className='heading_style'>list of top 5 netflix series in 2023</h1>
  

  {sdata.map((val)=>{
    return (
      <Card
        key={val.id}
        imgsrc={val.imgsrc}
        title={val.title}
        sname={val.sname}
        link={val.link}
  />
    )
  })}

  </>,
  document.getElementById('root')
)