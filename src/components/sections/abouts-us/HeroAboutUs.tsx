import Image from "next/image";

const HeroAboutUs = () => {
  return (
    <section className="relative flex items-center">
      <Image
        src="/images/new5.png"
        alt="Warehouse Background"
        className="object-cover w-full h-full max-h-[700px]"
        width={1024}
        height={768}
        priority
        quality={100}
      />
    </section>
  );
};

export default HeroAboutUs;
