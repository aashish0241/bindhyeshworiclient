import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="text-center text-white bg-gray-800 mt-0 p-4">
      <div className="text-lg">
        This website is developed by Aashish Timsina || &copy; All rights
        reserved {currentYear}
      </div>
    </div>
  );
};

export default Footer;
