import { IoIosArrowForward } from "react-icons/io";
import image2 from "../../assets/icons/image 2.svg";
import img5 from "../../assets/icons/image 5.svg";
import img6 from "../../assets/icons/image 6.svg";
import img1 from "../../assets/icons/image 1.svg";
import star1 from "../../assets/icons/star.svg";
import star5 from "../../assets/icons/Star 5(1).svg";
import cor from "../../assets/icons/Group 8.svg";
import cor2 from "../../assets/icons/Ellipse 2.svg";
import cor3 from "../../assets/icons/Ellipse 3.svg";
import minus from "../../assets/icons/Vector(9).svg";
import plus from "../../assets/icons/Vector(10).svg";

const Hero = () => {
  return (
    <>
      <section className="card-hero">
        <div className="my-container">
          <div className="bg-[rgba(0,_0,_0,_0.1)] h-[1px]"></div>
          <div className="flex gap-[12px] mt-[24px] items-center w-[100%]">
            <button className="flex items-center justify-center gap-[6px] text-[16px] font-[400] text-[rgba(0,_0,_0,_0.6)]">
              Home <IoIosArrowForward className="mt-[3px]" />
            </button>
            <button className="flex items-center justify-center gap-[6px] text-[16px] font-[400] text-[rgba(0,_0,_0,_0.6)]">
              Shop <IoIosArrowForward className="mt-[3px]" />
            </button>
            <button className="flex items-center justify-center gap-[6px] text-[16px] font-[400] text-[rgba(0,_0,_0,_0.6)]">
              Men <IoIosArrowForward className="mt-[3px]" />
            </button>
            <button className="flex items-center justify-center gap-[6px] text-[16px] font-[400] text-[rgba(0,_0,_0,_1)]">
              T-shirts <IoIosArrowForward className="mt-[3px]" />
            </button>
          </div>
          <div className="mt-[36px] flex w-[100%]">
            <div className="flex flex-col gap-y-[14px] w-[152px] flex-shrink-0">
              <img src={image2} alt="" className="" />
              <img src={img5} alt="" className="" />
              <img src={img6} alt="" className="" />
            </div>
            <div className="ml-[14px] h-[530px] flex-shrink-0 w-[444px]">
              <img src={img1} alt="" className="" />
            </div>
            <div className="ml-[40px]">
              <h1 className="text-[30px] font-bold mt-0">
                One Life Graphic T-shirt
              </h1>
              <div className="flex items-center mt-[7px] gap-[16px]">
                <div className="flex gap-[7px]">
                  <img src={star1} alt="" className="w-[24px] h-[24px]" />
                  <img src={star1} alt="" className="w-[24px] h-[24px]" />
                  <img src={star1} alt="" className="w-[24px] h-[24px]" />
                  <img src={star1} alt="" className="w-[24px] h-[24px]" />
                  <img src={star5} alt="" className="w-[24px] h-[24px]" />
                </div>
                <h1 className="text-[16px] font-[400]">4.5/5</h1>
              </div>
              <div className="flex mt-[7px] items-center">
                <h1 className="text-[32px] font-bold">$260</h1>
                <h1 className="text-[32px] font-bold text-[rgba(0,_0,_0,_0.3)] line-through ml-[12px]">
                  $300
                </h1>
                <button className="ml-[12px] rounded-[62px] bg-[rgba(255,_51,_51,_0.1)] text-[16px] font-[500] text-[rgba(255,_51,_51,_1)] py-[3px] px-[14px]">
                  -40%
                </button>
              </div>
              <p className="text-[16px] font-normal text-[rgba(0,_0,_0,_0.6)]">
                This graphic t-shirt which is perfect for any occasion. Crafted
                from a soft and breathable fabric, it offers superior comfort
                and style.
              </p>
              <div className="h-[1px] bg-[rgba(0,_0,_0,_0.1)] w-[850px] mt-[20px]"></div>
              <h1 className="text-[16px] font-normal text-[rgba(0,_0,_0,_0.6)] mt-[14px]">
                Select Colors
              </h1>
              <div className="flex gap-[16px] mt-[16px]">
                <img src={cor} alt="" />
                <img src={cor2} alt="" />
                <img src={cor3} alt="" />
              </div>
              <div className="h-[1px] bg-[rgba(0,_0,_0,_0.1)] w-[850px] mt-[20px]"></div>
              <h1 className="text-[16px] font-normal text-[rgba(0,_0,_0,_0.6)] mt-[14px]">
                Choose Size
              </h1>
              <div className="flex gap-[12px]">
                <button className="text-[rgba(0,_0,_0,_0.6)] text-[16px] font-normal py-[12px] px-[24px] bg-[rgba(240,_240,_240,_1)] rounded-[62px] mt-[16px]">
                  Small
                </button>
                <button className="text-[rgba(0,_0,_0,_0.6)] text-[16px] font-normal py-[12px] px-[24px] bg-[rgba(240,_240,_240,_1)] rounded-[62px] mt-[16px]">
                  Medium
                </button>
                <button className="bg-black text-[16px] font-normal py-[12px] px-[24px] text-white rounded-[62px] mt-[16px]">
                  Large
                </button>
                <button className="text-[rgba(0,_0,_0,_0.6)] text-[16px] font-normal py-[12px] px-[24px] bg-[rgba(240,_240,_240,_1)] rounded-[62px] mt-[16px]">
                  X-Large
                </button>
              </div>
              <div className="h-[1px] bg-[rgba(0,_0,_0,_0.1)] w-[850px] mt-[24px]"></div>
              <div className="flex mt-[34px] items-center gap-[20px]">
                <div className="flex items-center bg-[rgba(240,_240,_240,_1)] py-[16px] px-[20px] gap-[40px] text-center rounded-[62px]">
                  <button>
                    <img src={minus} alt="" />
                  </button>
                  <h1 className="text-[16px] font-medium">1</h1>
                  <button>
                    <img src={plus} alt="" />
                  </button>
                </div>
                <div>
                  <button className="w-[500px] text-[16px] font-medium text-[rgba(255,_255,_255,_1)] bg-[rgba(0,_0,_0,_1)] py-[16px] px-[54px] rounded-[62px]">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex mt-[80px] justify-around">
            <h1 className="text-[20px] font-normal text-[rgba(0,_0,_0,_0.6)]">Product Details</h1>
            <h1 className="text-[20px] font-medium text-[black]">Rating & Reviews</h1>
            <h1 className="text-[20px] font-normal text-[rgba(0,_0,_0,_0.6)]">FAQs</h1>
          </div>
          <div className="flex justify-between mt-[24px]">
            <div className="bg-[rgba(0,_0,_0,_0.1)] h-[2px] w-[100px] grow"></div>
            <div className="bg-black h-[2px] w-[100px] grow"></div>
            <div className="bg-[rgba(0,_0,_0,_0.1)] grow h-[2px] w-[100px]"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
