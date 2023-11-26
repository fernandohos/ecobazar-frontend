import { Category } from "@/types/Category";

export async function getCategories(): Promise<Category[]> {
  try {
    const categories = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/categories`,
      { method: "GET" }
    ).then((response) => response.json());
    return categories;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
