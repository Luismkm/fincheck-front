import { useQuery } from "@tanstack/react-query";
import { categoriesService } from "../services/usersService/categoriesSerice";

export function useCategories() {
  const { data, isFetching } = useQuery({
    queryKey: ['categories'],
    queryFn: categoriesService.getAll,
  });

  return { categories: data ?? [], isFetching };
}
