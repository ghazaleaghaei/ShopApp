import { getUserApi, getUsersApi } from "@/services/AuthService";
import { useQuery } from "@tanstack/react-query";

export function useUser() {
    const { data, error, isLoading } = useQuery({
        queryKey: ["get-user"],
        queryFn: getUserApi,
        retry: false,
    })
    return { data, error, isLoading }
}


export function useUsers() {
    const { data, error, isLoading } = useQuery({
        queryKey: ["get-user"],
        queryFn: getUsersApi,
        retry: false,
    })
    return { data, error, isLoading }
}
