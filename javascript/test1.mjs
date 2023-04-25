import FissionReactor from "./fissionReactor.mjs";
import coolants from "./coolants.mjs";

let r1 = new FissionReactor();
console.log(r1.setCoolant(coolants.sodium));
console.log(r1.coolant);

console.log("")