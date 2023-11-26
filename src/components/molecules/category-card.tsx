import { Category } from "@/types/Category";
import Image from "next/image";

export function CategoryCard({ name, icon_url, product_count }: Category) {
  return (
    <div className="bg-white py-8 px-12 w-max text-center border-solid border-[.2rem] rounded-lg gap-sm cursor-pointer ease duration-200 border-gray-50 hover:border-primary m-auto space-y-2 group">
      <Image src={icon_url} width={80} height={80} alt={`${name} icon`} className="m-auto"/>
      <p className="font-semibold text-[1.8rem] group-hover:text-primary">{name}</p>
      <p className="text-gray-500 text-[1.4rem]">{product_count} Products</p>
    </div>
  );
}
