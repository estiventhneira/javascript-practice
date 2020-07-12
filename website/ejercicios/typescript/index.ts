console.log("hello, typescripttttt");

interface Rectangulo {
  alto: number;
  ancho: number;
}

let rect: Rectangulo = {
  alto: 6,
  ancho: 4,
};

function area(r: Rectangulo): number {
  return r.alto * r.ancho;
}
