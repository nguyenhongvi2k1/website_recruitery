// components/MenuButton.js
import React from 'react';
import { FaBars } from 'react-icons/fa'; // Use the appropriate icon from react-icons

const MenuButton = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="lg:hidden text-white focus:outline-none focus:text-gray-300"
    >
      <FaBars size={24} />
    </button>
  );
};

export default MenuButton;
