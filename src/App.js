import React from 'react'
import Login from './component/Login'
import Signup from './component/Signup'
import { BrowserRouter as Router , Route , Routes } from 'react-router-dom'
import Dashboard from './component/Dashboard'
const App = () => {
  return (
    <>
<Routes>
    <Route path='/' exact element={<Signup/>}/>
    <Route path='/login'  element={<Login/>}/>
    <Route path='/dashboard'  element={<Dashboard/>}/>
    </Routes>
    </>
  )
}

export default App