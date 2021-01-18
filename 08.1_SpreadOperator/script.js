// spread operator --> memecah iterable menjadi single element

// menggabungkan 2 array atau lebih
// const mhs = ['Edo', 'Yuri', 'Nindy'];
// const dosen = ['Juna', 'Arnold', 'Renata'];
// const orang = [...mhs, 'Becca', ...dosen];

// console.log(orang);

// meng copy array tanpa menggangu array yg lama
// const mhs = ['Edo', 'Yuri', 'Nindy'];
// const mhs1 = [...mhs];

// mhs1[0] = 'Becca';
// console.log(mhs1);

const nama = document.querySelector('.nama');
const huruf = [...nama.textContent].map(h => `<span>${h}</span>`).join('');
nama.innerHTML = huruf