import { Col, Card, Button } from "react-bootstrap";
import useBebidas from "../hooks/useBebidas";

export const Bebida = ({ bebida }) => {
  const { handleClickModal, handleSetIdBebida } = useBebidas();

  return (
    <Col md={6} lg={3}>
      <Card className="mb-3">
        <Card.Img
          variant="top"
          src={bebida.strDrinkThumb}
          alt="Imagen de la bebida"
        />
        <Card.Body>
          <Card.Title>{bebida.strDrink}</Card.Title>
          <Button
            variant="warning"
            className="w-100 text-uppercase mt-2"
            onClick={() => {
              handleClickModal();
              handleSetIdBebida(bebida.idDrink);
            }}
          >
            Ver receta
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};
