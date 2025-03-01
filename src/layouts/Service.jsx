import React from "react";
import Container from "../Conponnents/Container";
import Flex from "../Conponnents/Flex";
import ServiceCard from "../Conponnents/ServiceCard";
import ServiceImage1 from "../../public/ServiceCardOne.png";
import ServiceImage2 from "../../public/ServiceCardTwo.png";
import ServiceImage3 from "../../public/ServiceCardThree.png";

const Service = () => {
  return (
    <section className="pt-[220px] pb-[120px]">
      <Container>
        <h4 className="text-center text-lg text-[#E5745D] font-Voll font-medium ">
          MY SERVICES
        </h4>
        <h2 className="text-center text-[50px] text-[#00413D] font-Voll font-medium w-[520px] mx-auto pt-3">
          Provide Wide Range of Digital Services
        </h2>

        <Flex className=" justify-between pt-10">
          <ServiceCard
            src={ServiceImage1}
            title="Ui/Ux Design"
            text="Dolor repellendus tempo ribus aue
                 quibusdam offi ciis debitis rerum na
                  aibus minima veniam."
          />
          <ServiceCard
            src={ServiceImage2}
            title="Mobile App Design"
            text="Dolor repellendus tempo ribus aue
                  quibusdam offi ciis debitis rerum na
                  aibus minima veniam."
          />
          <ServiceCard
            src={ServiceImage3}
            title="Web Design"
            text="Dolor repellendus tempo ribus aue
                  quibusdam offi ciis debitis rerum na
                  aibus minima veniam."
          />
        </Flex>
      </Container>
    </section>
  );
};

export default Service;
