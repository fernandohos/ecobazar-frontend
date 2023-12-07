import ArrowRight from "@public/arrow-right.svg";
import Link from "next/link";
import { getFeaturedProducts } from "@/services/products-service";
import { FeaturedProductsCarousel } from "../molecules/featured-products-carousel";
import PapayaOrnament from "@public/papaya-ornament.svg";

export async function FeaturedProducts() {
  const products = await getFeaturedProducts();

  return (
    <section className="px-[5vw] py-[5rem] relative">
      <div className="w-full flex justify-between item-center mb-md">
        <h3 className="text-[2.8rem] font-semibold">Featured Products</h3>

        <Link className="text-primary flex justify-center gap-sm" href="/shop">
          View All
          <ArrowRight className="w-[2rem] h-[2rem] stroke-primary" />
        </Link>
      </div>
      {products && <FeaturedProductsCarousel products={products} />}
      <PapayaOrnament className="w-[10rem] h-[40rem] absolute left-0 top-16" />
    </section>
  );
}
