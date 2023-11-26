import { HomeHeader } from "@/components/organisms/home-header";
import { Hero } from "@/components/organisms/hero";
import { Feature } from "@/components/organisms/feature-section";
import { FeaturedProducts } from "@/components/organisms/featured-products";
import { Categories } from "@/components/organisms/categories";

export default function Home() {
  return (
    <div>
      <HomeHeader />
      <Hero />
      <Feature />
      <FeaturedProducts />
      <Categories />
    </div>
  );
}
