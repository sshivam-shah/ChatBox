import { useQuery } from "@tanstack/react-query";
import { getAuthUser } from "../lib/api";

// custom hook to check if user is logged in
const useAuthUser = () => {
  // tanstack query to check if user is logged in
  const authUser = useQuery({
    queryKey: ["authUser"],
    queryFn: getAuthUser,
    retry: false, // once auth check fails, do not retry
  });
  return { isLoading: authUser.isLoading, authUser: authUser.data?.user };
};

export default useAuthUser;
