const angka = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9];

//filter
// const newAngka = angka.filter(a => a >= 3);
// console.log(newAngka);

//map
//memetakan tiap tiap elemen yang ada di dalam array,
//dengan membalikkan sebuah fungsi array yang baru tanpa menggangu array yang lama
// const newAngka = angka.map(a => a*2);
// console.log(newAngka);

//reduce
// const newAngka = angka.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
//current value itu nilai awal, apabila kita definisikan ,0 maka nilai di depannya 0, misal kita tulis 5 maka nilai awal di depannya 5
// currentValue --> misal 5, <-- -1, 8, 9, 1, 4, -5, -4, 3, 2, 9
// console.log(newAngka);

//method chaining
//adalah sebuah penggabungan fungsi - fungsi pada higher order function tadi dalam satu kali eksekusi

const hasil = angka.filter(a => a > 5)
    .map(a => a * 3)
    .map(a => a / 2)
    //disini kita bisa filter dan map berkali kali, sesuai kebutuhan
    .reduce((acc, cur) => acc + cur);

console.log(hasil);
