import { useEffect, useState } from "react";
import DonatedCard from "./DonatedCard";

const DonatedList = () => {
    const [donations, setDonation] = useState([]);
    const [donated, setDonated] = useState([]);
    const [showAll, setShowAll] = useState(false);
    const [displayedLimit] = useState(4);

    useEffect(() => {
        setDonated(JSON.parse(localStorage.getItem('donatedIds')) || []);
        fetch('/donations.json')
            .then(res => res.json())
            .then(data => setDonation(data));
    }, []);

    const handleSeeAllClick = () => {
        setShowAll(true);
    };

    const allDonatedItems = donations.filter(donation => donated.includes(donation.id));

    const displayedDonatedItems = showAll ? allDonatedItems : allDonatedItems.slice(0, displayedLimit);



    return (
        <>
            <div className="max-w-7xl p-8 lg:p-0 mx-auto mt-32 grid grid-cols-1 lg:grid-cols-2 gap-6">
                {displayedDonatedItems.map(donatedItem => (
                    <DonatedCard
                        key={donatedItem.id}
                        donatedItem={donatedItem}
                    />
                ))}
            </div>


            <div className="flex justify-center mt-10">
                {allDonatedItems.length > 4 && !showAll && (
                    <button
                        className="btn btn-success text-white font-semibold px-7 py-4"
                        onClick={handleSeeAllClick}
                    >
                        See All
                    </button>
                )}
            </div>

        </>
    );
};

export default DonatedList;
