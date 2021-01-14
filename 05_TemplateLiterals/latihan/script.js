// 1. HTML Fragments
// const mhs = {
//     nama : 'Edo',
//     umur : 25,
//     nim : '012345678',
//     email : 'edosept@gmail.com'
// };

// const el = `<div class="mhs">
// <h2>${mhs.nama}</h2>
// <span class="nim">${mhs.nim}</span>
// </div>`;

// 2. Looping
// isinya array of object
// const mhs = [
//     {
//         nama : 'edo',
//         email : 'edosept@gmail.com'
//     },
//     {
//         nama : 'yuri',
//         email : 'yurii@gmail.com'
//     },
//     {
//         nama : 'nindy',
//         email : 'ninn@gmail.com'
//     }
// ];

// const el = `<div class="mhs">
// ${mhs.map(m => `<ul>
// <li>${m.nama}</li>
// <li>${m.email}</li>
// </ul>`).join('')}
// </div>`;

// 3. Conditional

// const lagu = {
//     judul: 'Kau Adalah',
//     penyanyi: 'Isyana Sarasvati',
//     feat: 'Rayi Putra'
// }

// const el = `<div class="lagu">
// <ul>
// <li>${lagu.penyanyi}</li>
// <li>${lagu.judul} ${lagu.feat ? `(feat. ${lagu.feat})` : ''}</li>
// </ul>
// </div>`;

// 4. Nested
// HTML Fragments bersarang

// const mhs = {
//     nama: 'Edo',
//     semester: 5,
//     mataKuliah: [
//         'Rekayasa Web',
//         'Analisis dan Perancangan Sistem Informasi',
//         'Pemrograman Sistem Interaktif',
//         'Perancangan Sistem OOP'
//     ]
// };

// function cetakMataKuliah(mataKuliah) {
//     return `<ol>${mataKuliah.map(mk => `<li>${mk}</li>`).join('')}</ol>`;
// }

// const el = `<div class="mhs">
// <h2>${mhs.nama}</h2>
// <span class="semester">Semester: ${mhs.semester}</span>
// <h4>Mata Kuliah: </h4>
// ${cetakMataKuliah(mhs.mataKuliah)}
// </div>`;

// document.body.innerHTML = el;

// 5. Tagged Templates
// const nama = 'Edo';
// const umur = 25;

// //strings buat ambil string biasa
// //values buat ambil expressionnya ${}
// function coba(strings, ...values) {
//     return strings.reduce((result, str, i) => `${result}${str}${values[i] || ''}`, '');
// }

// const str = coba`Hallo, nama saya ${nama}, saya ${umur} tahun`;
// console.log(str);

// Highlight
const nama = 'Edo';
const umur = 25;
const email = 'edosept@gmail.com';

function highlight(strings, ...values) {
    return strings.reduce((result, str, i) => `${result}${str}<span class="hl">${values[i] || ''}</span>`, '');
}

const str = highlight`Hallo, nama saya ${nama}, saya ${umur} tahun, dan email saya ${email}`;
document.body.innerHTML = str;