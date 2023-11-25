import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../components/nav.css";
import axios from "axios";
import { useCart } from "react-use-cart";
import { useTranslation } from "react-i18next";
import Select from 'react-select'

const Nav = () => {
  const [product, setProduct] = useState([])
  const [search, setSearch] = useState("");
  const { totalItems } = useCart()

  const mango = product.filter((el) => el?.desc === "iPhone");

  const modSearch = mango?.filter((el) => {
    return el?.name.toLowerCase().includes(search.toLowerCase());
  });
  console.log(modSearch);

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

  const options = [
    { value: "uz", label: "O'zbek" },
    { value: "en", label: "English" }
  ]

  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };
  return (
    <div>
      <nav>
        <div className="around">
          <div className="container">
            <div className="papa">
              <div className="chap">
                <Link className="active">Chegirmalar </Link>
                <Link>Do'konlar manzili</Link>
                <Link>Muddatli to'lov holati</Link>
              </div>
              <div className="on">
              
                  {localStorage.getItem("i18nextLng") === "en" ? (
                    <img className="img000" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Flag_of_the_United_Kingdom_%281-2%29.svg/800px-Flag_of_the_United_Kingdom_%281-2%29.svg.png" alt="" />
                  ) : (
                    <img className="img000" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Flag_of_Uzbekistan.svg/2560px-Flag_of_Uzbekistan.svg.png" alt="" />
                  )}

               
                    <Select onChange={({ value }) => changeLanguage(value)} options={options} className='select' placeholder={"O'zbek"} />
                   
                
              </div>
            </div>
          </div>
        </div>

        <div className="navigate">
          <div className="container">
            <div className="papa1">
              <div className="logo">
                <Link to={"/"}>
                  <img
                    src="https://elmakon.uz/images/logos/8/elmakon.png"
                    alt=""
                  />
                </Link>

              </div>
              <div className="center">
                <Link to={"/smartfon"}>{t("nav.1")}</Link>
                <Link to={"/ipad"}>Ipadlar</Link>
                <Link to={"/watch"}>Soatlar</Link>
                <Link to={"/jbl"}>Kalonkalar</Link>
                <Link to={"/chexol"}>Chexollar</Link>
                <Link to={"/"} id="bn">Dasturiy ta'minot</Link>
              </div>
              <div className="right1">
                <div className="btn2">
                  <img
                    src="https://cdn-icons-png.flaticon.com/128/25/25424.png"
                    alt=""
                  />
                  <img
                    src="https://cdn-icons-png.flaticon.com/128/15/15200.png"
                    alt=""
                  />
                </div>
                <div className="phone">
                  <h3>+998-71-203-1203</h3>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="navi">
          <div className="container">
            <div className="papa2">
              <div className="left1">
                <img src="" alt="" />
                <h1>
                  <img
                    className="icon"
                    src="https://cdn-icons-png.flaticon.com/128/2976/2976215.png"
                    alt=""
                  />
                  Tovarlar Katalogi
                </h1>
              </div>
              <div className="orta">
                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
                <img
                  className="icon"
                  src="https://static-00.iconduck.com/assets.00/search-icon-2048x2048-cmujl7en.png"
                  alt=""
                />
              </div>
              <div className="right2">
                {localStorage.getItem("userImg") ? (
                  <img className="icon" src={localStorage.getItem("userImg")} alt="" />
                ) : null}
                {localStorage.getItem("userNum") ? (
                  <button className="btn"
                    onClick={() => {
                      localStorage.removeItem("userImg");
                      localStorage.removeItem("userName");
                      localStorage.removeItem("userNum");
                      window.location.reload();
                    }}
                  >
                    Chiqish
                  </button>
                ) : (
                  <Link to={"/login"}>
                    <img
                      className="icon"
                      src="https://cdn4.iconfinder.com/data/icons/contact-us-19/48/92-512.png"
                      alt=""
                    />
                    <button className="btn">Kirish</button>
                  </Link>
                )}

                <Link to={"/cart"}>
                  <img
                    className="icon"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Font_Awesome_5_solid_shopping-cart.svg/1152px-Font_Awesome_5_solid_shopping-cart.svg.png"
                    alt=""
                  />
                  <sub>{totalItems}</sub>
                  Savatcha
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{ display: search.length ? "block" : "none" }}
          className="onajon"
        >
          {modSearch?.length ? (
            <>
              <div className="cards">
                {modSearch.map((el) => {
                  return (
                    <Link to={`/piece/${el?._id}`}>
                      <div key={el?._id} className="card-search">
                        <img src={el?.image} alt="" />
                        <h1>{el?.name.slice(0, 15)}...</h1>
                        <p>{el?.desc.slice(0, 50)}...</p>
                        <p>{el?.price} so'm</p>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </>
          ) : (
            <h1>topilmadi...</h1>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Nav;
