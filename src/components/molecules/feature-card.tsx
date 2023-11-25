import Image, { StaticImageData } from "next/image";

type FeatureCardProps = {
  icon: StaticImageData;
  title: string;
  description: string;
  highlight?: boolean;
};

export function FeatureCard({
  icon,
  title,
  description,
  highlight,
}: FeatureCardProps) {
  return (
    <div className="py-[4rem] relative">
      <Image
        src={icon}
        className="m-auto w-[6rem] h-[6rem]"
        alt={`${title} icon`}
      />
      <h3 className="text-center text-[1.6rem] text-600 mt-[1.6rem] leading-[100%]">{title}</h3>
      <p className="text-center text-[1.4rem] text-gray-400">{description}</p>
      {highlight && <span className="block w-full h-[.4rem] bg-primary absolute bottom-0 left-0"></span>}
    </div>
  );
}
