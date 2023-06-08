import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import {
  About,
  ComingSoon,
  Contact,
  Home,
  News,
  NotFound,
  Restaurant,
  RoomDetails,
  Rooms,
  SinglePost,
  Spa,
} from "./pages";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/spa" element={<Spa />} />
      <Route path="/restaurant" element={<Restaurant />} />
      <Route path="/news" element={<News />} />
      <Route path="/single-post" element={<SinglePost />} />
      <Route path="/detail" element={<RoomDetails />} />
      <Route path="/rooms" element={<Rooms />} />
      <Route path="/coming-soon" element={<ComingSoon />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
