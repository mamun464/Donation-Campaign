import { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import { useParams } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';

const DonationPage = () => {
    const { id } = useParams();
    const [donations, setDonation] = useState([]);

    useEffect(() => {
        fetch('../../../public/donations.json')
            .then(res => res.json())
            .then(data => setDonation(data));
    }, []);

    const donationById = donations.find(donation => donation.id === parseInt(id, 10));
    const buttonStyle = {
        backgroundColor: donationById?.color_of_text_bg,
    };

    const donationOperation = (id) => {
        const donatedIds = JSON.parse(localStorage.getItem('donatedIds')) || [];
        if (donatedIds.includes(id)) {
            toast.info('You have already donated.');
        } else {
            // Save the id to local storage
            donatedIds.push(id);
            localStorage.setItem('donatedIds', JSON.stringify(donatedIds));

            // Show the success toast
            toast.success('Donation Successful.');
        }

    };

    return (
        <div className="px-8 max-w-7xl mx-auto mt-32 relative">
            <div className="flex justify-center">
                <div className="relative">
                    {/* Image */}
                    <img className="mt-6 xs:h-[350px] xs:w-[750px] md:h-[700px] md:w-[1300px] md:mt-0 rounded-lg" src={donationById?.image} alt="No_Data_Found" />

                    {/* Overlay with Donate button at the bottom */}
                    <div className="h-20 flex items-center justify-center xs:justify-start absolute left-0 bottom-0 bg-black bg-opacity-50 p-4 w-full xs:h-32 rounded-lg rounded-tl-none rounded-tr-none">
                        <button
                            className="btn py-2 px-3 text-white font-semibold text-xl  xs:ml-8 rounded-[4px] border-0"
                            style={buttonStyle}
                            onClick={() => donationOperation(donationById?.id)}
                        >
                            Donate ${donationById?.price}
                        </button>

                    </div>
                </div>

            </div>
            <div className="mt-12 mb-12">
                <h1 className="text-center md:text-start text-[#0B0B0B] font-bold text-5xl">{donationById?.title}</h1>
                <p className="mt-6 text[#0B0B0BB3] text-justify leading-7">{donationById?.description}</p>
            </div>

            <ToastContainer />
        </div>
    );
};

export default DonationPage;
