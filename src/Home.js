import React, { useState } from "react";
import "./Home.css";
import "./Header.css";
import "./Product";
import Product from "./Product";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Banner1 from "./image/banner_2.jpg";
import Banner2 from "./image/Products/Banner_30.png";
import Banner3 from "./image/Products/Vaccum_max.png";
import Banner4 from "./image/banner_5.jpg";
import Banner5 from "./image/banner_6.jpg";
import Image from "./image/Products/Philips/image.png";
import Photo from "./image/Products/image.png";
import Watch from "./image/Products/Timex/Timex6.png";
import Watch2 from "./image/Products/Timex/Timex1.png";
import Cleaner from "./image/Products/Philips/Philips_2.webp";
import Cleaner2 from "./image/Products/Philips/Philips_cleaner.webp";
import Microwave from "./image/Products/Philips/Microwave.png";
import timexImage from "./image/Products/Timex_Analog/Timex_A1.png";
import timexImage2 from "./image/Products/Timex_Analog/Timex_A2.png";
import timexImage3 from "./image/Products/Timex_Analog/Timex_A3.png";
import timexImage4 from "./image/Products/Timex_Analog/Timex_A4.png";
import timexImage5 from "./image/Products/Timex_Analog/Timex_A5.png";
import timexImage6 from "./image/Products/Timex_Analog/Timex_A6.png";
import timexImage7 from "./image/Products/Timex_Analog/Timex_A7.png";
import timexImage8 from "./image/Products/Timex_Analog/Timex_A8.png";

function Home() {
  const [currentPage, setCurrentPage] = useState(false);

  const products = [
    {
      id: "70",
      image: timexImage,
      tittle:
        "Timex Stainless Steel Analog Silver Dial Women Watch-Tw000T634, Silver Band ...",
      price: 2995,
      rating: 3,
    },
    {
      id: "80",
      image: timexImage2,
      price: 2695,
      rating: 4,
      tittle:
        "Helix Analog Silver Dial & Leather Straps Analogue Multi Function Watch...",
    },
    {
      id: "90",
      image: timexImage3,
      price: 1995,
      rating: 5,
      tittle: "Helix by Timex Analog Silver Dial Men's Watch-TW027HG17...",
    },
    {
      id: "100",
      image: timexImage4,
      price: 2795,
      rating: 1,
      tittle: "Helix by Timex Analog Silver Dial Men's Watch-TW033HGO8...",
    },
    {
      id: "110",
      image: timexImage5,
      price: 2395,
      rating: 2,
      tittle: "Helix Analog Silver Dial Men's Watch - TW044HG00...",
    },
    {
      id: "120",
      image: timexImage6,
      price: 2995,
      rating: 3,
      tittle: "Helix TW052HL02 Summer Cool Analog Watch for Women...",
    },
    {
      id: "130",
      image: timexImage7,
      price: 2995,
      rating: 3,
      tittle:
        "TIMEX Unisex Stainless Steel Analog Silver Dial Watch-Tw0Tg8009, Band Color-Multicolor...",
    },
    {
      id: "140",
      image: timexImage8,
      price: 5250,
      rating: 4,
      tittle: "TIMEX Men Beige Round Analog Watch - TWEG165SMU01...",
    },
  ];

  const productsPerPage = 3;
  const totalPages = Math.ceil(products.length / productsPerPage);

  const handleNextPage = () => {
    // Ensure that clicking "Next" does not exceed total pages
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages - 1));
  };

  const handlePrevPage = () => {
    // Ensure that clicking "Previous" does not go below page 0
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 0));
  };

  const startIndex = currentPage * productsPerPage;
  const endIndex = Math.min(startIndex + productsPerPage, products.length);
  const currentProducts = products.slice(startIndex, endIndex);

  return (
    <div className="home">
      <Carousel
        autoPlay={true}
        showThumbs={false}
        showStatus={false}
        showIndicators={false}
        showArrows={false}
        infiniteLoop={true}
        interval={1000}
      >
        <div className="home__container">
          <img className="home__image" src={Banner2} />
        </div>
        <div className="home__container">
          <img className="home__image" src={Photo} />
        </div>
        <div className="home__container">
          <img className="home__image" src={Image} />
        </div>

        <div className="home__container">
          <img className="home__image" src={Banner1} />
        </div>
        <div className="home__container">
          <img className="home__image" src={Banner3} />
        </div>
        <div className="home__container">
          <img className="home__image" src={Banner4} />
        </div>
        <div className="home__container">
          <img className="home__image" src={Banner5} />
        </div>
      </Carousel>

      <div className="home__row">
        <Product
          id="50"
          tittle="Helix Smart Metal fit 3.0 Smartwatch, Continuous Heart Rate Monitor, SPO2 Monitor, Activity tracking and sleep tracking, Bluetooth Calling,Temperature sensor(Pink)"
          price={3995}
          image={Watch}
          rating={5}
        />

        <Product
          id="60"
          tittle="Helix METALFIT 2.0 Smart Watch, Bluetooth Calling, 1.5HD IPS Full-Touch Display, SPO2, Body Temperature & BP Measurement, 20 Sports Modes and Unlimited Watch Faces."
          image={Watch2}
          price={5999}
          rating={4}
        />
      </div>

      <div className="home__row">
        <Product
          id="70"
          image={Cleaner}
          tittle="Philips SpeedPro Cordless Stick vacuum cleaner - FC6723/01 FC6723/01 Cordless Vacuum Cleaner  (Star White)"
          price={29995}
          rating={4}
        />

        <Product
          id="80"
          image={Cleaner2}
          price={39995}
          rating={4}
          tittle="Philips SpeedPro Aqua Cordless Vacuum Cleaner FC6728/01 with Vacuum and mop System Denim Blue Metallic"
        />

        <Product
          id="90"
          image={Microwave}
          price={29995}
          rating={5}
          tittle="Philips Digital Oven Toaster Grill 55 Litre 2000W, with Opti Temp Technology, Temperature control, Convection Mode, Chamber light and 11 pre-set menus, Inner Lamp"
        />
      </div>

      <div className="home__row">
        <Product
          id="100"
          image="https://www.virginmegastore.om/medias/Full-Width-Large-Apple-Airpods-Its-Magic-Remastered-Desktop.webp?context=bWFzdGVyfHJvb3R8Mzk3Mjh8YXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtfGgzZC9oNjAvOTg5NzQwOTkwNDY3MC9GdWxsLVdpZHRoLUxhcmdlLUFwcGxlLUFpcnBvZHMtSXRzLU1hZ2ljLVJlbWFzdGVyZWQtRGVza3RvcC53ZWJwfDA1MmFjMmMyZTBjNDU4NDU5ODYxMmUyNTg4NTM2MGFhMzZkYTZiOTcyNzQ3ZDI1MDViMmVlMzRkMTRmODdiOWY"
          tittle="ASUS Vivobook Go 14, AMD Ryzen 3 7320U, 14 (35.56 cm) FHD, Thin and Light Laptop (8 GB RAM/512GB SSD/Win11/Office 2021/42WHr /Black/1.38 kg), E1404FA-NK325WS Operating System: Windows 11 Home | Special Feature: Anti Glare Coating | Connectivity: Bluetooth; Ethernet; HDMI; USB; Wi-Fi"
          price={600.7}
          rating={5}
        />
      </div>

      <div className="home__row">
        <button onClick={handlePrevPage} className="button-left">
          <span className="image_next_1">↑</span>
        </button>

        {currentProducts.map((product) => (
          <Product
            key={product.id}
            id={product.id}
            image={product.image}
            tittle={product.tittle}
            price={product.price}
            rating={product.rating}
          />
        ))}

        <button onClick={handleNextPage} className="button-right">
          <span className="image_next_2">↑</span>
        </button>
      </div>

      <div className="home__row">
        <Product
          id="100"
          image="https://www.virginmegastore.om/medias/Full-Width-Large-Apple-Airpods-Its-Magic-Remastered-Desktop.webp?context=bWFzdGVyfHJvb3R8Mzk3Mjh8YXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtfGgzZC9oNjAvOTg5NzQwOTkwNDY3MC9GdWxsLVdpZHRoLUxhcmdlLUFwcGxlLUFpcnBvZHMtSXRzLU1hZ2ljLVJlbWFzdGVyZWQtRGVza3RvcC53ZWJwfDA1MmFjMmMyZTBjNDU4NDU5ODYxMmUyNTg4NTM2MGFhMzZkYTZiOTcyNzQ3ZDI1MDViMmVlMzRkMTRmODdiOWY"
          tittle="ASUS Vivobook Go 14, AMD Ryzen 3 7320U, 14 (35.56 cm) FHD, Thin and Light Laptop (8 GB RAM/512GB SSD/Win11/Office 2021/42WHr /Black/1.38 kg), E1404FA-NK325WS Operating System: Windows 11 Home | Special Feature: Anti Glare Coating | Connectivity: Bluetooth; Ethernet; HDMI; USB; Wi-Fi"
          price={600.7}
          rating={5}
        />
      </div>
    </div>
  );
}

export default Home;
