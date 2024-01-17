import { useState } from "react";
import { NavLink } from "react-router-dom";
import './Header.css'

const Header = () => {
    const [selectedNavLink, setSelectedNavLink] = useState('home');

    const handleNavLinkClick = (Nav_type) => {

        setSelectedNavLink(Nav_type);



    };
    return (
        <div className="max-w-7xl mx-auto mt-0 lg:mt-9 p-8 lg:p-0 absolute w-full z-10">
            <div className="flex flex-col md:flex-row items-center justify-between font-inter text-[#0B0B0B] font-normal text-lg">
                <div className="w-40 mb-4 md:mb-0 md:mr-8">
                    <img src="../../../Resources & Requrements Files/Logo.png" alt="" />
                </div>
                <div className="flex list-none gap-8 md:gap-12">
                    <li>
                        <NavLink className={`py-3 ${selectedNavLink === 'home' ? 'selected' : ''}`}
                            onClick={() => handleNavLinkClick('home')}>Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className={`py-3 ${selectedNavLink === 'donation' ? 'selected' : ''}`}
                            onClick={() => handleNavLinkClick('donation')}>Donation
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className={`py-3 ${selectedNavLink === 'statistics' ? 'selected' : ''}`}
                            onClick={() => handleNavLinkClick('statistics')}>Statistics
                        </NavLink>
                    </li>

                </div>
            </div>
        </div>
    );
};

export default Header;