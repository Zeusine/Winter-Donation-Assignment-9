import React from 'react';
import { FaDonate, FaRegHeart, FaBoxes } from 'react-icons/fa'; // Importing icons for better visual appeal

const HowItWorks = () => {
    return (
        <div className="container mx-auto px-6 py-12 bg-cover bg-center" data-aos="fade-up"
     data-aos-duration="3000">
            <div className="bg-white bg-opacity-80 p-8 rounded-lg shadow-lg">
                <h2 className="text-3xl font-extrabold text-center text-yellow-700 mb-8">How It Works</h2>

                {/* Instructions for Donation */}
                <div className="mb-12">
                    <h3 className="text-2xl font-semibold text-[#1a675a] mb-4 text-center">Instructions for Winter Clothing Donation</h3>
                    <p className="text-lg text-gray-700 mb-6 text-center">
                        Follow these simple steps to donate winter clothes and make a big difference in someone’s life this winter!
                    </p>

                    <div className="space-y-4">
                        {/* Step 1: Choose Donation Method */}
                        <div className="flex items-start space-x-4">
                            <FaDonate className="text-4xl text-[#1a675a]" />
                            <div>
                                <h4 className="text-xl font-semibold text-[#1a675a]">Step 1: Choose Your Donation Method</h4>
                                <p className="text-gray-700">Decide whether you want to donate **new** or **gently used winter clothing** such as jackets, scarves, hats, and gloves.</p>
                            </div>
                        </div>

                        {/* Step 2: Find a Collection Point */}
                        <div className="flex items-start space-x-4">
                            <FaBoxes className="text-4xl text-[#1a675a]" />
                            <div>
                                <h4 className="text-xl font-semibold text-[#1a675a]">Step 2: Find a Collection Point</h4>
                                <p className="text-gray-700">Locate one of our **collection points** in your area, or schedule a **pickup** for your donation.</p>
                            </div>
                        </div>

                        {/* Step 3: Donate */}
                        <div className="flex items-start space-x-4">
                            <FaRegHeart className="text-4xl text-[#1a675a]" />
                            <div>
                                <h4 className="text-xl font-semibold text-[#1a675a]">Step 3: Make Your Donation</h4>
                                <p className="text-gray-700">Drop off your donations at the designated collection point or have them picked up by our volunteers.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Collection Points */}
                <div className="mb-12">
                    <h3 className="text-2xl font-semibold text-yellow-700 mb-4 text-center">Collection Points</h3>
                    <p className="text-lg text-gray-700 mb-6 text-center">
                        If you're donating items, you can drop them off at any of the following collection points in Bangladesh:
                    </p>

                    <ul className="list-disc pl-8 space-y-3 text-gray-700">
                        <li className="text-lg">Dhaka Donation Center - 12/3, Shantinagar, Dhaka</li>
                        <li className="text-lg">Chattogram Community Hall - 56/7, GEC Circle, Chattogram</li>
                        <li className="text-lg">Sylhet Charity Hub - 21/5, Zindabazar, Sylhet</li>
                        <li className="text-lg">Rajshahi Volunteer Center - 44, Alokpara, Rajshahi</li>
                        <li className="text-lg">Khulna Distribution Point - 38/2, Sonadanga, Khulna</li>
                    </ul>
                </div>

                {/* Supported Divisions */}
                <div>
                    <h3 className="text-2xl font-semibold text-yellow-700 mb-4 text-center">Supported Divisions</h3>
                    <p className="text-lg text-gray-700 mb-6 text-center">
                        Our winter clothing donation campaign is focused on providing assistance to the following divisions in Bangladesh:
                    </p>

                    <ul className="list-disc pl-8 space-y-3 text-gray-700">
                        <li className="text-lg">Dhaka Division</li>
                        <li className="text-lg">Chattogram Division</li>
                        <li className="text-lg">Rajshahi Division</li>
                        <li className="text-lg">Khulna Division</li>
                        <li className="text-lg">Sylhet Division</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default HowItWorks;