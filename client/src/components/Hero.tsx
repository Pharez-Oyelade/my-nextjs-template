import Image from "next/image";
import CircularGallery from "./ui/CircularGallery";

const Hero = () => {
  return (
    <main className="w-full h-screen relative">
      {/* <div style={{ height: "90vh", position: "relative", opacity: "0.6" }}>
        <CircularGallery
          bend={6}
          textColor="#ffffff"
          borderRadius={0.05}
          scrollEase={0.05}
          // Optionally load a custom font for the labels.
          // Accepts a stylesheet URL (e.g. Google Fonts) or a direct font file.
          fontUrl=""
          font="bold 30px Orbitron"
          scrollSpeed={2}
        />
      </div> */}
      <div className="absolute top-0 right-0 w-full h-full overflow-hidden opacity-[0.6]">
        <Image
          src="/images/asa_bg_1.jpg"
          alt="hero background"
          height={800}
          width={800}
          className="object-cover w-full h-full hidden lg:block"
        />

        <Image
          src="/images/asa_5.jpg"
          alt="hero background"
          height={800}
          width={800}
          className="object-cover w-full h-full lg:hidden"
        />
      </div>
      <div className="absolute top-1/3 lg:top-1/4 flex items-center flex-col w-full h-(100%)">
        <h1 className="text-9xl lg:text-[220px] font-serif font-bold tracking-wide leading-tight ">
          ÀṢÀ
        </h1>
        <p className="text-3xl lg:text-5xl">Draped in Heritage</p>

        <button className="px-5 py-3 bg-primary cursor-pointer mt-10 rounded-lg text-lg shadow-lg hover:shadow-xl active:scale-[0.9] transition-all duration-200 ease-in-out">
          Book Your Fitting
        </button>
      </div>
    </main>
  );
};

export default Hero;
