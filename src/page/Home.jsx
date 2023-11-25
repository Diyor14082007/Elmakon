import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Slider from 'react-slick'
import Nav from '../components/Nav';
import Footer from '../components/Footer';

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [more, setMore] = useState(5);
  const [search, setSearch] = useState("");

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  const settingss = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 7,
  }

  useEffect(() => {
    axios.get('https://flowers-api-yqhj.onrender.com/products')
      .then((res) => {
        console.log(res);
        setPosts(res.data);
      }).catch((err) => {
        alert(err);
      });
  }, []);

  const searchFilter = posts?.filter((el) => {
    return el?.name?.toLowerCase().includes(search?.toLowerCase());
  })

  return (
    <>
      <Nav/>
      <aside>
        <Slider {...settings}>
          <div>
            <img
              src="https://elmakon.uz/images/abt__ut2/banners/all/41/1920x450_uz__5_.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://elmakon.uz/images/abt__ut2/banners/all/41/15_pro_pc_uz.png"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://elmakon.uz/images/abt__ut2/banners/all/41/15_pc_uz.png"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://elmakon.uz/images/abt__ut2/banners/all/41/1920x450_uz_ebi8-ms.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://elmakon.uz/images/abt__ut2/banners/all/40/1240x450_uz__2_.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://elmakon.uz/images/abt__ut2/banners/all/40/UZ_EL_WEB_4.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://elmakon.uz/images/abt__ut2/banners/all/40/UZ_EL_WEB_3.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://elmakon.uz/images/abt__ut2/banners/all/41/1240_450_UZ.png"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://elmakon.uz/images/abt__ut2/banners/all/40/1240x450_uz_a4hu-8l.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://elmakon.uz/images/abt__ut2/banners/all/39/1240x450_uz__2_.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://elmakon.uz/images/abt__ut2/banners/all/39/1240x450_Uzb.png"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://elmakon.uz/images/abt__ut2/banners/all/36/%D0%B1%D0%B0%D0%BD%D0%B5%D1%80-%D0%B4%D0%BB%D1%8F-%D1%81%D0%B0%D0%B8%CC%86%D1%82%D0%B0-%D1%83%D0%B7%D0%B1-%D0%B2%D0%B5%D1%80%D1%81%D0%B8%D1%8F-2.png"
              alt=""
            />
          </div>
        </Slider>

        <div className="card1">
          <img src="https://telegra.ph/file/e27d580381814b12919d3.jpg" alt="" />
          <img src="https://telegra.ph/file/c39cf87defc0eb3c547c2.jpg" alt="" />
          <img src="https://telegra.ph/file/4f813198402975bded57e.jpg" alt="" />
          <img src="https://telegra.ph/file/e814372da854c6a0e88bf.jpg" alt="" />
          <img src="https://telegra.ph/file/f88fa1c6ff607a4c9b77a.jpg" alt="" />
          <img src="https://telegra.ph/file/b27b52261b5b5a96a8785.jpg" alt="" />
          <img src="https://telegra.ph/file/dc5298f836d140ba437f5.jpg" alt="" />
          <img src="https://telegra.ph/file/3c097bbe2692474a7c36e.jpg" alt="" />
        </div>
      </aside>

      <div className="container">
        <Slider {...settingss}>
          <div className="slider5">
            <img
              src="https://elmakon.uz/images/thumbnails/75/75/feature_variant/37/logo_samsung-01.png"
              alt=""
            />
          </div>
          <div className="slider5">
            <img src="https://elmakon.uz/images/thumbnails/75/75/feature_variant/18/mi.png" alt="" />
          </div>

          <div className="slider5">
            <img
              src="https://elmakon.uz/images/thumbnails/75/75/feature_variant/9/2560px-Vivo_logo_2019.svg.png"
              alt=""
            />
          </div>

          <div className="slider5">
            <img
              src="https://elmakon.uz/images/thumbnails/75/75/feature_variant/22/hp.png"
              alt=""
            />
          </div>

          <div className="slider5">
            <img
              src="https://elmakon.uz/images/thumbnails/75/75/feature_variant/18/Artel.png"
              alt=""
            />
          </div>

          <div className="slider5">
            <img
              src="https://elmakon.uz/images/thumbnails/75/75/feature_variant/1/250px-Acer_2011.svg.png"
              alt=""
            />
          </div>

          <div className="slider5">
            <img
              src="https://elmakon.uz/images/thumbnails/75/75/feature_variant/1/LG_Logo.svg.png"
              alt=""
            />
          </div>

          <div className="slider5">
            <img
              src="https://elmakon.uz/images/thumbnails/75/75/feature_variant/1/200px-ASUS_Logo.svg.png"
              alt=""
            />
          </div>

          <div className="slider5">
            <img
              src="https://elmakon.uz/images/thumbnails/75/75/feature_variant/1/Sony_logo.svg.png"
              alt=""
            />
          </div>

          <div className="slider5">
            <img
              src="https://elmakon.uz/images/thumbnails/75/75/feature_variant/16/bosch_png.png"
              alt=""
            />
          </div>

          <div className="slider5">
            <img
              src="https://elmakon.uz/images/thumbnails/75/75/feature_variant/9/huawei-honor-logo-1.png"
              alt=""
            />
          </div>

          <div className="slider5">
            <img
              src="https://elmakon.uz/images/thumbnails/75/75/feature_variant/9/elmakon.png"
              alt=""
            />
          </div>

          <div className="slider5">
            <img
              src="https://elmakon.uz/images/thumbnails/75/75/feature_variant/26/1__5_.png"
              alt=""
            />
          </div>

          <div className="slider5">
            <img
              src="https://elmakon.uz/images/thumbnails/75/75/feature_variant/9/logo-new-_1___1_.png"
              alt=""
            />
          </div>

          <div className="slider5">
            <img
              src="https://elmakon.uz/images/thumbnails/75/75/feature_variant/11/logo-shivaki.png"
              alt=""
            />
          </div>

          <div className="slider5">
            <img src="https://elmakon.uz/images/thumbnails/75/75/feature_variant/19/212.png" alt="" />
          </div>

          <div className="slider5">
            <img
              src="https://elmakon.uz/images/thumbnails/75/75/feature_variant/11/Midea_logo.png"
              alt=""
            />
          </div>

          <div className="slider5">
            <img
              src="https://elmakon.uz/images/thumbnails/75/75/feature_variant/13/hyper-x-logo.png"
              alt=""
            />
          </div>

          <div className="slider5">
            <img
              src="https://elmakon.uz/images/thumbnails/75/75/feature_variant/11/cropped-logo.png"
              alt=""
            />

          </div>


          <div className="slider5">
            <img
              src="https://elmakon.uz/images/thumbnails/75/75/feature_variant/9/%D0%91%D0%B5%D0%B7_%D0%BD%D0%B0%D0%B7%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F__20_.png"
              alt=""
            />
          </div>

          <div className="slider5">
            <img
              src="https://elmakon.uz/images/thumbnails/75/75/feature_variant/11/H5beeaef725604b4cabcde50a30ff0ff1X.png"
              alt=""
            />
          </div>

          <div className="slider5">
            <img
              src="https://elmakon.uz/images/thumbnails/75/75/feature_variant/30/%D0%91%D0%B5%D0%B7_%D0%BD%D0%B0%D0%B7%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F__1_.png"
              alt=""
            />
          </div>

          <div className="slider5">
            <img
              src="https://elmakon.uz/images/thumbnails/75/75/feature_variant/18/aspor.png"
              alt=""
            />
          </div>

          <div className="slider5">
            <img
              src="https://elmakon.uz/images/thumbnails/75/75/feature_variant/26/ASRock-Logo.wine.png"
              alt=""
            />
          </div>

          <div className="slider5">
            <img
              src="https://elmakon.uz/images/thumbnails/75/75/feature_variant/20/3.jpg"
              alt=""
            />
          </div>

          <div className="slider5">
            <img
              src="https://elmakon.uz/images/thumbnails/75/75/feature_variant/18/aukey.png"
              alt=""
            />
          </div>

          <div className="slider5">
            <img
              src="https://elmakon.uz/images/thumbnails/75/75/feature_variant/19/aula.png"
              alt=""
            />
          </div>

          <div className="slider5">
            <img
              src="https://elmakon.uz/images/thumbnails/75/75/feature_variant/35/%D0%91%D0%B5%D0%B7_%D0%B8%D0%BC%D0%B5%D0%BD%D0%B8-4688.jpg"
              alt=""
            />
          </div>

          <div className="slider5">
            <img
              src="https://elmakon.uz/images/thumbnails/75/75/feature_variant/11/AUX_logo.png"
              alt=""
            />
          </div>

          <div className="slider5">
            <img
              src="https://elmakon.uz/images/thumbnails/75/75/feature_variant/11/Avalon.png"
              alt=""
            />
          </div>

          <div className="slider5">
            <img
              src="https://elmakon.uz/images/thumbnails/75/75/feature_variant/25/1.png"
              alt=""
            />
          </div>

          <div className="slider5">
            <img
              src="https://elmakon.uz/images/thumbnails/75/75/feature_variant/37/25.jpg"
              alt=""
            />
          </div>

          <div className="slider5">
            <img
              src="https://elmakon.uz/images/thumbnails/75/75/feature_variant/37/k-doo-logo.jpeg"
              alt=""
            />
          </div>

          <div className="slider5">
            <img
              src="https://elmakon.uz/images/thumbnails/75/75/feature_variant/36/Aerocool.png"
              alt=""
            />
          </div>

          <div className="slider5">
            <img
              src="https://elmakon.uz/images/thumbnails/75/75/feature_variant/27/%D0%91%D0%B5%D0%B7_%D0%BD%D0%B0%D0%B7%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F.png"
              alt=""
            />
          </div>

          <div className="slider5">
            <img
              src="https://elmakon.uz/images/thumbnails/75/75/feature_variant/32/f6401c46f5a513721f8e542eb34d695c.jpg"
              alt=""
            />
          </div>

          <div className="slider5">
            <img
              src="https://elmakon.uz/images/thumbnails/75/75/feature_variant/22/123.jpg"
              alt=""
            />
          </div>

          <div className="slider">
            <img
              src="https://elmakon.uz/images/thumbnails/75/75/feature_variant/10/Alcatel.png"
              alt=""
            />
          </div>

          <div className="slider5">
            <img
              src="https://elmakon.uz/images/thumbnails/75/75/feature_variant/33/Alonsa__3_.png"
              alt=""
            />
          </div>

          <div className="slider5">
            <img
              src="https://elmakon.uz/images/thumbnails/75/75/feature_variant/11/logo.png"
              alt=""
            />
          </div>

          <div className="slider5">
            <img
              src="https://elmakon.uz/images/thumbnails/75/75/feature_variant/11/2560px-Amazon_logo.svg.png"
              alt=""
            />
          </div>

          <div className="slider5">
            <img
              src="https://elmakon.uz/images/thumbnails/75/75/feature_variant/9/2560px-AMD_Logo.svg__1_.png"
              alt=""
            />
          </div>

          <div className="slider5">
            <img
              src="https://elmakon.uz/images/thumbnails/75/75/feature_variant/19/anker.png"
              alt=""
            />
          </div>

          <div className="slider5">
            <img
              src="https://elmakon.uz/images/thumbnails/75/75/feature_variant/13/aoc-resim-68.png"
              alt=""
            />
          </div>

          <div className="slider5">
            <img
              src="https://elmakon.uz/images/thumbnails/75/75/feature_variant/11/download.png"
              alt=""
            />
          </div>

          <div className="slider5">
            <img
              src="https://elmakon.uz/images/thumbnails/75/75/feature_variant/9/apacer.png"
              alt=""
            />
          </div>

          <div className="slider5">
            <img
              src="https://elmakon.uz/images/thumbnails/75/75/feature_variant/18/avtech.png"
              alt=""
            />
          </div>

          <div className="slider5">
            <img
              src="https://elmakon.uz/images/thumbnails/75/75/feature_variant/9/awei_850x425.png"
              alt=""
            />
          </div>

          <div className="slider5">
            <img
              src="https://elmakon.uz/images/thumbnails/75/75/feature_variant/9/R__8_.png"
              alt=""
            />
          </div>

          <div className="slider5">
            <img
              src="https://elmakon.uz/images/thumbnails/75/75/feature_variant/11/ballu-logo.png"
              alt=""
            />
          </div>

          <div className="slider5">
            <img
              src="https://elmakon.uz/images/thumbnails/75/75/feature_variant/11/ballu-logo.png"
              alt=""
            />
          </div>

          <div className="slider5">
            <img
              src="https://elmakon.uz/images/thumbnails/75/75/feature_variant/11/ballu-logo.png"
              alt=""
            />
          </div>

          <div className="slider5">
            <img
              src="https://elmakon.uz/images/thumbnails/75/75/feature_variant/20/4.jpg"
              alt=""
            />
          </div>

          <div className="slider5">
            <img
              src="https://elmakon.uz/images/thumbnails/75/75/feature_variant/9/Beko-logo-2048x1229.png"
              alt=""
            />
          </div>

          <div className="slider5">
            <img
              src="https://elmakon.uz/images/thumbnails/75/75/feature_variant/9/belkin.png"
              alt=""
            />
          </div>

          <div className="slider5">
            <img
              src="https://elmakon.uz/images/thumbnails/75/75/feature_variant/34/BenQ-Logo.svg.png"
              alt=""
            />
          </div>

          <div className="slider5">
            <img
              src="https://elmakon.uz/images/thumbnails/75/75/feature_variant/35/bernette-logo-swiss-design-for-Bee-500x111.png"
              alt=""
            />
          </div>

          <div className="slider5">
            <img
              src="https://elmakon.uz/images/thumbnails/75/75/feature_variant/11/logobeston-black.png"
              alt=""
            />
          </div>

          <div className="slider5">
            <img
              src="https://elmakon.uz/images/thumbnails/75/75/feature_variant/9/%D0%91%D0%B5%D0%B7_%D0%BD%D0%B0%D0%B7%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F__14_.png"
              alt=""
            />
          </div>

          <div className="slider5">
            <img
              src="https://elmakon.uz/images/thumbnails/75/75/feature_variant/37/Bvot.jpg"
              alt=""
            />
          </div>

          <div className="slider5">
            <img
              src="https://elmakon.uz/images/thumbnails/75/75/feature_variant/33/92f56ad9-7e60-4154-a450-8b1f5c1ac2ab.jpg"
              alt=""
            />
          </div>

          <div className="slider5">
            <img
              src="https://elmakon.uz/images/thumbnails/75/75/feature_variant/17/candc.png"
              alt=""
            />
          </div>

          <div className="slider5">
            <img
              src="https://elmakon.uz/images/thumbnails/75/75/feature_variant/9/Canon-Logo.png"
              alt=""
            />
          </div>

          <div className="slider5">
            <img
              src="https://elmakon.uz/images/thumbnails/75/75/feature_variant/17/canyon-logo-new-dark-1.png"
              alt=""
            />
          </div>

          <div className="slider5">
            <img
              src="https://elmakon.uz/images/thumbnails/75/75/feature_variant/9/R-_1___1_.png"
              alt=""
            />
          </div>

          <div className="slider5">
            <img
              src="https://elmakon.uz/images/thumbnails/75/75/feature_variant/22/celebrat.jpg"
              alt=""
            />
          </div>

        </Slider>
      </div>
      <h1 className='hh1'>Ko'p sotilganlar / Chegirma / Ommabop</h1>
      <div className="ota3">
        {searchFilter?.slice(0, more).map((el) => {
          return (
            <div className="card3" key={el?._id}>
              <img src={el?.image} alt="" />
              <h1>{el?.name}</h1>
              <h2>{el?.price}</h2>
              <h3>{el?.price}</h3>
            </div>
          )
        })}
      </div>
      <div className="bbt">
        <button className='btn1' style={{ display: more >= posts.length ? "none" : null }}
          onClick={() => setMore((prev) => prev + 5)}
        >
          SHOW MORE
        </button>
      </div>
      <br />
      <br />

      <div className="tel">
        <img src="https://elmakon.uz/images/abt__ut2/banners/all/36/1539x209_s0y4-rs.jpg" alt="" />
      </div>
      <h1 className='hh1'>Yangi mahsulotlar</h1>
      <div className="ota3">
        {searchFilter?.slice(0, more).map((el) => {
          return (
            <div className="card3">
              <img src={el?.image} alt="" />
              <h1>{el?.name}</h1>
              <h2>{el?.price}</h2>
              <h3>{el?.price}</h3>
            </div>
          )
        })}
      </div>
      <div className="bbt">
        <button className='btn1' style={{ display: more >= posts.length ? "none" : null }}
          onClick={() => setMore((prev) => prev + 5)}
        >
          SHOW MORE
        </button>

      </div>
      <br />
      <br />
      <div className="rasm1">
        <img src="https://telegra.ph/file/9a97109143487f6b5cd55.jpg" alt="" />
      </div>
      <h1 className='hh1'>Ko'p so'ralgan maxsulotlar</h1>
      <div className="ota3">
        {searchFilter?.slice(0, more).map((el) => {
          return (
            <div className="card3">
              <img src={el?.image} alt="" />
              <h1>{el?.name}</h1>
              <h2>{el?.price}</h2>
              <h3>{el?.price}</h3>
            </div>
          )
        })}
      </div>

      <div className="bbt">
        <button className='btn1' style={{ display: more >= posts.length ? "none" : null }}
          onClick={() => setMore((prev) => prev + 5)}
        >
          SHOW MORE
        </button>

      </div>

      <h1 className='hh1'>Kompaniya haqida</h1>
      <div className="end">

        <br />
        <p>Ushbu sayt elmakonning onlayn-do'koni bo'lib, internet orqali tovar va xizmatlarni taklif qiladi. Foydalanuvchilarga xarid buyurtmasini yaratish, to'lov usulini tanlash va buyurtmani onlayn yetkazib <br />berish imkonini beradi. Kerakli tovarlar yoki xizmatlarni tanlagandan so'ng, foydalanuvchi odatda saytning o'zida to'lov va yetkazib berish usulini tanlash imkoniyatiga ega. <br /><br />
          Onlayn do'kon va an'anaviy do'kon o'rtasidagi asosiy farq savdo maydonchasi turida. Oddiy do'konda savdo maydoni, vitrinalar, narx belgilari, shuningdek, sotuvchilar, kassirlar va tajribali <br />maslahatchilar kerak. Onlayn-do'kon esa dasturiy ta'minotda amalga oshirilgan barcha infratuzilmaga ega.</p>
      </div>

      <br />
      <br /><br /><br />
      <div className="ota-10">
        <div className="chap5">
          <h1>Yangiliklarimizga obuna bo'ling!</h1>
          <br />
          <p>Eksklyuziv chegirmalar, aksiyalar va Siz uchun foydali xaridlar <br />
            A'zo bo'ling va bizni kuzatib boring!</p>
          <br />
          <br />
          <div className="email">
            <input type="text" placeholder='E-mail' />
            <button>A'ZO BO'LISH</button>
          </div>
        </div>
        <div className="ong5">
          <h1>Bizga qo'shiling!</h1>
          <br />
          <p>Guruhimizga qo'shiling <br />
            barcha aksiyalar va takliflardan birinchi bo'lib xabardor bo'ling!</p>
          <br />
          <br />
          <img src="https://telegra.ph/file/81af6644224ff0e52188b.jpg" alt="" />
        </div>
      </div>
      <br />
      <br />
      <br />
      <Footer/>
    </>
  )
}

export default Home
