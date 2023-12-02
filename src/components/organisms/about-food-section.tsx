import Image from "next/image";
import aboutFoodImage from "@public/about-food-image.png";
import CheckGreenIcon from "@public/check-green-icon.svg";

export function AboutFood() {
  return (
    <section className="px-[5vw] pt-[2rem]">
      <h3 className="text-[2.8rem] font-semibold lg:hidden">
        100% Trusted Organic Food Store
      </h3>
      <div className="flex flex-col space-x-[4rem] justify-center md:flex-row">
        <Image
          src={aboutFoodImage}
          className="w-full h-auto object-scale-down aspect-[8/5] md:w-1/2"
          alt="a man holding a bag of red apples and a boy carrying a basket of green apples in an apple orchard"
        />
        <div className="flex-1 py-16">
          <h3 className="hidden text-[2.8rem] font-semibold mb-[2rem] lg:block">
            100% Trusted Organic Food Store
          </h3>
          <div className="flex space-x-[1rem] relative">
            <CheckGreenIcon className="w-[3rem] h-[3rem] absolute top-0 -left-[3rem]" />
            <h4 className="text-[2rem] font-semibold">
              Healthy & natural food for lovers of healthy food.
            </h4>
          </div>
          <p className="ml-4 text-gray-500">
            Ut quis tempus erat. Phasellus euismod bibendum magna non tristique.
            Pellentesque semper vestibulum elit sed condimentum. Nunc pretium
            fermentum interdum.
          </p>
          <div className="flex space-x-[1rem] mt-[1rem] relative">
            <CheckGreenIcon className="w-[3rem] h-[3rem] absolute top-0 -left-[3rem]" />
            <h4 className="text-[2rem] font-semibold">
              Every day fresh and quality products for you.
            </h4>
          </div>
          <p className=" text-gray-500 ml-4">
            Maecenas vehicula a justo quis laoreet. Sed in placerat nibh, a
            posuere ex. Morbi sem neque, aliquam sed orci et, rhoncus lobortis
            felis. Sed vestibulum nisl sit amet sapien.
          </p>
        </div>
      </div>
    </section>
  );
}
