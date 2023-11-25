import { HomeHeader } from "@/components/organisms/home-header";
import { Hero } from "@/components/organisms/hero";
import { Feature } from "@/components/organisms/feature-section";
import { FeaturedProducts } from "@/components/organisms/featured-products";

export default function Home() {
  return (
    <div>
      <HomeHeader />
      <Hero />
      <Feature />
      <FeaturedProducts />
    </div>
  );
}
