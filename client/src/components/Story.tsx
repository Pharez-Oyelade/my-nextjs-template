import Image from "next/image";
import { ArrowRight } from "lucide-react";

const Story = () => {
  return (
    <section className="flex flex-col md:flex-row items-center gap-10 lg:gap-20 xl:gap-30 py-20 px-10 md:px-20 lg:px-30 xl:px-40">
      <div className="overflow-hidden w-[350px] md:w-[400px] rounded-3xl p-3 border-2 border-gray-600">
        <Image
          src="/images/asa_4.jpg"
          alt="Founder Photo"
          height={700}
          width={700}
          className="w-full h-full object-cover rounded-2xl"
        />
      </div>

      <main className="w-full md:w-[500px] lg:w-1/2">
        <h1 className="text-primary text-3xl font-bold">
          A Legacy Woven In Thread
        </h1>

        <hr className="bg-secondary my-5 w-[60px] h-[2px]" />

        <p className="mt-10 text-lg">
          At Asa, we believe that true luxury lies in the preservation of
          heritage. We meticulously blend the rich, soulful artistry of
          traditional Yoruba Aso-Oke and Adire techniques with the architectural
          precision of contemporary high fshion. Every piece is a testament to
          the master artisans of our past, reimained for the modern, discerning
          woman
        </p>

        <div className="mt-10">
          <button className="text-sm cursor-pointer text-secondary flex gap-2 items-center group">
            <span>Discover our story</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200 ease-in-out" />
          </button>
        </div>
      </main>
    </section>
  );
};

export default Story;
