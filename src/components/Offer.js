import React, { useState } from "react";
import data from "../data/ofertas.json";
import Characteristics from "./Characteristics";

const Offer = () => {
  const [oferta, setOferta] = useState("Seleccione alguna oferta");
  const [idOferta, setIdOferta] = useState("id");
  const [index, setIndex] = useState("id");

  const versions = data.map((item) => item.versions);
  const datos = versions.map((item) =>
    item.map((item) => {
      return {
        id: item.id,
        name: item.name,
      };
    })
  );

  const onChange = (e) => {
    setOferta(e.target.value);
    setIndex(e.target.selectedIndex);
  };

  return (
    <>
      <div className="grid grid-cols-1 text-center md:grid-cols-2">
        <div className="bg-red-300">
          <h1>Componente Offer</h1>
          <select onChange={onChange} name="selectId">
            <option value="Ofertas disponibles">Ofertas disponibles...</option>
            {datos.map((item) =>
              item.map((item, index) => {
                return (
                  <option key={item.id} value={item.name} id={item.id}>
                    OFERTA: {item.name}
                  </option>
                );
              })
            )}
          </select>
        </div>
        <div className="grid grid-rows-2 bg-blue-300">
          <label className="row-span-1">ID Oferta: {idOferta}</label>
          <label className="row-span-1">Nombre: {oferta}</label>
        </div>
      </div>
      <Characteristics oferta={{ index: index, datos: versions }} />
    </>
  );
};

export default Offer;
