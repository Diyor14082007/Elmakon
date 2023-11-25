import React from 'react'
import { Route, Routes} from "react-router-dom"
import Home from './page/Home'
import Login from './page/Login'
import Admin from './page/Admin'
import Password from './page/Password'
import Search from './page/Search'
import Product from './page/Product'
import Ipad from './page/Ipad'
import Watch from './page/Watch'
import Pods from './page/Pods'
import Jbl from './page/Jbl'
import Phone from './page/Phone'
import Smartfon from './page/Smartfon'
import Cart from './page/Cart'


const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/smartfon' element={<Smartfon/>}/>

      <Route path='/login' element={<Login/>}/>
      <Route path='/admin' element={<Admin/>}/>
      <Route path='/password' element={<Password/>}/>

      <Route path='/search' element={<Search/>}/>
      <Route path='/piece/:_id' element={<Product/>}/>

      <Route path='/ipad' element={<Ipad />}/>
      <Route path='/watch' element={<Watch />}/>
      <Route path='/chexol' element={<Pods />}/>
      <Route path='/jbl' element={<Jbl />}/>

      <Route path='/single/:_id' element={<Phone />}/>

      <Route path="/cart" element={<Cart/>} />
    </Routes>
  )
}

export default App

