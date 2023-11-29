import { Product } from "@/types/Product";
import Image from "next/image";
import { IconButton } from "../atoms/icon-button";
import bagIcon from "@public/bag.svg";
import heartIcon from "@public/heart.svg";
import eyeIcon from "@public/eye.svg";

export function ProductCard(product: Product) {
  return (
    <div className="bg-white border-solid border-[.2rem] rounded-lg gap-sm cursor-pointer ease duration-200 border-gray-50 hover:border-primary group relative min-w-[21rem] max-w-[30rem] mx-auto">
      <Image
        src={product.images[0]}
        alt={product.name}
        width={300}
        height={300}
      />
      <div className="absolute right-4 top-4 hidden group-hover:flex flex-col">
        <IconButton icon={heartIcon} />
        <IconButton icon={eyeIcon} />
      </div>
      <div className="flex p-md justify-between items-center">
        <div>
          <p>{product.name}</p>
          <div className="flex gap-sm">
            <p className="font-semibold text-[2rem]">${product.price}</p>
            {product.old_price && (
              <p className="text-gray-300 line-through font-normal decoration-1 text-[2rem]">
                ${product.old_price}
              </p>
            )}
          </div>
        </div>
        <IconButton
          icon={bagIcon}
          className="hover:bg-primary rounded-full hover:[&>*]:stroke-white [&>*]:w-[2.5rem] [&>*]:h-[2.5rem] p-4 ease duration-200"
        />
      </div>
    </div>
  );
}
