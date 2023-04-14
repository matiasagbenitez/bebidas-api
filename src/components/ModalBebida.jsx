import { Modal, Image } from "react-bootstrap";
import useBebidas from "../hooks/useBebidas";

export const ModalBebida = () => {
  const { modal, handleClickModal, receta, cargando } = useBebidas();

  const mostrarIngredientes = () => {
    let ingredientes = [];
    for (let i = 1; i < 16; i++) {
      if (receta[`strIngredient${i}`]) {
        ingredientes.push(
          <li>
            {receta[`strIngredient${i}`]} {receta[`strMeasure${i}`]}
          </li>
        );
      }
    }
    return ingredientes;
  };

  return (
    !cargando && (
      <Modal show={modal} onHide={handleClickModal}>
        <Image src={receta.strDrinkThumb} alt="Imagen de la bebida" />
        <Modal.Header>
          <Modal.Title>{receta.strDrink}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h3>Instrucciones</h3>
          <p>{receta.strInstructions}</p>
          <h3>Ingredientes y cantidades</h3>
          <ul>{mostrarIngredientes()}</ul>
        </Modal.Body>
      </Modal>
    )
  );
};
