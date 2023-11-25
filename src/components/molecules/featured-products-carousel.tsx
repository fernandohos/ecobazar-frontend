import { ProductCard } from "@/components/molecules/product-card";
import { Product } from "@/types/Product";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

type FeaturedProductsCarouselProps = {
  products: Product[];
};

export function FeaturedProductsCarousel({
  products,
}: FeaturedProductsCarouselProps) {
  return (
    <Swiper
      spaceBetween={50}
      modules={[Pagination]}
      pagination={{ clickable: true, dynamicBullets: true }}
      breakpoints={{
        555: {
          slidesPerView: 2,
        },
        800: {
          slidesPerView: 3,
        },
        1100: {
          slidesPerView: 4,
        },
      }}
    >
      {products?.map((product) => {
        return (
          <SwiperSlide key={product.id}>
            <ProductCard {...product} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
