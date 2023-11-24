import { Product } from "@/types/Product";

export async function getFeaturedProducts(): Promise<Product[]> {
  try {
    const { products } = await fetch(
      `${process.env.SERVER_URL}/products?page_size=4`,
      { method: "GET" }
    ).then((response) => response.json());
    return products;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
