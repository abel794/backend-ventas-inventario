export let prueba =()=>{
    console.log("Inicio");

setTimeout(() => console.log("Timeout 1"), 0);

Promise.resolve().then(() => {
  console.log("Promesa 1");
  Promise.resolve().then(() => {
    console.log("Promesa 2");
  });
});

setTimeout(() => console.log("Timeout 2"), 0);

console.log("Fin");


}

prueba()