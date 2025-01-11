import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-purple-500 to-blue-500">
      <div className="text-center text-white">
        <h1 className="text-9xl font-bold mb-6">404</h1>
        <p className="text-2xl mb-4">Oops! Page Not Found</p>
        <p className="text-lg mb-6">
          The page you're looking for doesn't exist.
        </p>
        <Link to="/">
          <button className="px-8 py-3 text-lg font-semibold bg-white text-blue-500 rounded-full hover:bg-blue-500 hover:text-white transition-all">
            Go to Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
