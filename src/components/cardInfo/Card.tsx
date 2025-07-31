import star from "../../assets/icons/Star 1(1).svg";
import halfStar from "../../assets/icons/Star 5(1).svg";

interface Props {
  title: string;
  price: number;
  rating: 1 | 1.5 | 2 | 2.5 | 3 | 3.5 | 4 | 4.5 | 5;
  imageUrl: string;
  discount?: number;
}

const Card = ({ title, price, rating, imageUrl, discount }: Props) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  const discountedPrice = discount
    ? (price - price * (discount / 100)).toFixed(2)
    : null;

  return (
    <div className="">
      <img
        src={imageUrl}
        alt={title}
        className="max-w-[295px] max-h-[298px] bg-[rgba(240,_238,_237,_1)] rounded-[20px]"
      />
      <h1 className="mt-[16px] font-bold text-[20px] text-start">{title}</h1>

      <div className="mt-[8px] flex gap-[7px] items-center">
        {[...Array(fullStars)].map((_, idx) => (
          <img key={idx} src={star} alt="star" className="w-[16px] h-[16px]" />
        ))}
        {hasHalfStar && (
          <img src={halfStar} alt="half-star" className="w-[16px] h-[16px]" />
        )}
        <h3 className="text-[14px] font-normal">{rating}/5</h3>
      </div>

      <div className="flex gap-[10px] items-center mt-[8px]">
        {discount ? (
          <>
            <h2 className="discountPrice text-[24px] font-bold">
              ${discountedPrice}
            </h2>
            <h1 className="original-price text-[24px] text-[rgba(0,_0,_0,_0.4)] line-through">
              ${price.toFixed(2)}
            </h1>
            <button className="text-[12px] font-medium rounded-[62px] py-[6px] px-[14px] bg-[rgba(255,_51,_51,_0.1)] text-[rgba(255,_51,_51,_1)]">
              -{discount}%
            </button>
          </>
        ) : (
          <h1 className="text-[24px] font-bold text-black">
            ${price.toFixed(2)}
          </h1>
        )}
      </div>
    </div>
  );
};

export default Card;
