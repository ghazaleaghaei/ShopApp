import { getUserApi } from "@/services/AuthService";
import { useQuery } from "@tanstack/react-query";


export default function useUser() {
    const { data, error, isLoading } = useQuery({
        queryKey: ["user"],
        queryFn: getUserApi,
        retry: false,
    })
    return { data, error, isLoading }
}
