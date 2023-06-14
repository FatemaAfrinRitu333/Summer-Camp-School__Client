import { useQuery } from "@tanstack/react-query";

const useClasses = () => {
  const {data:classes=[], isLoading, refetch} = useQuery({
    queryKey: ["classes"],
    queryFn: async () => {
      const res = await fetch("https://summer-camp-school-server-production.up.railway.app/classes");
      return res.json();
    },
  });
  return [classes, isLoading, refetch];
};

export default useClasses;
