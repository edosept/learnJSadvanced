// Destructuring Assignment/Variable

// Array
// const perkenalan = ['Hallo', 'nama', 'saya', 'Edo'];
// const [salam, satu, dua, nama] = perkenalan;
// const [salam, , , nama] = perkenalan; //bisa jg di skip, tapi komanya tetep ada
// console.log(nama);

// swap items, menukar isi array
// let a = 1;
// let b = 2;
// console.log(a);
// console.log(b);
// [a, b] = [b, a];
// console.log(a);
// console.log(b);

// return value pada function
// function coba() {
//     return [1, 2];
// }

// const[a, b] = coba();
// console.log(a);

// rest parameter
// const [a, ...values] = [1, 2, 3, 4, 5];
// console.log(a);
// console.log(values);

// Object
// manggilnya harus sesuai dengan keynya
// const mhs = {
//     nama : 'Edo',
//     umur : 25
// }

// const {nama, umur} = mhs;
// console.log(nama);

// assigment tanpa deklarasi object
// ({nama, umur} = {
//     nama: 'Edo',
//     umur: 25
// });
// console.log(umur);

// assign ke variabel baru
// const mhs = {
//     nama : 'Edo',
//     umur : 25
// }

// const {nama: n, umur: u} = mhs;
// console.log(u);

// memberi nilai default + assign variabel baru
// const mhs = {
//     nama : 'Edo',
//     umur : 25,
//     email : 'edosept@gmail.com'
// }

// const {nama: n, umur: u, email: e = 'email@default.com'} = mhs;
// console.log(e);

// rest parameter
// const mhs = {
//     nama : 'Edo',
//     umur : 25,
//     email : 'edosept@gmail.com'
// }

// const {nama: n, ... value} = mhs;
// console.log(value);

// mengambil field pada object, setelah dikirim sebagai parameter untuk function
const mhs = {
    id : 12345,
    nama : 'Edo',
    umur : 25,
    email : 'edosept@gmail.com'
}

function getIdMhs({id, nama}) { //bisa ambil beberapa saja sesuai kebutuhan
    return id;
}

console.log(getIdMhs(mhs));