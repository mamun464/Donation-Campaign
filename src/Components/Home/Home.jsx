import { useEffect, useState } from 'react';
import DonationCard from '../Card/DonationCard';

const Home = () => {
    const [donations, setDonation] = useState([])

    useEffect(() => {
        fetch('donations.json')
            .then(res => res.json())
            .then(data => setDonation(data))
    }, []);
    return (
        <>
            <div className="hero h-[480px]  relative">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: 'url(https://i.ibb.co/7zg43bd/banner-donations.jpg)',
                        opacity: 0.1
                    }}>

                </div>
                <div className="hero-content text-center text-neutral-content relative z-10">
                    <div className="">
                        <h1 className="mb-5 text-3xl md:text-5xl font-bold text-[#0B0B0B]">I Grow By Helping People In Need</h1>
                        <input
                            type="text"
                            placeholder="Search here...."
                            className="mt-6 mb-4 border border-solid border-gray-300  text-black bg-white py-4 px-7 rounded-lg focus:outline-none focus:border-gray-400 focus:bg-gray-50 xs:border-r-0  xs:rounded-tr-none xs:rounded-br-none "
                        />
                        <button className='py-[16.9px] px-7 text-white font-semibold bg-[#FF444A] rounded-lg  xs:rounded-tl-none xs:rounded-bl-none'>Search</button>
                    </div>
                </div>

            </div>
            <div className='p-8 mt-24 max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4'>
                {
                    donations.map(donation => <DonationCard
                        key={donation.id}
                        donation={donation}
                    ></DonationCard>)
                }

            </div>
        </>
    );
};

export default Home;
