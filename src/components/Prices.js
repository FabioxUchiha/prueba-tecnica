import React, { useState } from "react";

const Prices = ({ precios, index }) => {
  const [precio, setPrecio] = useState([]);
  const [nombrePrecio, setNombrePrecio] = useState([]);

  var imprimir = "sin datos";
  const productOfferingPrices = precios.map((item) =>
    item.map((item) => item.productOfferingPrices)
  );
  if (typeof index != "number") {
  } else {
    for (var i = index; i < index + 1; i++) {
      for (var j = 0; j < 4; j++) {
        if (productOfferingPrices[index][j] === undefined) {
          continue;
        }
        var data = productOfferingPrices[index][j].map((item) =>
          item.versions.map((item) => item.name)
        );
        // console.log(
        //   productOfferingPrices[index][j].map((item) =>
        //     item.versions.map((item) => item.price.amount)
        //   )
        // );
      }
    }
    var nombreData = data.map((item) => item);
    imprimir = nombreData.map((item) => `${item} \n`);
  }

  return (
    <div key="9">
      <h1>{imprimir}</h1>
    </div>
  );
};

export default Prices;
