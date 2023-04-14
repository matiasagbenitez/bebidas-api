import { Container } from "react-bootstrap";
import { Formulario } from "./components/Formulario";
import { CategoriasProvider } from "./context/CategoriasProvider";
import { BebidasProvider } from "./context/BebidasProvider";

function App() {
  return (
    <CategoriasProvider>
      <BebidasProvider>
        <header className="py-3">
          <h1>Buscador de bebidas</h1>
        </header>

        <Container className="mt-3">
          <Formulario />
        </Container>
      </BebidasProvider>
    </CategoriasProvider>
  );
}

export default App;
