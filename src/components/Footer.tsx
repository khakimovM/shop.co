import letter from "../assets/icons/Vector(13).svg";
import shopco from "../assets/icons/SHOP.CO.svg";
import { Link } from "react-router-dom";
import twitter from "../assets/icons/1.svg";
import facebook from "../assets/icons/2.svg";
import instagram from "../assets/icons/3.svg";
import github from "../assets/icons/4.svg";
import Visa from "../assets/icons/Badge.svg";
import mastercard from "../assets/icons/Badge(1).svg";
import paypal from "../assets/icons/Badge(2).svg";
import pay from "../assets/icons/Badge(3).svg";
import payg from "../assets/icons/Badge(4).svg";

const Footer = () => {
  return (
    <footer className="fott bg-[rgba(240,_240,_240,_1)] mt-[168px] relative">
      <div className="my-container px-4 relative !pt-[140px]">
        <div className="absolute -top-[90px] left-0 right-0 flex justify-between items-center bg-black py-[36px] px-[64px] rounded-[20px]">
          <div className="w-[55%]">
            <h1 className="text-[40px] font-extrabold text-white leading-tight">
              STAY UPTO DATE ABOUT <br /> OUR LATEST OFFERS
            </h1>
          </div>
          <div className="w-[45%]">
            <form>
              <div className="flex gap-3 items-center py-[12px] px-[16px] bg-white rounded-[62px]">
                <img src={letter} alt="" />
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full text-black/40 text-[16px] font-normal outline-none"
                />
              </div>
              <button className="bg-white py-[12px] px-[16px] text-[16px] font-medium rounded-[62px] w-full mt-[14px]">
                Subscribe to Newsletter
              </button>
            </form>
          </div>
        </div>

        <div className="flex justify-between">
          <div>
            <Link to={"/"}>
              <img src={shopco} alt="" />
            </Link>
            <p className="mt-[25px] text-[14px] leading-6 font-normal text-[rgba(0,_0,_0,_0.6)] w-[280px]">
              We have clothes that suits your style and which you`re proud to
              wear. From women to men.
            </p>
            <div className="flex gap-[12px] items-center mt-[35px]">
              <Link to={"https://x.com/"}>
                <img src={twitter} alt="" />
              </Link>
              <Link to={"https://www.facebook.com/?locale=ru_RU"}>
                <img src={facebook} alt="" />
              </Link>
              <Link to={"https://www.instagram.com/"}>
                <img src={instagram} alt="" />
              </Link>
              <Link to={"https://github.com/"}>
                <img src={github} alt="" />
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-[15px]">
            <h1 className="text-[16px] font-medium">COMPANY</h1>
            <Link
              to={"/"}
              className="text-[16px] font-medium text-[rgba(0,_0,_0,_0.6)]"
            >
              About
            </Link>
            <Link
              to={"/"}
              className="text-[16px] font-medium text-[rgba(0,_0,_0,_0.6)]"
            >
              Features
            </Link>
            <Link
              to={"/"}
              className="text-[16px] font-medium text-[rgba(0,_0,_0,_0.6)]"
            >
              Works
            </Link>
            <Link
              to={"/"}
              className="text-[16px] font-medium text-[rgba(0,_0,_0,_0.6)]"
            >
              Career
            </Link>
          </div>
          <div className="flex flex-col gap-[15px]">
            <h1 className="text-[16px] font-medium">HELP</h1>
            <Link
              to={"/"}
              className="text-[16px] font-medium text-[rgba(0,_0,_0,_0.6)]"
            >
              Customer Support
            </Link>
            <Link
              to={"/"}
              className="text-[16px] font-medium text-[rgba(0,_0,_0,_0.6)]"
            >
              Delivery Details
            </Link>
            <Link
              to={"/"}
              className="text-[16px] font-medium text-[rgba(0,_0,_0,_0.6)]"
            >
              Terms & Conditions
            </Link>
            <Link
              to={"/"}
              className="text-[16px] font-medium text-[rgba(0,_0,_0,_0.6)]"
            >
              Privacy Policy
            </Link>
          </div>

          <div className="flex flex-col gap-[15px]">
            <h1 className="text-[16px] font-medium">FAQ</h1>
            <Link
              to={"/"}
              className="text-[16px] font-medium text-[rgba(0,_0,_0,_0.6)]"
            >
              Account
            </Link>
            <Link
              to={"/"}
              className="text-[16px] font-medium text-[rgba(0,_0,_0,_0.6)]"
            >
              Manage Deliveries
            </Link>
            <Link
              to={"/"}
              className="text-[16px] font-medium text-[rgba(0,_0,_0,_0.6)]"
            >
              Orders
            </Link>
            <Link
              to={"/"}
              className="text-[16px] font-medium text-[rgba(0,_0,_0,_0.6)]"
            >
              Payments
            </Link>
          </div>

          <div className="flex flex-col gap-[15px]">
            <h1 className="text-[16px] font-medium">RESOURCES</h1>
            <Link
              to={"/"}
              className="text-[16px] font-medium text-[rgba(0,_0,_0,_0.6)]"
            >
              Free eBooks
            </Link>
            <Link
              to={"/"}
              className="text-[16px] font-medium text-[rgba(0,_0,_0,_0.6)]"
            >
              Development Tutorial
            </Link>
            <Link
              to={"/"}
              className="text-[16px] font-medium text-[rgba(0,_0,_0,_0.6)]"
            >
              How to - Blog
            </Link>
            <Link
              to={"/"}
              className="text-[16px] font-medium text-[rgba(0,_0,_0,_0.6)]"
            >
              YouTube Playlist
            </Link>
          </div>
        </div>

        <div className="bg-[rgba(0,_0,_0,_0.1)] mt-[50px] mb-[20px] h-[1px] w-[100%]"></div>
        <div className="flex justify-between items-center">
          <div className="left">
            <h1 className="text-[rgba(0,_0,_0,_0.6)] text-[14px] font-normal">Shop.co © 2000-2023, All Rights Reserved</h1>
          </div>

          <div className="right flex items-center">
            <Link to={"https://cis.visa.com/visa-in-uzbekistan.html"}><img src={Visa} alt="" /></Link>
            <Link to={"https://www.mastercard.uz/ru-uz.html"}><img src={mastercard} alt="" /></Link>
            <Link to={"https://www.paypal.com/ru/home"}><img src={paypal} alt="" /></Link>
            <Link to={"https://www.apple.com/apple-pay/"}><img src={pay} alt="" /></Link>
            <Link to={"https://payments.google.com/gp/w/home/signup"}><img src={payg} alt="" /></Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
