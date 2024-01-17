
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const DonationCard = ({ donation }) => {
    const { id, title, category, image, color_of_card_bg, color_of_category_bg } = donation;
    const cardStyle = {
        backgroundColor: color_of_card_bg,
    };

    const categoryTextStyle = {
        color: color_of_category_bg,
    };

    return (
        <Link to={`/donation/${id}`} className="card bg-base-100 shadow-xl" style={cardStyle}>
            <figure><img src={image} alt="Donation Item" /></figure>
            <div className="card-body">
                <div className='rounded-[4px] w-fit px-[10px] py-1' style={{ ...cardStyle, ...categoryTextStyle }}>
                    <h2 className="card-title font-medium text-[14px]">
                        {category}
                    </h2>
                </div>
                <div className='' style={categoryTextStyle}>
                    <h2 className="card-title font-semibold text-xl">
                        {title}
                    </h2>
                </div>
            </div>
        </Link>
    );
};

DonationCard.propTypes = {
    donation: PropTypes.object.isRequired,
};

export default DonationCard;
