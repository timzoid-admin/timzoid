import React, { useState } from 'react';
import logo from "../../assests/Timzoid Logo Trans 3.svg";
import { Link } from 'react-router-dom';

export const Header = () => {
  const countries = [
    { code: 'GB', name: 'United Kingdom', flag: '🇬🇧' },
    { code: 'NG', name: 'Nigeria', flag: '🇳🇬' },
    { code: 'EE', name: 'Estonia', flag: '🇪🇪' },
    // Add more countries as needed
  ];
  const [selectedCountry, setSelectedCountry] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);

  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
    setMenuOpen(false); // Close menu when select is clicked
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <div className="heads">
        <div className="head_container">
          <div className="logo">
            <Link to="/">
              <img src={logo} alt="" />
            </Link>
          </div>
          <div className={`navbar ${menuOpen ? 'open' : ''}`} onClick={closeMenu}>
            <ul>
              <Link to="/about"><li>About us</li></Link>
              <Link to="/contact"><li>Contact Us</li></Link>
            </ul>
          </div>
          <div className="selections" onClick={closeMenu}>
            <div className='selecting'>
              <select id="country" value={selectedCountry} onChange={handleCountryChange}>
                <option value="">Select</option>
                {countries.map((country) => (
                  <option key={country.code} value={country.code}>
                    {selectedCountry === country.code ? country.name : `${country.flag} ${country.name}`}
                  </option>
                ))}
              </select>
              {selectedCountry && (
                <span className="flag">{countries.find(c => c.code === selectedCountry).flag}</span>
              )}
            </div>
            <div className="contact_link">
              <Link to="/contact">
                <button>
                  speak with an agent 
                </button>
              </Link>
            </div>
          </div>
          <div className="hamburger" onClick={toggleMenu}>
            <div className={`line ${menuOpen ? 'open' : ''}`}></div>
            <div className={`line ${menuOpen ? 'open' : ''}`}></div>
            <div className={`line ${menuOpen ? 'open' : ''}`}></div>
          </div>
        </div>
      </div>
    </>
  );
};
