import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteBooking as deleteBookingApi } from "../../services/apiBookings";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useDeleteBooking() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate: deleteBooking, isLoading: isDeleting } = useMutation({
    mutationFn: (id) => deleteBookingApi(id),
    onSuccess: () => {
      toast.success(`Booking has successfully been deleted.`);
      queryClient.invalidateQueries({ active: true });
      navigate("/");
    },
    onError: () => {
      toast.error(`Something went wrong with deleting the booking.`);
    },
  });

  return { deleteBooking, isDeleting };
}
