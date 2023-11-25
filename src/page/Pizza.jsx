import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";
import { useCart } from "react-use-cart"
import axios from "axios";
import Nav from "../components/Nav";


const Pizza = () => {
  const { _id } = useParams();

  const [product, setProduct] = useState([])

  const { addItem, getItem, removeItem } = useCart()

  const paramsFind = product?.find((el) => {
    return el?.id === +_id;
  });

  useEffect(() => {
    axios
      .get(`https://flowers-api-yqhj.onrender.com/products`)
      .then((res) => {
        setProduct(res.data)
        console.log(res);
      })
      .catch((err) => {
        alert("err");
      });
  }, []);

  return (
    <div>
      <Nav/>
      <br />
      <div className="container">
        <div className="kart">
          <img src={paramsFind?.img} alt="" />
          <div className="karta">
            <div className="kartaorta">
              <h1>{paramsFind?.name}</h1>
              <p>{paramsFind?.desc}</p>

            </div>
            <div className="price">
              <h3>{paramsFind?.price} So'mdan</h3>
              {!getItem(paramsFind?._id) ? (
                <button onClick={() => addItem(paramsFind)}>Savatga</button>
              ) : (
                <button onClick={() => removeItem(paramsFind?._id)}>O'chirish</button>
              )}
            </div>
          </div>

        </div>
      </div>


      <br />
      <Footer />
    </div>
  );
};

export default Pizza;
