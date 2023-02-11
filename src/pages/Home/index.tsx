import { Button, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { create } from "zustand";

const useStyles = makeStyles(() => ({
  formContainer: {
    display: "flex",
    justifyContent: "center",
  },
}));

const useStore = create((set) => ({
  input: "",
  setInput: (newValue: any) => set((state: any) => ({ input: newValue })),
  //updateFirstName: (firstName) => set(() => ({ firstName: firstName })),
}));

function Home() {
  const classes = useStyles();
  const input = useStore((state: any) => state.input);
  const setInput = useStore((state: any) => state.setInput);
  console.log({ input });

  return (
    <>
      <form action="" className={classes.formContainer}>
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
      <h1>Input: {input}</h1>
    </>
  );
}
export default Home;
