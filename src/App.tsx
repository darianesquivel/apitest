import Home from "./pages/Home";
import { QueryClientProvider, QueryClient } from "react-query";

// instancia del cliente que vamos a necesitar para pasarle como prop al componente QueryClientProvider
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Home />
    </QueryClientProvider>
  );
}

export default App;
