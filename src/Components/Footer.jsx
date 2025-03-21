import React from "react";
import { FaAmazonPay, FaCcMastercard, FaYandexInternational } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { GrMastercard } from "react-icons/gr";
import { LiaDhl } from "react-icons/lia";
import { PiTiktokLogoThin, PiYoutubeLogoLight } from "react-icons/pi";
import { RiFacebookFill, RiVisaLine } from "react-icons/ri";
import { SiContactlesspayment, SiMaxplanckgesellschaft } from "react-icons/si";
import { SlSocialInstagram } from "react-icons/sl";
import { VscCreditCard } from "react-icons/vsc";

const Footer = () => {
  return (
    <footer className="bg-[#535357] text-white py-10">
      <div className="container mx-auto px-4  border-b border-gray-400 pb-2">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
          {/* Need Help Section */}
          <div>
            <h3 className="text-[16px] font-semibold mb-4">Need Help?</h3>
            <ul className="space-y-2 text-[12px]">
              <li>
                <a href="#" className="hover:text-gray-400">
                  Chat with us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Contact Us
                </a>
              </li>
            </ul>
            <div>
              <h3 className="text-[16px] font-semibold mb-2 mt-10">
                Useful Links
              </h3>
              <ul className="space-y-2 text-[12px]">
                <li>
                  <a href="#" className="hover:text-gray-400">
                    Service Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-400">
                    How to shop on Jumia?
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-400">
                    Delivery options and timelines
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-400">
                    How to return a product on Jumia?
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-400">
                    Corporate and bulk purchases
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-400">
                    Report a Product
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-400">
                    Dispute Resolution Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-400">
                    Returns & Refund Timeline
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-400">
                    Return Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-400">
                    Pickup Stations
                  </a>
                </li>
              </ul>
              <div className="mt-4 mb-6">
                <p>JOIN US ON</p>
              </div>
              <div className="flex w-[500px] justify-between">
                <div className="flex gap-3">
                  <RiFacebookFill className="text-[24px] pb-1" />
                  <PiYoutubeLogoLight className="text-[29px] pb-2" />
                  <SlSocialInstagram className="text-[20px]" />
                  <FaXTwitter className="text-[20px]" />
                  <PiTiktokLogoThin className="text-[20px]" />
                </div>

                <div className="pl-30  ">
                <p>PAYMENT METHODS & DELIVERY PARTNERS</p>
                <div className="flex text-[20px] gap-3  ">
                <SiContactlesspayment className="text-[35px] pt-3"/>
                <FaCcMastercard className="text-[35px] pt-3"/>
                <RiVisaLine className="text-[35px] pt-3"/>
                <VscCreditCard className="text-[35px] pt-3"/>
                <div className="flex">
                    <p  className="text-sm pt-3">interswitch</p>
                <FaYandexInternational className="text-[35px] pt-3"/>
                <LiaDhl className="text-[60px]"/>
                <SiMaxplanckgesellschaft className="text-[35px] pt-3"/>
                </div>
                </div>
                </div>
              </div>
            </div>
          </div>

          {/* Useful Links Section */}

          {/* About Jumia Section */}
          <div>
            <h3 className="text-[16px] font-semibold mb-4">About Jumia</h3>
            <ul className="space-y-2 text-[12px]">
              <li>
                <a href="#" className="hover:text-gray-400">
                  About us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Jumia careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Jumia Express
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Terms and Conditions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Privacy Notice
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Jumia Store Credit Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Jumia Payment Information Guidelines
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Cookie Notice
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Jumia Global
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Official Stores
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Flash Sales
                </a>
              </li>
            </ul>
          </div>

          {/* Make Money with Jumia Section */}
          <div>
            <h3 className="text-[16px] font-semibold mb-4">
              Make Money with Jumia
            </h3>
            <ul className="space-y-2 text-[12px]">
              <li>
                <a href="#" className="hover:text-gray-400">
                  Sell on Jumia
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Vendor Hub
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Become a Sales Consultant
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Our Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Jumia International Section */}
          <div>
            <h3 className="text-[16px] font-semibold mb-4">
              Jumia International
            </h3>
            <ul className="space-y-2 text-[12px] flex gap-7">
              <div>
                <li>
                  <a href="#" className="hover:text-gray-400">
                    Algeria
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-400">
                    Egypt
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-400">
                    Ghana
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-400">
                    Ivory Coast
                  </a>
                </li>
              </div>
              <div>
                <li>
                  <a href="#" className="hover:text-gray-400">
                    Kenya
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-400">
                    Morocco
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-400">
                    Senegal
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-400">
                    Uganda
                  </a>
                </li>
              </div>
            </ul>
          </div>
        </div>
      </div>
      <div className="ml-150 mb-[-15px]">
      <FaAmazonPay className="text-[45px] pt-5"/>

      </div>
    </footer>
  );
};``

export default Footer;
