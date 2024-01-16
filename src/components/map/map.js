import React from 'react';

const Map = () => {
  return (
    <div>
      <h1 className="text-3xl p-3 text-white pl-4 flex bg-blue-400 items-center">Get Our Location</h1>
      <div>
        <iframe
          title="Map"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7025.253883868952!2d83.9607543!3d28.3096229!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399593a532cb8607%3A0xdaaaca2254d2ed93!2sShree%20Bindheyshwori%20secondary%20school!5e0!3m2!1sen!2snp!4v1704966724676!5m2!1sen!2snp"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          className='text-white'
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Map;
