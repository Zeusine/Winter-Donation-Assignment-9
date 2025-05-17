import React from 'react';
import Banner from '../Others/Banner';
import About from '../Others/About';

const Home = () => {
    return (
        <div>
            <header className='w-11/12 mx-auto '>
                <Banner></Banner>
            </header>
            <main>
                <section>
                    <About></About>
                </section>

            </main>
        </div>
    );
};

export default Home;