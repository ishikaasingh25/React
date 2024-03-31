import React, { useState } from 'react'
import './App.css'
import Datepicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import {FaCalendarAlt} from 'react-icons/fa'

function CustomInput({value,onClick}){
return(
  <div className='input-group'>
    <input type='text' className='form-control' value={value} onClick={onClick} readOnly/>
    <div className='input-group-append'>
      <span className='input-group-text'>
        <FaCalendarAlt/>
      </span>
      </div>
  </div>
)
}
function App() {
  const [selectedDate,setDate]=useState(null)
  var[a,b]=useState('Click me')
  return (
    <div className='App'>
    <h1 className='header mt-2 mb-4'>Flight Schedule</h1>
     <label> <Datepicker selected={selectedDate} onChange={date=>setDate(date)} customInput={<CustomInput/>}/>
     </label>
     <div className='mt-4 mb-10'>
      <button onClick={()=>b("Continue")} className='Button'>{a}</button>
    </div> 
    </div>
   
  )
}

export default App