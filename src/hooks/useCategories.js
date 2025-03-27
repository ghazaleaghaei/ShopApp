import { getCategoriesApi } from "@/services/categoryServices"
import { useQuery } from "@tanstack/react-query"

export function useCategories() {
    const { data, error, isLoading } = useQuery({
        queryKey: ["get-categories"],
        queryFn: getCategoriesApi,
        retry: false,
    })
    return { data, error, isLoading }
}
