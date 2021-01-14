// 1. object literal
// problem --> tidak efektif untuk object yang banyak

// let mahasiswa1 = {
//     nama : 'Edo',
//     energi : 10,
//     makan : function(porsi) {
//         this.energi += porsi;

//         console.log(`Hallo ${this.nama}, selamat makan!`);
//     }
// }

// let mahasiswa2 = {
//     nama : 'Yuri',
//     energi : 20,
//     makan : function(porsi) {
//         this.energi += porsi;

//         console.log(`Hallo ${this.nama}, selamat makan!`);
//     }
// }

// 2. function declaration
// keuntungannya kita gga perlu buat duplikat dari objectnya,
// cukup buat templatenya satu, nanti kita tinggal panggil saja

// function Mahasiswa(nama, energi) {
//     let mahasiswa = {};
//     mahasiswa.nama = nama;
//     mahasiswa.energi = energi;

//     mahasiswa.makan = function(porsi) {
//         this.energi += porsi;
//         console.log(`Hallo ${this.nama}, selamat makan!`);
//     }

//     mahasiswa.main = function(jam) {
//         this.energi -= jam;
//         console.log(`Hallo ${this.nama}, selamat bermain!`);
//     }

//     return mahasiswa;
// }

// let edo = Mahasiswa('Edo', 10);
// let yuri = Mahasiswa('Yuri', 20);

// 3. constructor function
// dia perlu menambahkan keyword new,
// trus perlu this jg sebagai pengganti objectnya

// function Mahasiswa(nama, energi) {
//     this.nama = nama;
//     this.energi = energi;

//     this.makan = function(porsi) {
//         this.energi += porsi;
//         console.log(`Hallo ${this.nama}, selamat makan!`);
//     }

//     this.main = function(jam) {
//         this.energi -= jam;
//         console.log(`Hallo ${this.nama}, selamat bermain!`);
//     }
// }

// let edo = new Mahasiswa('Edo', 10);
// let yuri = new Mahasiswa('Yuri', 20);

// 4. object.create()
//menghubungkan dengan object lain

// const methodMahasiswa = {
//     makan : function(porsi) {
//         this.energi += porsi;
//         console.log(`Hallo ${this.nama}, selamat makan`);
//     },

//     main : function(jam) {
//         this.energi -= jam;
//         console.log(`Hallo ${this.nama}, selamat bermain!`);
//     },

//     tidur : function(jam) {
//         this.energi += jam * 2;
//         console.log(`Hallo ${this.nama}, selamat tidur!`);
//     }
// };

// function Mahasiswa(nama, energi) {
//     let mahasiswa = Object.create(methodMahasiswa);
//     mahasiswa.nama = nama;
//     mahasiswa.energi = energi;

//     return mahasiswa;
// }

// let edo = Mahasiswa('Edo', 10);
// let yuri = Mahasiswa('Yuri', 20);

// 5. prototype
// inheritance mirip class di bahasa pemrograman lain (OOP)

function Mahasiswa(nama, energi) {
    this.nama = nama;
    this.energi = energi;
}

Mahasiswa.prototype.makan = function(porsi) {
    this.energi += porsi;
    return `Hallo ${this.nama}, selamat makan!`;
}

Mahasiswa.prototype.main = function(jam) {
    this.energi -= jam;
    return `Hallo ${this.nama}, selamta bermain!`;
}

Mahasiswa.prototype.tidur = function(jam) {
    this.energi += jam * 2;
    return `Hallo ${this.nama}, selamat tidur!`;
}

let edo = new Mahasiswa('Edo', 10);
let yuri = new Mahasiswa('Yuri', 20);