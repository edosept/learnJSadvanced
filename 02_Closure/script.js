// lexical scope
// function init() {
//     let nama = 'Edo'; // local variable

//     function tampilNama() { // inner function (ciri-ciri closure)
//         console.log(nama); // akses ke parent variable
//     }

// disebut closure apabila inner function membutuhkan data dari luar
// dan aksesnya ke parent variable init()
// closure disebut juga gabungan antara function dengan lexical scope

//     tampilNama();
// }

// init();

// contoh lain closure, langsung return inner functionnya
// function init() {
//     return function(nama) {
//         console.log(nama);
//     }
// }

// let panggilNama = init();
// panggilNama('Edo');
// panggilNama('Yuri');

// Kenapa kita harus menggunakan closure?
// 1. untuk membuat function factories, kita membuat function sesuai dengan function yang lain
// 2. untuk membuat seolah-olah kita punya private method

// function factories / factory function
// function ucapkanSalam(waktu) {
//     return function(nama) {
//         console.log(`Hallo ${nama}, selamat ${waktu}, semoga harimu menyenangkan!`);
//     }
// }

// let selamatPagi = ucapkanSalam('Pagi');
// let selamatSiang = ucapkanSalam('Siang');
// let selamatMalam = ucapkanSalam('Malam');

// console.log(selamatPagi('Edo'));
// console.log(selamatMalam('Yuri'));

// private method
let add = function() {
    let counter = 0;
    return function(){ //inner function
        return ++counter; //mengacu pada nilai counter sebelumnya yaitu 0
    }
}

let a = add(); //add buat jalanin smua function
//a hanya untuk menjalankan inner function

counter = 100; //jadi walaupun kita kasih variabel 100 disini si function counter 0 seolah-olah jadi private method, dia akan tetap menjalankan fungsinya tidak terpengaruh dari variabel global

console.log(a());
console.log(a());
console.log(a());