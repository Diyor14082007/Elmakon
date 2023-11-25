import React, { useEffect, useState } from 'react'
import axios from "axios"
import {Link} from 'react-router-dom'
import Footer from '../components/Footer'
import Nav from '../components/Nav'

const Watch = () => {

  const [data, setData] = useState([])

  useEffect(() => {
    axios.get("https://flowers-api-yqhj.onrender.com/products")
      .then((res) => {
        setData(res.data)
      }).catch((err) => {
        alert(err)
      })
  }, [])

  const newIphone = data?.filter((el) => el?.desc === "Watch")

  return (
    <>
    <Nav/>
      <header>
        <img src="https://telegra.ph/file/1d92888145cd1e6dcc96d.jpg" alt="" />
      </header>
      <div className="smh"><h1>Watch</h1></div>
      <div className="ota">
        {newIphone?.map((el) => {
          return(
            <Link to={`/single/${el?._id}`} key={el?._id} className="card">
            <div className="foiz">
              <img src="https://telegra.ph/file/615cc113088f54fdccc67.jpg" alt="" />
            </div>
            <img src={el?.image} alt="" />
            <h1>{el?.name}</h1>
            <h2>{el?.price}UZS</h2>
            <h3>{el?.price}UZS</h3>
            <br /><br />
          </Link>
          )
        })}
      </div>
      <Footer/>
    </>
  )
}

export default Watch