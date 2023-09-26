import Image from "next/image";
import CustomButton from "../CustomButton/CustomButton";

const Hero = () => {
  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">
          Find, book, or rent a car &mdash; quickly and easily!
        </h1>
        <p className="hero__subtitle">
          Streamline your car rental expereicne with our effortless booking
          precess
        </p>
        <CustomButton />
      </div>
    </div>
  );
};

export default Hero;
