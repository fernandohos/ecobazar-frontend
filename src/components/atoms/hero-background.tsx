import Icon1 from "@public/hero-icons/icon-1.svg";
import Icon2 from "@public/hero-icons/icon-2.svg";
import Icon3 from "@public/hero-icons/icon-3.svg";
import Icon4 from "@public/hero-icons/icon-4.svg";
import Icon5 from "@public/hero-icons/icon-5.svg";
import image1 from "@public/hero-icons/image-1.png";
import image2 from "@public/hero-icons/image-2.png";
import image3 from "@public/hero-icons/image-3.png";
import image4 from "@public/hero-icons/image-4.png";
import Image from "next/image";

export function HeroBg() {
  return (
    <div className="absolute top-0 left-0 w-full h-full z-[1]">
      <div className="relative w-full h-full">
        <Icon1 className="absolute w-[10rem] bottom-0 right-0" />
        <Icon2 className="absolute w-[10rem] top-[8%] right-[10vw]" />
        <Icon3 className="absolute w-[12rem] top-[15%] left-[4vw]" />
        <Icon4 className="absolute w-[8rem] top-0 right-[40vw]" />
        <Icon5 className="absolute w-[13rem] bottom-[4%] left-[3vw]" />
        <Image
          src={image1}
          width={80}
          height={190}
          alt="green leaf"
          className="absolute top-0 right-0 w-[8rem] h-[19rem]"
        />
        <Image
          src={image2}
          width={76}
          height={86}
          alt="green leaf"
          className="absolute top-0 left-[3vw] w-[7.6rem] h-[8.6rem]"
        />
        <Image
          src={image3}
          width={39}
          height={34}
          alt="green leaf"
          className="absolute bottom-[5%] left-[20vw] w-[3.9rem] h-[3.4rem]"
        />
        <Image
          src={image4}
          width={65}
          height={106}
          alt="green leaf"
          className="absolute bottom-[-4rem] right-[20vw] w-[6.5rem] h-[10.6rem]"
        />
      </div>
    </div>
  );
}
