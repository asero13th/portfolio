import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import {
  faGithub,
  faLinkedin,
  faTwitter,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import myPhoto from '../assets/my-photoes/croped_black_and_white.jpg';

const Navigation = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Toggle the dropdown menu for small screens
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <aside className="md:w-[25%] bg-white md:fixed md:left-0 top-0 bottom-0  flex flex-col md:block border border-gray-200">
       <button
                type="button"
                className="md:hidden flex items-center justify-between w-full md:px-4 py-2 text-gray-700 font-medium hover:text-gray-900"
                onClick={toggleDropdown}
              >
                <span className="sr-only">Toggle navigation</span>
                <FontAwesomeIcon icon={faBars} className="w-5 h-5 " />
              </button>
      <div className="flex flex-col justify-center items-center md:mb-8 md:mb-0">
        <img
          src={myPhoto}
          alt="My Photo"
          className="mt-5 rounded-full w-32 h-32 border border-gray-400 object-cover hidden  md:block"
        />
        <div className="md:mt-4">
          {/* Navigation items go here */}
          <nav className="mt-8 flex flex-col md:block">
            {/* Dropdown menu for small screens */}
            <div className="md:hidden">
             
              <div
                className={`${
                  isDropdownOpen ? 'block' : 'hidden'
                } w-full px-2 pt-2 pb-3 space-y-1`}
              >
                <a
                  href="#home"
                  className="block px-3 py-2 text-gray-700 font-medium hover:text-gray-900 flex justify-center items-center"
                >
                  Home
                </a>
                <a
                  href="#about"
                  className="block px-3 py-2 text-gray-700 font-medium hover:text-gray-900 flex justify-center items-center"
                >
                  About
                </a>
                <a
                  href="#services"
                  className="block px-3 py-2 text-gray-700 font-medium hover:text-gray-900 flex justify-center items-center"
                >
                  Services
                </a>
                <a
                  href="#portfolio"
                  className="block px-3 py-2 text-gray-700 font-medium hover:text-gray-900 flex justify-center items-center"
                >
                  Portfolio
                </a>
                <a
                  href="#blog"
                  className="block px-3 py-2 text-gray-700 font-medium hover:text-gray-900 flex justify-center items-center"
                >
                  Blog
                </a>
                <a
                  href="#contact"
                  className="block px-3 py-2 text-gray-700 font-medium hover:text-gray-900 flex justify-center items-center"
                >
                  Contact
                </a>
              </div>
            </div>

            {/* Vertical menu for medium and larger screens */}
            <ul className="hidden md:flex flex-col list-none pl-0 mt-5">
              <li className="mb-4">
                <a
                  href="#home"
                  className="text-gray-700 font-medium hover:text-gray-900 flex justify-center items-center"
                >
                  Home
                </a>
              </li>
              <li className="mb-4">
                <a
                  href="#about"
                  className="text-gray-700 font-medium hover:text-gray-900 flex justify-center items-center"
                >
                  About
                </a>
              </li>
              <li className="mb-4">
                <a
                  href="#services"
                  className="text-gray-700 font-medium hover:text-gray-900 flex justify-center items-center"
                >
                  Services
                </a>
              </li>
              <li className="mb-4">
                <a
                  href="#portfolio"
                  className="text-gray-700 font-medium hover:text-gray-900 flex justify-center items-center"
                >
                  Portfolio
                </a>
              </li>
              <li className="mb-4">
                <a
                  href="#blog"
                  className="text-gray-700 font-medium hover:text-gray-900  flex justify-center items-center"
                >
                  Blog
                </a>
              </li>
              <li className="mb-4">
                <a
                  href="#contact"
                  className="text-gray-700 font-medium hover:text-gray-900 flex justify-center items-center"
                >
                  Contact
                </a>
              </li>
              {/* Social media icons for medium and larger screens */}
              <li className="flex mt-4">
                <a
                  href="https://github.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-gray-900 mr-4"
                >
                  <FontAwesomeIcon icon={faGithub} className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/your-username/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-gray-900 mr-4"
                >
                  <FontAwesomeIcon icon={faLinkedin} className="w-5 h-5" />
                </a>
                <a
                  href="https://twitter.com/your-username"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-gray-900 mr-4"
                >
                  <FontAwesomeIcon icon={faTwitter} className="w-5 h-5" />
                </a>
                <a
                  href="https://www.instagram.com/your-username/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-gray-900 mr-4"
                >
                  <FontAwesomeIcon icon={faInstagram} className="w-5 h-5" />
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </aside>
  );
};

export default Navigation;