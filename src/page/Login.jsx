import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'



const Login = () => {

const [img, setImg] = useState("")
const [name, setName] = useState("")
const [number, setNumber] = useState("")

const navigate = useNavigate()

useEffect(() => {
  if (
    localStorage.getItem("userImg") && 
    localStorage.getItem("userName") && 
    localStorage.getItem("userNum")
  ) {
    navigate(-1)
  }
},[])



  return (
    <div className='log'>
      <form onSubmit={() => {
        localStorage.setItem("userImg", img)
        localStorage.setItem("userName", name)
        localStorage.setItem("userNum", number)

      }}>
        <h1>Ro'yxatdan o'tish</h1>
        <br />
        <h2>Rasm</h2>
        <input required type="text" value={img} onChange={(e) => setImg(e.target.value)}/>
        <br /><br />
        <h2>Ism</h2>
        <input required type="text"    value={name} onChange={(e) => setName(e.target.value)}/>
        <br /><br />
        <h2>Telefon raqami</h2>
        <input required type="text" value={number} onChange={(e) => setNumber(e.target.value)}/>
        <br />
        <br />
        <h2>Antibot</h2>
      <div className="chex">
      <input className='inp4' type="checkbox" />
      <h1>Men robot emasman</h1>
      </div>
<br />
        <button type='submit'>Royxatdan o'tish</button>
        <br /><br />
        <h3>Men allaqachon ro'yxatdan o'tganman</h3>
      </form>
    </div>
  )
}

export default Login