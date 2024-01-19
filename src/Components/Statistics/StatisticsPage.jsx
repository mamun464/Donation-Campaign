import { useEffect, useState } from "react";
import { Chart } from "react-google-charts";

const StatisticsPage = () => {
    const [allDonations, setDonations] = useState(0);
    const [totalDonated, setTotalDonated] = useState(0);
    const [percentagesOfDonation, setPercentagesOfDonation] = useState(0);
    const [percentagesRemainingDonation, setPercentagesRemainingDonation] = useState(0);

    useEffect(() => {
        fetch('/donations.json')
            .then(res => res.json())
            .then(data => setDonations(data.length));

        const donatedLength = (JSON.parse(localStorage.getItem('donatedIds')))?.length || 0;
        setTotalDonated(donatedLength);
    }, []);

    useEffect(() => {
        const calculatedPercentagesOfDonation = ((totalDonated / allDonations) * 100).toFixed(2);
        const calculatedPercentagesRemainingDonation = (100 - calculatedPercentagesOfDonation).toFixed(2);

        setPercentagesOfDonation(calculatedPercentagesOfDonation);
        setPercentagesRemainingDonation(calculatedPercentagesRemainingDonation);
    }, [totalDonated, allDonations]);

    const chartData = [
        ['Donated', 'Remaining'],
        ['Donated', parseFloat(percentagesOfDonation)],
        ['Remaining', parseFloat(percentagesRemainingDonation)],
    ];
    const chartOptions = {
        // title: "Donation Statistics",
        colors: ['#00C49F', '#FF444A'],
        legend: 'none',
    }

    return (
        <div className="mt-32 " >
            <Chart
                chartType="PieChart"
                data={chartData}
                options={chartOptions}
                width={"100%"}
                height={"500px"}
            />

            <div className="flex flex-col gap-4 p-8 md:flex-row justify-center md:gap-12 text-[#0B0B0B] text-[18px]">
                <div className="flex items-center gap-4">
                    <p>Your Donation</p>
                    <div className="w-[100px] h-3 bg-[#00C49F] rounded-sm"></div>
                </div>
                <div className="flex items-center gap-4 ">
                    <p>Total Donation</p>
                    <div className="w-[100px] h-3 bg-[#FF444A] rounded-sm"></div>
                </div>
            </div>
        </div >
    );
};

export default StatisticsPage;
