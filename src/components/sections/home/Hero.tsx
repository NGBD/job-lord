import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative flex items-center">
      <Image
        src="/images/hero-banner.jpg"
        alt="Warehouse Background"
        className="object-cover w-full h-full"
        width={1920}
        height={1080}
        priority
        quality={100}
      />
    </section>
  );
};

export default Hero;
