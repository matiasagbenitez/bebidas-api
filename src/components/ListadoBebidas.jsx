import { Row } from "react-bootstrap";
import { Bebida } from "./Bebida";
import useBebidas from "../hooks/useBebidas";

export const ListadoBebidas = () => {
  const { bebidas } = useBebidas();
  return (
    <Row>
        {bebidas.map(bebida => (
            <Bebida key={bebida.idDrink} bebida={bebida} />
        ))}
    </Row>
  )
};
