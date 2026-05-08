import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FirstCode from "../apr-27/FirstCode";
import SecondCode from "../apr-27/SecondCode";

function Rounting() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<FirstCode name="John" />} />
          <Route path="/second" element={<SecondCode />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default Rounting;
