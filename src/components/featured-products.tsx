import { getFeaturedProducts } from "@/services/products-service";
import { ProductCard } from "./product-card";
import ArrowRight from "@public/arrow-right.svg";
import Link from "next/link";

export async function FeaturedProducts() {
  const products = await getFeaturedProducts();

  return (
    <section className="px-[5vw] my-lg">
      <div className="w-full flex justify-between item-center">
        <h3 className="text-[2.8rem] font-semibold">Featured Products</h3>

        <Link className="text-primary flex justify-center gap-sm" href="/shop">
          View All
          <ArrowRight className="w-[2rem] h-[2rem] stroke-primary" />
        </Link>
      </div>
      <div className="grid grid-cols-[24rem_24rem_24rem_24rem] justify-between">
        {products.map((product) => {
          return <ProductCard {...product} key={product.id} />;
        })}
      </div>
    </section>
  );
}
