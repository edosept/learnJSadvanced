// synchronous callback
// sebuah function yang parameternya adalah function juga
// function tampilkanPesan(callback) {
//     const nama = prompt('Masukkan Nama: ');
//     callback(nama);
// }

// tampilkanPesan(nama => alert(`Hallo, ${nama}`));

// jQuery
console.log('mulai');
$.ajax({
    url:'data/mahasiswa.json',
    success: (mhs) => {
        mhs.forEach(m => console.log(m.nama));
    },
    error: (e) => {
        console.log(e.responseText);
    }
});
console.log('selesai');