import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import Nav from '../components/Nav';

const Product = () => {
  const { _id } = useParams();
  const [product, setProduct] = useState([]);

  const paramsFind = product?.find((el) => {
    return el?._id === _id;
  });

  useEffect(() => {
    axios
      .get(`https://flowers-api-yqhj.onrender.com/products`)
      .then((res) => {
        setProduct(res.data);
      })
      .catch((err) => {
        alert("err");
      });
  }, []);

  return (
    <div>

      <Nav />

      <div className="container">
        <div className="ada">
          <div className="pap">
            <div className="left2">
              <img src={paramsFind?.image} alt="" />
            </div>
            <div className="right3">
              <h1>{paramsFind?.name.slice(0, 15)}...</h1>
              <p>{paramsFind?.desc.slice(0, 50)}...</p>
              <p>{paramsFind?.price} so'm</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="kartala">
          {product.map((el) => {
            return (
              <Link to={`/piece/${el?._id}`}>
                <div key={el?._id} className="karta">
                  <img src={el?.image} alt="" />
                  <h1>{el?.name.slice(0, 15)}...</h1>
                  <p>{el?.price} so'm</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>

    </div>
  )
}

export default Product