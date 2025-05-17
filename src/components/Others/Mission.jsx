

const Mission = () => {
    
    return (
        <div className='pb-15 w-11/12 mx-auto '>
            <h1 className='text-center text-4xl font-bold py-10 text-yellow-700'>Our Mission</h1>
            <div className='grid grid-cols-2 justify-center  gap-4 text-center'>
                <div className='bg-white rounded-2xl px-5 py-8 ' data-aos="fade-up">
                    <h1 className="text-2xl font-semibold text-[#1a675a]">Provide Warmth
                    </h1>
                    <p className = "font-extralight">Our goal is to provide warm clothing and supplies to those in need during the cold winter months. We aim to bring comfort and protection to vulnerable communities.
                    </p>
                </div>
                <div className='bg-white rounded-2xl px-5 py-8' data-aos="fade-up">
                    <h1 className="text-2xl font-semibold text-[#1a675a]">Support the Needy
                    </h1>
                    <p className = "font-extralight">We support families and individuals who are struggling with the harsh winter conditions by offering essential items like food, blankets, and coats.
                    </p>
                </div>
                <div className='bg-white rounded-2xl px-5 py-8' data-aos="fade-up"><h1 className="text-2xl font-semibold text-[#1a675a]">Encourage Community Engagement

                    </h1>
                    <p className = "font-extralight">We believe in the power of the community. Our mission encourages people to come together and contribute towards a common goal of helping those in need.

                    </p></div>
                <div className='bg-white rounded-2xl px-5 py-8' data-aos="fade-up">
                    <h1 className="text-2xl font-semibold text-[#1a675a]">Make a Long-Term Impact

                    </h1>
                    <p className = "font-extralight">Our mission is not just about short-term help, but about creating sustainable systems that improve the well-being of those affected by the cold in the long run.

                    </p></div>
            </div>
        </div>

    );
};

export default Mission;