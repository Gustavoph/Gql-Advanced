const func = (valor) => (valor2) => {
  console.log(valor2);
};

const func2 = func();
func2('Teste');
