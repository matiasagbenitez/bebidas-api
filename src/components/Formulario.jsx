import { Button, Form, Row, Col } from "react-bootstrap";

export const Formulario = () => {
  return (
    <Form>
      <Row>
        <Col md={6}>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="nombre">Nombre de la bebida</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ej. Margarita"
              id="nombre"
              name="nombre"
            />
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="categoria">Categoría</Form.Label>
            <Form.Select id="categoria" name="categoria">
              <option value="">Seleccione una categoría</option>
            </Form.Select>
          </Form.Group>
        </Col>
      </Row>
    </Form>
  );
};
