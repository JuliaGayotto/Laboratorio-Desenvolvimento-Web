import { Provider } from "./contexts/Contexto";
import Principal from "./pages/Principal";

function App() {
  return (
    <Provider>
      <Principal/>
    </Provider>
  );
}

export default App;
