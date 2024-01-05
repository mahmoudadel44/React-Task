import { useQuery } from "@tanstack/react-query";

export const fetchCategoriesData = async () => {
  const response = await fetch("https://api.escuelajs.co/api/v1/categories");
  const data = await response.json();
  return data;
};

export const UseCategoriesData = () => {
  return useQuery({
    queryKey: "categories",
    queryFn: fetchCategoriesData,
  });
};
