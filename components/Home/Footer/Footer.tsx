import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-custom-green-dark text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          {/* Logo or Company Name with Image */}
          <div className="flex items-center mb-4 md:mb-0">
            {/* <img
              src="https://as1.ftcdn.net/v2/jpg/02/18/10/18/500_F_218101897_guA7I5b3wVDjusewERF24gmFyrbYStWz.jpg"
              alt="Books"
              className="w-16 h-auto mr-3"
            /> */}
            <div>
              <h1 className="text-xl font-bold">EduPulse</h1>
              <p className="text-xs mt-1">Empowering education with innovative solutions.</p>
            </div>
          </div>

          {/* Site Map */}
          <div className="flex flex-col md:flex-row md:space-x-6">
            {/* <div className="mb-4 md:mb-0">
              <h2 className="text-md font-semibold mb-1">Quick Links</h2>
              <ul className="text-xs space-y-1">
                <li><a id='home' className="hover:text-gray-300">Home</a></li>
                <li><a id='about' className="hover:text-gray-300">About</a></li>
                <li><a id='testimonials' className="hover:text-gray-300">Services</a></li>
              </ul>
            </div> */}
            <div>
              <h2 className="text-md font-semibold mb-1">Contact Us</h2>
              <p className="text-xs">Addis Ababa, Ethiopia</p>
              <p className="text-xs">Email: contact@edupulse.com</p>
              <p className="text-xs">Phone: (123) 456-7890</p>
            </div>
          </div>
        </div>

        {/* Horizontal Line */}
        <hr className="my-4 border-white" />

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-4">
          <a href="#" className="hover:text-gray-300">
            <FaFacebookF size={20} />
          </a>
          <a href="#" className="hover:text-gray-300">
            <FaTwitter size={20} />
          </a>
          <a href="#" className="hover:text-gray-300">
            <FaInstagram size={20} />
          </a>
          <a href="#" className="hover:text-gray-300">
            <FaLinkedinIn size={20} />
          </a>
        </div>

        {/* Footer Bottom */}
        <div className="mt-4 border-t border-gray-700 pt-2 text-center text-xs">
          <p>© 2024 EduPulse. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
