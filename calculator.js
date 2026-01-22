let angka1 = parseFloat(prompt("Masukkan angka pertama :"));
let operator = prompt("Pilih operator (+, -, *, /) :");
let angka2 = parseFloat(prompt("Masukkan angka kedua :"));

let hasil;

if (operator === "+") {
  hasil = angka1 + angka2;
} else if (operator === "-") {
  hasil = angka1 - angka2;
} else if (operator === "*") {
  hasil = angka1 * angka2;
} else if (operator === "/") {
  if (angka2 === 0) {
    alert("Tidak bisa dibagi dengan nol!");
  } else {
    hasil = angka1 / angka2;
  }
} else {
  alert("Operator tidak valid!");
}

if (hasil !== undefined) {
  alert("Hasil : " + hasil);
}