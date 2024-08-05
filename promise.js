const promesa = new Promise((resolve, reject) => {
  let numeros = [];
  let resultado = [];
  let res = 1;

  for (let i = 1; i <= 15; i++) {
    numeros.push(i);
  }

  if (numeros.length > 0) {
    setTimeout(() => {
      numeros.forEach((e) => {
        res += e;
        resultado.push(res);
      });
      const promesa = new Promise((resolve, reject) => {
        let numeros = [];
        let resultado = [];
        let res = 1;
        let index = 1;

        for (let i = 1; i <= 15; i++) {
          numeros.push(i);
        }

        if (numeros.length > 0) {
          const interval = setInterval(() => {
            if (index <= numeros.length) {
              res += numeros[index - 1];
              resultado.push(res);
              console.log(
                `Número agregado: ${res}, Array completo: ${resultado}`
              );
              index++;
            } else {
              clearInterval(interval);
              resolve(resultado);
            }
          }, 2000);
        } else {
          reject(new Error("No se pudo completar la operación"));
        }
      });

      promesa
        .then((resultado) => {
          console.log("Resultado final:", resultado);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }, 2000);
  } else {
    reject(new Error("No se pudo completar la operación"));
  }
});

promesa
  .then((resultado) => {
    console.log("Resultado:", resultado);
  })
  .catch((error) => {
    console.error("Error:", error);
  });


