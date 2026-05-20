import React, { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import FirstCode from "./compontents/apr-27/FirstCode";
import SecondCode from "./compontents/apr-27/SecondCode";
import ThirdCode from "./compontents/apr-27/ThirdCode";
import ImageBar from "./compontents/apr-29/ImageBar";
import Rounting from "./compontents/may-6/Rounting";
import MobileView from "./compontents/may-1/MoblieView";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { mobile } from "./compontents/may-6/mobile";
import Product from "./compontents/may-6/Product";
import Login from "./compontents/may_8/Login";

function App() {
  // const movies = [
  //   {
  //     image:
  //       "https://m.media-amazon.com/images/I/51yUkVmPOrL._SY300_SX300_QL70_FMwebp_.jpg",
  //   },
  //   {
  //     image:
  //       "https://c4.wallpaperflare.com/wallpaper/582/397/194/poster-marvel-cinematic-universe-avengers-infinity-war-the-avengers-wallpaper-preview.jpg",
  //   },
  //   {
  //     image:
  //       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT82pWOPb5nGdIcbihLYRb23cQlxz-GJb36zA&s",
  //   },
  //   {
  //     image:
  //       "https://c4.wallpaperflare.com/wallpaper/716/265/234/thor-ragnarok-hd-4k-2017-wallpaper-preview.jpg",
  //   },
  //   {
  //     image:
  //       "https://c4.wallpaperflare.com/wallpaper/730/250/432/thor-ragnarok-4k-8k-2017-wallpaper-preview.jpg",
  //   },
  // ];

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login></Login>}/>
          <Route path="/mobiles" element={<MobileView mobiles={mobile} />} />
          <Route path="/mobileview/:prodID" element={<Product />} />
        </Routes>
      </BrowserRouter>
      {/* ? <ImageBar movies={movies}/> */}
      {/* <Rounting /> */}
    </>
  );
}

export default App;
