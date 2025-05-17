import React from 'react';
import { Link } from 'react-router';

const HowYouCanContribute = () => {
    return (
        <div className=" mx-auto px-6 py-12 bg-gray-100" >
            <h2 className="text-3xl font-bold text-center text-yellow-700 mb-8">How You Can Contribute</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Donate Money */}
                <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300" data-aos="fade-right">
                    <div className="text-center mb-6">
                        <h1  className="text-2xl font-semibold text-[#1a675a]">Donate Money</h1>
                    </div>
                    <p className="text-gray-700 mb-4">
                        Your financial support is essential in funding our charity campaigns. With your donations, we can provide food, clothing, water, and education to those in need.
                    </p>
                    <Link to="/donationCampaign" className="btn w-full bg-[#1a675a] text-white py-2 rounded-md hover:bg-[#0c493e] transition duration-300">
                        Donate Now
                    </Link>
                </div>

                {/* Donate Items */}
                <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300" data-aos="fade-left">
                    <div className="text-center mb-6">
                        <h3 className="text-2xl font-semibold text-[#1a675a]">Donate Items</h3>
                    </div>
                    <p className="text-gray-700 mb-4">
                        Donate winter clothing, medical supplies, and food items to help those in need. Every contribution, big or small, makes a difference.
                    </p>
                    <Link to={"/donationCampaign"} className="btn w-full bg-[#1a675a] text-white py-2 rounded-md hover:bg-[#0c493e] transition duration-300 mt-6">
                        Start Donating
                    </Link>
                </div>

                {/* Volunteer Your Time */}
                <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300" data-aos="fade-right">
                    <div className="text-center mb-6">
                        <h3 className="text-2xl font-semibold text-[#1a675a]">Volunteer Your Time</h3>
                    </div>
                    <p className="text-gray-700 mb-4">
                        Your time and effort can make a huge impact. Volunteer to help us sort donations, distribute supplies, or assist with our community events.
                    </p>
                    <button className="w-full bg-[#1a675a] text-white py-2 rounded-md hover:bg-[#0c493e] transition duration-300">
                        Become a Volunteer
                    </button>
                </div>

                {/* Spread the Word */}
                <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300" data-aos="fade-left">
                    <div className="text-center mb-6">
                        <h3 className="text-2xl font-semibold text-[#1a675a]">Spread the Word</h3>
                    </div>
                    <p className="text-gray-700 mb-4">
                        You can help by sharing our mission on social media and encouraging others to donate or volunteer. Together, we can make a bigger impact!
                    </p>
                    <button className="w-full bg-[#1a675a] text-white py-2 rounded-md hover:bg-[#0c493e] transition duration-300">
                        Share Now
                    </button>
                </div>

                {/* Organize a Fundraiser */}
                <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300" data-aos="fade-right">
                    <div className="text-center mb-6">
                        <h3 className="text-2xl font-semibold text-[#1a675a]">Organize a Fundraiser</h3>
                    </div>
                    <p className="text-gray-700 mb-4">
                        Host your own fundraising event! Whether it's a bake sale, a charity run, or a virtual event, you can bring your community together for a good cause.
                    </p>
                    <button className="w-full bg-[#1a675a] text-white py-2 rounded-md hover:bg-[#0c493e] transition duration-300">
                        Start Fundraising
                    </button>
                </div>

                {/* Corporate Partnerships */}
                <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300" data-aos="fade-left">
                    <div className="text-center mb-6">
                        <h3 className="text-2xl font-semibold text-[#1a675a]">Partner With Us</h3>
                    </div>
                    <p className="text-gray-700 mb-4">
                        If you're a business or organization, partner with us to make a difference! We offer various partnership levels and sponsorship opportunities.
                    </p>
                    <button className="w-full bg-[#1a675a] text-white py-2 rounded-md hover:bg-[#0c493e] transition duration-300">
                        Learn More
                    </button>
                </div>
            </div>
        </div>
    );
};

export default HowYouCanContribute;