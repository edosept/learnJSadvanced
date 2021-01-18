// Rest Parameter
// function myFunc(...myargs) {
//     return myargs;
// }

// console.log(myFunc(1, 2, 3, 4, 5));

// function jumlahkan(...angka) {
//     return angka.reduce((a, b) => a + b);
// }

// console.log(jumlahkan(1, 2, 3, 4, 5));

// array destructuring
// const kelompok1 = ['Edo', 'Yuri', 'Nindy', 'Becca', 'Isman'];
// const [ketua, wakil, ...anggota] = kelompok1;
// console.log(anggota);

// object destructuring
// const team = {
//     pm: 'Edo',
//     frontEnd: 'Yuri',
//     backEnd: 'Nindy',
//     ux: 'Becca',
//     devops: 'Isman'
// }

// const {pm, ...myTeam} = team;
// console.log(myTeam);

// filtering
function filterBy(type, ...values) {
    return values.filter(v => typeof v === type);
}

console.log(filterBy('string', 1, 2, 'Edo', false, 10, true, 'Yuri'));