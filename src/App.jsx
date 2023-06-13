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
  FAQ,
  Services,
  Facilities,
  Team,
  Pricing
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
      <Route path="/faqs" element={<FAQ />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/services" element={<Services />} />
      <Route path="/facilities" element={<Facilities />} />
      <Route path="/team" element={<Team />} />
      <Route path="/pricing" element={<Pricing />} />
    </Routes>
  );
};

export default App;
