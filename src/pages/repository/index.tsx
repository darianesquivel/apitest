import { useQuery } from "react-query";
import { getRandomRepos } from "../utils/githubFunctions";

function ShowRepositories() {
  const { data: repos, status } = useQuery(["randomRepos"], getRandomRepos);
  console.log({ repos, status });
  return <div>index</div>;
}

export default ShowRepositories;
