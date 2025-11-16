import { useQuery } from "@tanstack/react-query";
import { getProfile } from "services/user";

export function useProfileQuery() {
  return useQuery({
    queryKey: ["profile"],
    queryFn: getProfile,
  });
}
