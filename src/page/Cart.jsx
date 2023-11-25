import React, { useEffect, useState } from 'react'
import Footer from "../components/Footer"
import { useCart } from 'react-use-cart'
import axios from "axios"
import Nav from '../components/Nav'

const Cart = () => {
  const { items, isEmpty, updateItemQuantity, removeItem, emptyCart } = useCart()


  let total = 0

  const postTest = () => {
    axios
      .post(
        `https://api.telegram.org/bot5378253930:AAEW0rlP7j7KA50TxsypNSLLKvQ5jYnNPfc/sendMessage?chat_id=-1001553163227&text=${encodeURIComponent(
          `<b>Details:</b>

    <b>The operation was completed successfully!</b>
    <b>our couriers will contact you soon!</b>
    <b>THANK YOU FOR TRUST</b>
    <b>ELMAKON PROTOTYPE</b>
    <b>10 milionli chexolla faqat elmakonda "))"</b>
    
    ${items
            .map((item) => {
              return `
                <b>${item.name}</b>
                ${item.quantity} x ${item.price} so'm = ${item.quantity}`;
            })
            .join("")}        
            <b>Hammasi:</b> ${total} so'm`
        )}&parse_mode=html`
      )
      .then(() => {
        emptyCart();
        window.location.reload();
      });
  };


  return (
    <div>
      <Nav />
      {!isEmpty ? (
        <div className="containerr">
          <div className="cart">
            <h1>Savatcha xolati</h1>
            {items?.map((el) => {
              const priceCount = el?.quantity * el?.price; total += priceCount;
              return (
                <div className="cart-cart">
                  <div className="imgg">
                  <img src={el?.image} alt="" />
                  <div className="ell"><h1>{el?.name}</h1>
                  <br />
                  <h2>Sotuvchi:Elmakon</h2></div>
                  </div>
                  <div className="ook">
                  <div className="narx">
                    <h2 className='a1'>Narxi(dona)</h2>
                    <br />
                  <b>{priceCount} UZS</b>
                  </div>
                  <div className="soni">
                    <h2 className='a1'>Soni</h2>
                    <br />
                  <div className="obbtn">
                  <button onClick={() => updateItemQuantity(el?.id, el.quantity - 1)}>-</button>
                  <p>{el?.quantity}</p>
                  <button onClick={() => updateItemQuantity(el?.id, el.quantity + 1)}>+</button>
                  <button onClick={() => removeItem(el?.id)}>X</button>
                  </div>
                  
                  </div>
                  
                  <br />
                  
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      ) : (
        <div>
          <div className="savatt">
            <img className='imgg6' src="https://cdn-icons-png.flaticon.com/512/5087/5087784.png" alt="" />
          </div>
          <br />
          <h1 className='savat'>Sizning savatchangiz boʻsh </h1>
        </div>
      )}

      <br />
      <h1 className='savat'>Umumiy narx: {total} UZS</h1>
      <div className="zak">
      
      {items.length ? <button className='bttn' onClick={postTest}>ZAKAZ BERISH</button> : null}
      <button className='bttnn'>BUYURTMANI RASMIYLASHTIRISH</button>

      </div>

      <Footer />
    </div>
  )
}

export default Cart