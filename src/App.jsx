import { Container } from "react-bootstrap";
import {Formulario} from "./components/Formulario";
import { CategoriasProvider } from "./context/CategoriasProvider";

function App() {
  return (
    <CategoriasProvider>
      <header className="py-3">
        <h1>Buscador de bebidas</h1>
      </header>

      <Container className="mt-3">
        <Formulario />
      </Container>
    </CategoriasProvider>
  );
}

export default App;
