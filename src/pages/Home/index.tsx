import { Button, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { create } from "zustand";

const useStyles = makeStyles(() => ({
  formContainer: {
    display: "flex",
    justifyContent: "center",
  },
}));

const useSearchState = create((set: any) => ({
  search: "",
  setter: (value: any) => set((state: any) => ({ search: value, ...state })),
}));

console.log("useSearchState", useSearchState);

function Home() {
  const classes = useStyles();
  const { search, setter } = useSearchState();

  return (
    <>
      <form action="" className={classes.formContainer}>
        <TextField
          id="outlined-basic"
          label="Outlined"
          variant="outlined"
          value={search}
          onChange={() => setter(search)}
        />
        <Button>Search</Button>
      </form>
      <h1>{search}</h1>
    </>
  );
}
export default Home;
