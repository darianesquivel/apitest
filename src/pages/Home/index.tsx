import { Button, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { create } from "zustand";

import ShowRepositories from "../repository";
const useStyles = makeStyles(() => ({
  formContainer: {
    display: "flex",
    justifyContent: "center",
  },
}));
// zustand global state
const useStore = create((set) => ({
  input: "",
  setInput: (newValue: any) => set((state: any) => ({ input: newValue })),
}));

function Home() {
  const classes = useStyles();
  const input = useStore((state: any) => state.input);
  const setInput = useStore((state: any) => state.setInput);
  const handleSubmit = (e: { preventDefault: any; target: any }) => {
    e.preventDefault();
  };

  return (
    <>
      <form action="" className={classes.formContainer} onSubmit={handleSubmit}>
        <TextField
          id="outlined-basic"
          label="Outlined"
          variant="outlined"
          defaultValue={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
        <Button>Search</Button>
      </form>

      <ShowRepositories />
    </>
  );
}
export default Home;
