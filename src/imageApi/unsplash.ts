import axios from "axios";

// code related to config of axios
// create crea una instancia de axios pero podemos customizar más
export default axios.create({
  baseURL: "https://api.unsplash.com/",
  headers: {
    Authorization: "Client-ID g8xXkPbMc8SVzpLBGznzw1fndoSkK-A0Cz44aNnbEpQ",
  },
});

