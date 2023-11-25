"use client";

import ArrowRight from "@public/arrow-right.svg";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Product } from "@/types/Product";
import { getFeaturedProducts } from "@/services/products-service";
import { FeaturedProductsCarousel } from "../molecules/featured-products-carousel";

export function FeaturedProducts() {
  const [products, setProducts] = useState<Product[] | null>(null);

  useEffect(() => {
    (async () => {
      const fetchedProducts = await getFeaturedProducts();
      setProducts(fetchedProducts);
    })();
  }, []);

  return (
    <section className="px-[5vw] my-lg">
      <div className="w-full flex justify-between item-center">
        <h3 className="text-[2.8rem] font-semibold">Featured Products</h3>

        <Link className="text-primary flex justify-center gap-sm" href="/shop">
          View All
          <ArrowRight className="w-[2rem] h-[2rem] stroke-primary" />
        </Link>
      </div>
      {products && <FeaturedProductsCarousel products={products} />}
    </section>
  );
}
