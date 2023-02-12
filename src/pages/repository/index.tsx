import { useQuery } from "react-query";
import { getRandomRepos } from "../utils/githubFunctions";
import { Trepository } from "../types";
import Grid from "@material-ui/core/Grid";
import RepositoryCard from "../../components/RepositoryCard";

function ShowRepositories() {
  const {
    data: repos,
    status,
    ...rest
  } = useQuery(["randomRepos"], getRandomRepos);
  console.log({ repos, status });
  const renderRepos = status === "success";
  return (
    <Grid container spacing={1}>
      {renderRepos &&
        repos.map((repository: Trepository) => {
          return <RepositoryCard repo={repository} />;
        })}
    </Grid>
  );
}

export default ShowRepositories;
