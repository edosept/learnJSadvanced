// for..of
// for..of array
// const mhs = ['Edo', 'Yuri', 'Nindy'];
// for(const m of mhs) {
//     console.log(m);
// }

// bisa jg ambil indexnya
// const mhs = ['Edo', 'Yuri', 'Nindy'];
// for(const [i, m] of mhs.entries()) {
//     console.log(`${m} adalah mahasiswa ke-${i+1}`);
// }

// for..of string
// const nama = 'Edo Septian';
// for(const n of nama) {
//     console.log(n);
// }

// for..of nodelist
// const liNama = document.querySelectorAll('.nama');

// for(n of liNama) {
//     console.log(n.innerHTML);
// }

// for..of arguments
// function jumlahkanAngka() {
//     let jumlah = 0;
//     for(a of arguments) {
//         jumlah += a;
//     }
//     return jumlah;
// }
// console.log(jumlahkanAngka(1, 2, 3, 4, 5));

// for..in --> object
const mhs = {
    nama: 'Edo',
    umur: 25,
    email: 'edosept@gmail.com'
}

for(m in mhs) {
    // console.log(m); // outputnya key
    console.log(mhs[m]); //outputnya value
}

// kesimpulan
// iterable--> for of itu untuk array
// enumerable--> for in itu untuk object