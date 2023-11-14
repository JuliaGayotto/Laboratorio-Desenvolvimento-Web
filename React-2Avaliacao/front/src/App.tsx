import { BrowserRouter } from "react-router-dom";
import { Provider } from "./contexts/Contexto";
import Rotas from "./routes/Rotas";
import Menu from "./components/Menu";

function App() {
  return (
    <Provider>
      <BrowserRouter>
        <Menu />
        <Rotas />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
