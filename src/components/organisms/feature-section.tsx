import { FeatureCard } from "../molecules/feature-card";
import shippingIcon from "@public/shipping-icon.png";
import supportIcon from "@public/support-icon.png";
import paymentIcon from "@public/payment-icon.png";
import boxIcon from "@public/box-icon.png";

const featureCardsData = [
  {
    icon: shippingIcon,
    title: "Free Shipping",
    description: "Free shipping with discount",
  },
  {
    icon: supportIcon,
    title: "Great Support 24/7",
    description: "Instant access to Contact",
  },
  {
    icon: paymentIcon,
    title: "100% Secure Payment",
    description: "We ensure your money is save",
    highlight: true,
  },
  {
    icon: boxIcon,
    title: "Money-Back Guarantee",
    description: "30 days money-back",
  },
];

export function Feature() {
  return (
    <section className="w-[90vw] m-auto mb-2xl">
      <div className="grid grid-cols-2 min-[950px]:grid-cols-4 items-center">
        {featureCardsData.map((cardData) => (
          <FeatureCard key={cardData.title} {...cardData} />
        ))}
      </div>
      <span className="block w-full h-[.2rem] bg-gray-100"></span>
    </section>
  );
}
