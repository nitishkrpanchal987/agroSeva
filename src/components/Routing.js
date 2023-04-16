import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Main from './Main'
import Intro from './Intro'
import Donation from './Donation'
import Form from './Form'
import Reciept from './Reciept'

const Routing = (props) => {

  return (
    <div>
      <>
            <Routes>
                <Route path='/' element={<Main/>}/>
                <Route path='/blog' element={<Intro/>}/>
                <Route path='/donate' element={<Donation/>}/>
                <Route path='/form' element={<Form showalert={props.showalert}/>}/>
                <Route path='/reciept' element={<Reciept/>}/>
            </Routes>
        </>
    </div>
  )
}

export default Routing
