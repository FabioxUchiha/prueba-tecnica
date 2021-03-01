import React from "react";
import Prices from "./Prices";

const Characteristics = ({ oferta }) => {
  const index = oferta.index;
  const versions = oferta.datos;
  const datos = versions.map((item) =>
    item.map((item) => item.characteristics)
  );
  let dato = oferta.index;
  if (typeof dato != "number") {
    dato = 0;
  }
  const res = datos[dato];
  const result = res.map((item) => item.map((item) => item));

  return (
    <div className="mt-10 grid grid-cols-2" key="1">
      <div className="bg-red-200">
        <h1>Caracteristicas</h1>
        <table key="2">
          <tbody key="3">
            {result.map((item) => {
              return item.map((item) => {
                return (
                  <tr key={item.id}>
                    <td key={item.id}>{item.id}</td>
                  </tr>
                );
              });
            })}
          </tbody>
        </table>
      </div>
      <div className="bg-green-200">
        <Prices precios={versions} index={index} />
      </div>
    </div>
  );
};

export default Characteristics;
