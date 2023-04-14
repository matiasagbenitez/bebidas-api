import { Container } from "react-bootstrap";
import { Formulario } from "./components/Formulario";
import { ListadoBebidas } from "./components/ListadoBebidas";
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
          <ListadoBebidas />
        </Container>
      </BebidasProvider>
    </CategoriasProvider>
  );
}

export default App;
