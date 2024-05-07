// routes.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
 import { Homesection } from '../component/homescreen/Homesection';
import { AboutPage } from '../component/aboutpage/AboutPage';
import ContactPage from '../component/contactpage/ContactPage';
  

const routes = (
  <Routes>
      <Route path="/" element={<Homesection />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<ContactPage />} />
  </Routes>
);

export default routes;
