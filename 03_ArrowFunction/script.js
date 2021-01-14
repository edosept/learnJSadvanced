// function expression
// const tampilNama = function(nama) {
//     return `Hallo, ${nama}`;
// }

// console.log(tampilNama('Edo'));

//arrow function --> bentuk lain dari function expression yang lebih ringkas
// const tampilNama = (nama) => {
//     return `Hallo, ${nama}`;
// }

// console.log(tampilNama('Yuri'));

//kalo parameternya dua wajib (tutupkurung)
// const tampilNama = (nama, waktu) => {
//     return `Selamat ${waktu}, ${nama}`;
// }

// console.log(tampilNama('Yuri', 'Malam'));

//kalo parameter satu gaperlu (tutupkurung parameter)
//gaperlu jg nulis return (istilahnya implisit return) dan kurung {}
// const tampilNama = nama => `Hallo, ${nama}`; 
// console.log(tampilNama('Yuri'));

//kalo misalnya tanpa parameter wajib menuliskan --> ()
// const tampilNama = () => `Hello word!`
// console.log(tampilNama());

//membalikkan ke object
// let mahasiswa = ['Edo', 'Yuri', 'Nindy'];

// let jumlahHuruf = mahasiswa.map(nama => ({ nama, jmlHuruf: nama.length}));
// console.log(jumlahHuruf);

// konsep this pada arrow function
// const Mahasiswa = function() {
//     this.nama = 'Edo';
//     this.umur = 25;
//     this.sayHello = function() {
//         console.log(`Hallo, nama saya ${this.nama}, dan umur saya ${this.umur} tahun `);
//     }

//perbedaannya terletak disini, jadi sebenarnya arrow function itu ga punya konsep this
//karena dia gapunya konsep this,
//maka thisnya disini akan mencari ke lexical scopenya ke luar,
//jadi thisnya disini adalah Mahasiswa, ngambil ke dalam function Mahasiswa bkn ke global window

//     setInterval(() => {
//         console.log(this.umur++);
//     }, 500)
// }

// const edo = new Mahasiswa();

//klo kesimpulan gua sih nulis arrow function itu di function kedua(function di dalam function) atau di localnya

const box = document.querySelector('.box');
box.addEventListener('click', function() {
    let satu = 'size';
    let dua = 'caption';

    if(this.classList.contains(satu)) {
        [satu,dua] = [dua,satu];
    }

    this.classList.toggle(satu);
    setTimeout(() => {
        this.classList.toggle(dua);
    }, 600);
});