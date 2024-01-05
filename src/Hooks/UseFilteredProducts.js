import { useQuery } from "@tanstack/react-query";

export const getFilteredProducts = async (categoryName, categoryId) => {
  const res = await fetch(
    `https://api.escuelajs.co/api/v1/products/?categoryName=${categoryName}?categoryId=${categoryId}`
  );
  const products = await res.json();
  return products;
};

export const useFilteredProducts = (categoryName, categoryId) => {
  return useQuery({
    queryKey: ["filteredproducts", categoryName, categoryId],
    queryFn: () => getFilteredProducts(categoryName, categoryId),
  });
};
