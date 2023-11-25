import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Nav from '../components/Nav';
import { useCart } from 'react-use-cart';

const Phone = () => {
    const [data, setData] = useState([]);
    const { _id } = useParams()
  const { addItem, getItem, removeItem } = useCart()


    useEffect(() => {
        axios.get("https://flowers-api-yqhj.onrender.com/products")
            .then((res) => {
                setData(res.data)
            }).catch((err) => {
                alert(err)
            })
    }, [])

    const phoneFind = data.find((el) => {
        return el?._id === _id
    })

    return (
        <>
            <Nav />
            <div className="parent">
                <div className="left">
                    <h1>{phoneFind?.name}</h1>
                    <img src={phoneFind?.image} alt="" />
                </div>
                <div className="right">
                    <div className="honor">
                        <div className="uzs">
                            <h2>{phoneFind?.price} UZS</h2>
                            <h3>409.000 so'm/oy</h3>
                            <h1>Sotuvda bor</h1>
                        </div>
                        <h4>IPHONE</h4>
                    </div>
                    <br />
                    {!getItem(phoneFind?._id) ? (
                        <button className='svt' onClick={() => addItem({ ...phoneFind, id: phoneFind._id })}>🛒 SAVATGA QO'SHISH</button>
                    ) : (
                        <button className='svt' onClick={() => removeItem(phoneFind?._id)}>O'chirish</button>
                    )}
                    <br />
                    <br />
                    <button className='mdt'>% MUDDATLI TO'LOV</button>
                    <h5>Sotuvchi: ELMAKON</h5>
                    <img className='im' src="https://elmakon.uz/images/logos/8/elmakon.png" alt="" />
                </div>
            </div>

        </>
    )
}

export default Phone