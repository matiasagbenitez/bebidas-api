import { useState, useEffect, createContext } from "react";
import axios from "axios";

const BebidasContext = createContext();

const BebidasProvider = ({ children }) => {
  const [bebidas, setBebidas] = useState([]);
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

  return (
    <BebidasContext.Provider
      value={{
        consultarBebidas,
        bebidas,
      }}
    >
      {children}
    </BebidasContext.Provider>
  );
};

export { BebidasProvider };
export default BebidasContext;
