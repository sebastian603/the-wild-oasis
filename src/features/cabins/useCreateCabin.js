import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createEditCabin } from "../../services/apiCabins";
import toast from "react-hot-toast";

export function useCreateCabin() {
  const queryClient = useQueryClient();

  const { isLoading: isCreating, mutate: createCabin } = useMutation({
    mutationFn: (newCabin) => createEditCabin(newCabin),
    onSuccess: () => {
      toast.success("Cabin has been created!");
      queryClient.invalidateQueries("cabins");
    },
    onError: () => {
      toast.error("Failed to create a cabin");
    },
  });

  return { isCreating, createCabin };
}
