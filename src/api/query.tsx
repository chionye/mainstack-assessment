import { useQueries } from "@tanstack/react-query";
import axios from "axios";

type QueryProps = { id: string; url: string }[];

const Query = (queryParamsArray: QueryProps) => {

  const queries = useQueries({
    queries: queryParamsArray.map((user) => {
      return {
        queryKey: [user.id],
        queryFn: () => axios.get(user.url)
      };
    }),
  });

  const handleDataUpdate = (index: number = 0) => {
    queries[index].refetch();
  };

  return { queries, handleDataUpdate };
};

export default Query;
