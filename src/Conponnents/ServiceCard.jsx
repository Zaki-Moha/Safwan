import React from "react";
import Image from "../Conponnents/Image";
import ServiceImage1 from "../../public/ServiceCardOne.png";
import { FaArrowRightLong } from "react-icons/fa6";

const ServiceCard = ({src,title,text}) => {
  return (
    <div className="group w-[370px] shadow-2xl py-[50px] pl-[30px]">
      <Image src={src} />
      <h5 className="text-2xl text-[#00413D] font-extrabold font-Voll pt-[26px] pb-[15px]">{title}</h5>
      <p className="text-base text-[#00413D] font-jost font-normal w-[245px] pb-[30px]">{text}</p>
      <FaArrowRightLong className="group-hover:text-red-500 text-2xl duration-500" />
    </div>
  );
};

export default ServiceCard;
