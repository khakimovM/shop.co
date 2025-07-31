import frame from "../../assets/icons/Frame 19.svg";
import { IoIosArrowDown } from "react-icons/io";
import star1 from "../../assets/icons/star.svg";
import star5 from "../../assets/icons/Star 5(1).svg";
import set from "../../assets/icons/Vector(11).svg";
import cor from "../../assets/icons/Vector(12).svg";

const Review = () => {
  return (
    <>
      <section className="rev mt-[32px]">
        <div className="my-container">
          <div className="flex justify-between items-center">
            <div className="left flex items-center gap-[8px]">
              <h1 className="text-[24px] font-bold">All Reviews</h1>
              <p className="text-[16px] font-normal text-[rgba(0,_0,_0,_0.6)]">
                (451)
              </p>
            </div>
            <div className="right flex items-center gap-2.5">
              <img src={frame} alt="" />
              <button className="flex items-center text-[16px] font-medium gap-[21px] bg-[rgba(240,_240,_240,_1)] rounded-[62px] py-[16px] px-[20px]">
                Latest <IoIosArrowDown />
              </button>
              <button className="text-[16px] font-medium text-white py-[16px] px-[20px] bg-black rounded-[62px] w-[166px]">
                Write a Review
              </button>
            </div>
          </div>
          <div className="flex items-center gap-[20px] mt-[24px]">
            <div className="border-[1px] border-[rgba(0,_0,_0,_0.1)] py-[28px] px-[32px] rounded-[20px] w-[610px] grow">
              <div className="flex justify-between items-center">
                <div className="flex gap-[7px]">
                  <img src={star1} alt="" className="w-[24px] h-[24px]" />
                  <img src={star1} alt="" className="w-[24px] h-[24px]" />
                  <img src={star1} alt="" className="w-[24px] h-[24px]" />
                  <img src={star1} alt="" className="w-[24px] h-[24px]" />
                  <img src={star5} alt="" className="w-[24px] h-[24px]" />
                </div>
                <div>
                  <img src={set} alt="" />
                </div>
              </div>
              <h1 className="flex gap-[7px] text-[20px] font-bold mt-[15px]">
                Samantha D. <img src={cor} alt="" />
              </h1>
              <p className="text-[16px] font-normal text-[rgba(0,_0,_0,_0.6)] w-[572px] mt-[17px]">
                "I absolutely love this t-shirt! The design is unique and the
                fabric feels so comfortable. As a fellow designer, I appreciate
                the attention to detail. It's become my favorite go-to shirt."
              </p>
              <h3 className="text-[16px] font-normal text-[rgba(0,_0,_0,_0.6)] mt-[24px]">
                Posted on August 14, 2023
              </h3>
            </div>
            <div className="border-[1px] border-[rgba(0,_0,_0,_0.1)] py-[28px] px-[32px] rounded-[20px] w-[610px] grow">
              <div className="flex justify-between items-center">
                <div className="flex gap-[7px]">
                  <img src={star1} alt="" className="w-[24px] h-[24px]" />
                  <img src={star1} alt="" className="w-[24px] h-[24px]" />
                  <img src={star1} alt="" className="w-[24px] h-[24px]" />
                  <img src={star1} alt="" className="w-[24px] h-[24px]" />
                </div>
                <div>
                  <img src={set} alt="" />
                </div>
              </div>
              <h1 className="flex gap-[7px] text-[20px] font-bold mt-[15px]">
                Alex M. <img src={cor} alt="" />
              </h1>
              <p className="text-[16px] font-normal text-[rgba(0,_0,_0,_0.6)] w-[572px] mt-[17px]">
                "The t-shirt exceeded my expectations! The colors are vibrant
                and the print quality is top-notch. Being a UI/UX designer
                myself, I'm quite picky about aesthetics, and this t-shirt
                definitely gets a thumbs up from me."
              </p>
              <h3 className="text-[16px] font-normal text-[rgba(0,_0,_0,_0.6)] mt-[24px]">
                Posted on August 15, 2023
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-[20px] mt-[20px]">
            <div className="border-[1px] border-[rgba(0,_0,_0,_0.1)] py-[28px] px-[32px] rounded-[20px] w-[610px] grow">
              <div className="flex justify-between items-center">
                <div className="flex gap-[7px]">
                  <img src={star1} alt="" className="w-[24px] h-[24px]" />
                  <img src={star1} alt="" className="w-[24px] h-[24px]" />
                  <img src={star1} alt="" className="w-[24px] h-[24px]" />
                  <img src={star5} alt="" className="w-[24px] h-[24px]" />
                </div>
                <div>
                  <img src={set} alt="" />
                </div>
              </div>
              <h1 className="flex gap-[7px] text-[20px] font-bold mt-[15px]">
                Ethan R. <img src={cor} alt="" />
              </h1>
              <p className="text-[16px] font-normal text-[rgba(0,_0,_0,_0.6)] w-[572px] mt-[17px]">
                "This t-shirt is a must-have for anyone who appreciates good
                design. The minimalistic yet stylish pattern caught my eye, and
                the fit is perfect. I can see the designer's touch in every
                aspect of this shirt."
              </p>
              <h3 className="text-[16px] font-normal text-[rgba(0,_0,_0,_0.6)] mt-[24px]">
                Posted on August 16, 2023
              </h3>
            </div>
            <div className="border-[1px] border-[rgba(0,_0,_0,_0.1)] py-[28px] px-[32px] rounded-[20px] w-[610px] grow">
              <div className="flex justify-between items-center">
                <div className="flex gap-[7px]">
                  <img src={star1} alt="" className="w-[24px] h-[24px]" />
                  <img src={star1} alt="" className="w-[24px] h-[24px]" />
                  <img src={star1} alt="" className="w-[24px] h-[24px]" />
                  <img src={star1} alt="" className="w-[24px] h-[24px]" />
                </div>
                <div>
                  <img src={set} alt="" />
                </div>
              </div>
              <h1 className="flex gap-[7px] text-[20px] font-bold mt-[15px]">
                Olivia P. <img src={cor} alt="" />
              </h1>
              <p className="text-[16px] font-normal text-[rgba(0,_0,_0,_0.6)] w-[572px] mt-[17px]">
                "As a UI/UX enthusiast, I value simplicity and functionality.
                This t-shirt not only represents those principles but also feels
                great to wear. It's evident that the designer poured their
                creativity into making this t-shirt stand out."
              </p>
              <h3 className="text-[16px] font-normal text-[rgba(0,_0,_0,_0.6)] mt-[24px]">
                Posted on August 17, 2023
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-[20px] mt-[20px]">
            <div className="border-[1px] border-[rgba(0,_0,_0,_0.1)] py-[28px] px-[32px] rounded-[20px] w-[610px] grow">
              <div className="flex justify-between items-center">
                <div className="flex gap-[7px]">
                  <img src={star1} alt="" className="w-[24px] h-[24px]" />
                  <img src={star1} alt="" className="w-[24px] h-[24px]" />
                  <img src={star1} alt="" className="w-[24px] h-[24px]" />
                  <img src={star1} alt="" className="w-[24px] h-[24px]" />
                </div>
                <div>
                  <img src={set} alt="" />
                </div>
              </div>
              <h1 className="flex gap-[7px] text-[20px] font-bold mt-[15px]">
                Liam K. <img src={cor} alt="" />
              </h1>
              <p className="text-[16px] font-normal text-[rgba(0,_0,_0,_0.6)] w-[572px] mt-[17px]">
                "This t-shirt is a fusion of comfort and creativity. The fabric
                is soft, and the design speaks volumes about the designer's
                skill. It's like wearing a piece of art that reflects my passion
                for both design and fashion."
              </p>
              <h3 className="text-[16px] font-normal text-[rgba(0,_0,_0,_0.6)] mt-[24px]">
                Posted on August 18, 2023
              </h3>
            </div>
            <div className="border-[1px] border-[rgba(0,_0,_0,_0.1)] py-[28px] px-[32px] rounded-[20px] w-[610px] grow">
              <div className="flex justify-between items-center">
                <div className="flex gap-[7px]">
                  <img src={star1} alt="" className="w-[24px] h-[24px]" />
                  <img src={star1} alt="" className="w-[24px] h-[24px]" />
                  <img src={star1} alt="" className="w-[24px] h-[24px]" />
                  <img src={star1} alt="" className="w-[24px] h-[24px]" />
                  <img src={star5} alt="" className="w-[24px] h-[24px]" />
                </div>
                <div>
                  <img src={set} alt="" />
                </div>
              </div>
              <h1 className="flex gap-[7px] text-[20px] font-bold mt-[15px]">
                Ava H. <img src={cor} alt="" />
              </h1>
              <p className="text-[16px] font-normal text-[rgba(0,_0,_0,_0.6)] w-[572px] mt-[17px]">
                "I'm not just wearing a t-shirt; I'm wearing a piece of design
                philosophy. The intricate details and thoughtful layout of the
                design make this shirt a conversation starter."
              </p>
              <h3 className="text-[16px] font-normal text-[rgba(0,_0,_0,_0.6)] mt-[24px]">
                Posted on August 19, 2023
              </h3>
            </div>
          </div>

          <button className="text-[16px] font-normal py-[16px] px-[54px] border-[1px] border-[rgba(0,_0,_0,_0.1)] rounded-[62px] mt-[35px] block mx-auto">Load More Reviews</button>
        </div>
      </section>
    </>
  );
};

export default Review;
