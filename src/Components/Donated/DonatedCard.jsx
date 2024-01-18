
import { PropTypes } from 'prop-types';

const DonatedCard = ({ donatedItem }) => {
    const { title, price, category, image, color_of_card_bg, color_of_category_bg } = donatedItem;

    const cardStyle = {
        backgroundColor: color_of_card_bg,
    };
    const detailsBtnStyle = {
        backgroundColor: color_of_category_bg,
    };
    const categoryTextStyle = {
        color: color_of_category_bg,
    };

    return (
        <div className="xm:card xm:card-side bg-base-100 shadow-xl " style={cardStyle}>
            <figure><img className='h-full w-full xm:w-56' src={image} alt="Image_not_found" /></figure>
            <div className="card-body">
                <div className='rounded-[4px] w-fit px-[10px] py-1' style={{ ...cardStyle, ...categoryTextStyle }}>
                    <h2 className="card-title font-medium text-[14px]">
                        {category}
                    </h2>
                </div>
                <h2 className="card-title text-[#0B0B0B] text-2xl">{title}</h2>
                <p className='font-semibold' style={categoryTextStyle} >${price}</p>
                <button className="border-0 mt-5 btn text-white text-[18px] font-semibold px-4 py-[9px] rounded w-fit" style={detailsBtnStyle}>View Details</button>
            </div>

        </div>
    );
};
DonatedCard.propTypes = {
    donatedItem: PropTypes.object.isRequired,
};
export default DonatedCard;