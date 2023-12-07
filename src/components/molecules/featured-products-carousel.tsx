import { ProductCard } from "@/components/molecules/product-card";
import { Product } from "@/types/Product";

type FeaturedProductsCarouselProps = {
  products: Product[];
};

export function FeaturedProductsCarousel({
  products,
}: FeaturedProductsCarouselProps) {
  return (
    <div className="grid grid-cols-1 min-[540px]:grid-cols-2 lg:grid-cols-4 gap-12">
      {products?.map((product) => {
        return (
          <div key={product.id}>
            <ProductCard {...product} />
          </div>
        );
      })}
    </div>
  );
}
