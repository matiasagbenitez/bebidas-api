import { useState, useEffect, createContext } from "react";
import axios from "axios";

const BebidasContext = createContext();

const BebidasProvider = ({ children }) => {
  const [bebidas, setBebidas] = useState([]);
  const [modal, setModal] = useState(false);
  const [idBebida, setIdBebida] = useState(null);
  const [receta, setReceta] = useState({});
  const [cargando, setCargando] = useState(false);

  useEffect(() => {
    setCargando(true);
    const consultarBebida = async () => {
      if (!idBebida) return;
      try {
        const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idBebida}`;
        const {
          data: { drinks },
        } = await axios.get(url);
        setReceta(drinks[0]);
      } catch (error) {
        console.log(error);
      } finally {
        setCargando(false);
      }
    };
    consultarBebida();
  }, [idBebida]);

  const consultarBebidas = async (datos) => {
    try {
      const { nombre, categoria } = datos;
      const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${nombre}&c=${categoria}`;
      const {
        data: { drinks },
      } = await axios.get(url);
      setBebidas(drinks);
    } catch (error) {
      console.log(error);
    }
  };

  const handleClickModal = () => {
    setModal(!modal);
  };

  const handleSetIdBebida = (id) => {
    setIdBebida(id);
  };

  return (
    <BebidasContext.Provider
      value={{
        consultarBebidas,
        bebidas,
        handleClickModal,
        modal,
        handleSetIdBebida,
        receta,
        cargando,
      }}
    >
      {children}
    </BebidasContext.Provider>
  );
};

export { BebidasProvider };
export default BebidasContext;
