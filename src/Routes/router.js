// routes.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from '../Layout/Layout';
import { Homesection } from '../component/homescreen/Homesection';
import { AboutPage } from '../component/aboutpage/AboutPage';
import ContactPage from '../component/contactpage/ContactPage';
  

const routes = (
  <Routes>
    <Route element={<Layout />}>
      <Route path="/" element={<Homesection />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<ContactPage />} />
     </Route>
  </Routes>
);

export default routes;
