// Promise
// Object yang merepresentasikan keberhasilan / kegagalan sebuah event yang asynchronous di masa yang akan datang
// janji(terpenuhi, ingkar)
// states(fulfilled, rejected, pending)
// states --> keadaan
//pending --> waktu tunggu sebelum janjinya terpenuhi atau tidak

// callback(resolve, reject, finally)
// aksi(then, catch)
//then akan menjalankan resolve, catch akan menjalankan reject

// contoh 1
// let ditepati = true;
// const janji1 = new Promise((resolve, reject) => {
//     if(ditepati) {
//         resolve('Janji telah ditepati!');
//     } else {
//         reject('Ingkar janji . .');
//     }
// });

// janji1
//     .then(response => console.log('OK! : ' + response))
//     .catch(response => console.log('NOT OK! : ' + response));

// contoh 2
// let ditepati = false;
// const janji2 = new Promise((resolve, reject) => {
//     if(ditepati) {
//         setTimeout(() => {
//             resolve('ditepati setelah 5 detik!');
//         }, 5000);
//     } else {
//         setTimeout(() => {
//             reject('tidak ditepati setelah 5 detik!');
//         }, 5000);
//     }
// });

// console.log('mulai');
// janji2
//     .finally(() => console.log('selesai menunggu!')) //biasa digunakan saat load animasi
//     .then(response => console.log('OK! : ' + response))
//     .catch(response => console.log('NOT OK! : ' + response));
// console.log('selesai!');

// Promise.all
// ini adalah sebuah method yang digunakan ketika kita punya banyak promise,
// tapi mau dijalankan sekaligus

// misal kita punya beberapa API mau dijalankan sekaligus
const film = new Promise(resolve => {
    setTimeout(() => {
        resolve([{
            judul: 'Avengers',
            sutradara: 'Edo',
            pemain: 'Yuri, Nindy'
        }]);
    }, 1000);
});

const cuaca = new Promise(resolve => {
    setTimeout(() => {
        resolve([{
            kota: 'Tangerang',
            temperature: 25,
            kondisi: 'Hujan'
        }]);
    }, 500);
});

Promise.all([film, cuaca])
    .then(response => {
        const [film, cuaca] = response;
        console.log(film);
        console.log(cuaca);
    })