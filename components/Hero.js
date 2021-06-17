import Image from "next/image";

const Hero = () => {
  return (
    <div>
      <Image
        src="/../public/images/banner.jpg"
        alt="banner image"
        width={1920}
        height={400}
      />
    </div>
  );
};

export default Hero;
