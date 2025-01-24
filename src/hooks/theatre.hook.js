import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { apiInstance } from "../api";

export const useGetAllTheatres = () => {
  const query = useQuery({
    queryKey: ["theatres"],
    queryFn: async function () {
      const { data } = await apiInstance.get("/admin/theatres");
      return data.data;
    },
  });
  return query;
};

export const useCreateTheatre = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: async function ({
      name,
      plot,
      street,
      city,
      state,
      country,
      pinCode,
    }) {
      const { data } = await apiInstance.post("/admin/theatres", {
        name,
        plot,
        street,
        city,
        state,
        country,
        pinCode,
      });
      return data;
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ["theatres"] });
    },
  });
  return mutation;
};
