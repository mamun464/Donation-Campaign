
import { NavLink } from "react-router-dom";
import './Header.css'

const Header = () => {

    return (
        <div className="max-w-7xl mx-auto mt-0 lg:mt-9 p-8 lg:p-0 absolute w-full z-10">
            <div className="flex flex-col md:flex-row items-center justify-between font-inter text-[#0B0B0B] font-normal text-lg">
                <div className="w-40 mb-4 md:mb-0 md:mr-8">
                    <img src="/Logo.png" alt="Nav_image_Not_found" />
                </div>
                <div className="flex list-none gap-8 md:gap-12">
                    <li>
                        <NavLink to="/" className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? 'selected' : ""
                        }>Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/donation" className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? 'selected' : ""
                        }>Donation
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="statistics/" className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? 'selected' : ""
                        }>Statistics
                        </NavLink>
                    </li>

                </div>
            </div>
        </div>
    );
};

export default Header;