// Destructuring Function
// function penjumlahanPerkalian(a, b) {
//     return [a + b, a * b];
// }

// const [jumlah, kali] = penjumlahanPerkalian(2, 3)
// console.log(jumlah);
// console.log(kali);

// function kalkulasi(a, b) {
//     return [a + b, a - b, a * b, a / b];
// }

// const [tambah, kurang, kali, bagi] = kalkulasi(2, 3)
// //bisa kasih nilai default misal,bagi='tidak ada'
// console.log(bagi);

//klo array itu urutan berpengaruh
//klo kita buatnya object itu kan key dan value jadi urutan tidak berpengaruh
//kita tinggal panggil keynya aja
// function kalkulasi(a, b) {
//     return {
//         tambah: a + b,
//         kurang: a - b,
//         kali: a * b,
//         bagi: a / b
//     }
// }

// const {bagi, tambah, kali, kurang} = kalkulasi(2, 3)
// console.log(kurang);

// Destructuring Function arguments
const mhs1 = {
    nama: 'Edo',
    umur: 25,
    email: 'edosept@gmail.com',
    nilai: {
        tugas: 80,
        uts: 85,
        uas: 95
    }
}

function cetakMhs({nama, umur, email, nilai: {tugas, uts, uas}}) {
    return `Hallo, nama saya ${nama}, saya berumur ${umur} tahun, dan nilai uas saya adalah ${uas}`;
}

console.log(cetakMhs(mhs1));

