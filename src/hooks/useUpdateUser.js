import { updateProfileApi } from "@/services/AuthService"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import toast from "react-hot-toast"

export default function useUpdateUser({ formData }) {

    const queryClient = useQueryClient();

    const { isPending: isUpdating, error, data: updatedData, mutateAsync: updateProfile } = useMutation({
        mutationFn: updateProfileApi,
    })

    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            const { message } = await updateProfile(formData)
            queryClient.invalidateQueries({ queryKey: ["get-user"] })
            toast.success(message)

        } catch (error) {
            toast.error(error?.response?.data?.message)
        }
    }

    return { isUpdating, error, updatedData, updateProfile, submitHandler }
}
