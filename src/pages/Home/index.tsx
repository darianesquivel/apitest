import { Button, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { create } from "zustand";
import MediaCard from "../../components/MediaCard";
import { useQuery } from "react-query";
import { Image } from "./types";
import { getInitialImages } from "../utils";
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
  // comment para darian:
  /**
   * use Query es un estado que reemplaza y facilita el useEffect que se usa para fetchear cosas
   * Esto se configura para mantener refrescada la info
   * Creo que por default tiene algunas config como intervalos para los refreshes
   * también se ejecuta cada vez que cambiamos de ventanas y volvemos a la ventana de nuestro sitio
   * Esto se puede configurar
   */
  const { data: images, status } = useQuery(
    ["initialImages"],
    getInitialImages
  );
  console.log({ images });
  const renderImages =
    status === "success"
      ? images.results?.length
        ? images.results
        : images
      : null;

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
      {!status.includes("succ") && "loading..."}
      {status.includes("error") && "there was an error"}
      {renderImages &&
        renderImages.map((imgObj: Image) => (
          <MediaCard
            image={imgObj.urls.regular}
            description={imgObj.description}
            created_at={imgObj.created_at}
            color={imgObj.color}
            likes={imgObj.likes}
            key={imgObj.id}
          />
        ))}
    </>
  );
}
export default Home;
