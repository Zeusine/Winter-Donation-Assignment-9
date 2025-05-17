import React from 'react';
import { Link } from 'react-router';

const DonationCard = ({ dat }) => {
  return (
    <div className="card bg-base-100 w-11/12 mx-auto shadow-sm hover:shadow-xl transition-shadow duration-300 mt-10 grid grid-cols-2">
      {/* Image Section */}
      <figure>
        <img src={dat.image} alt={dat.title} className="w-full h-64 object-cover rounded-t-lg" />
      </figure>

      <div className="card-body">
        {/* Title */}
        <h2 className="card-title text-[#1a675a]">{dat.title}</h2>

        {/* Description */}
        <p className="text-gray-700 mb-4">{dat.description}</p>

        {/* Division */}
        <p className="font-medium text-[#0c493e] mb-4">Division: {dat.division}</p>

        {/* Donate Button */}
        <div className="card-actions justify-end">
          <Link to={`/donation/${dat.id}`} className="btn btn-primary bg-[#1a675a] hover:bg-[#0c493e] text-white border-0 shadow-none">
            Donate Now
          </Link>
        </div>
      </div>
    </div>
  );
};
export default DonationCard