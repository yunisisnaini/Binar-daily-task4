const { sum, sum2 } = require("./penjumlahan")
const { kurang, kurang2 } = require("./pengurangan")

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// 1 hasil tambah inputan user (done)
// 2 hasil kurang inputan user
// 3 hasil kali inputan user
// 4 hasil bagi inputan user
// 5 hasil total harga kali quantitas barang

console.log('================ hasil tambah inputan user ================');
rl.question('Masukkan angka 1 yang ingin dijumlahkan? ', (angka1) => {
    rl.question('Masukkan angka 2 yang ingin dijumlahkan? ', (angka2) => {
        const hasil = sum(parseInt(angka1), parseInt(angka2))
        console.log(hasil);
        console.log(`Hasil dari ${angka1} + ${angka2} adalah ${hasil}`);
        rl.close();
    });
});

console.log('================ hasil kurang inputan user ================');
rl.question('Masukkan angka 1 yang ingin dikurangkan? ', (angka1) => {
    rl.question('Masukkan angka 2 yang ingin dikurangkan? ', (angka2) => {
        const hasil = parseInt(angka1) - parseInt(angka2)
        console.log(hasil);
        console.log(`Hasil dari ${angka1} - ${angka2} adalah ${hasil}`);
        rl.close();
    });
});

console.log('================ hasil kali inputan user ================');
rl.question('Masukkan angka 1 yang ingin dikalikan? ', (angka1) => {
    rl.question('Masukkan angka 2 yang ingin dikalikan? ', (angka2) => {
        const hasil = parseInt(angka1) * parseInt(angka2)
        console.log(hasil);
        console.log(`Hasil dari ${angka1} * ${angka2} adalah ${hasil}`);
        rl.close();
    });
});

console.log('================ hasil bagi inputan user ================');
rl.question('Masukkan angka 1 yang ingin dibagi? ', (angka1) => {
    rl.question('Masukkan angka 2 yang ingin dibagi? ', (angka2) => {
        const hasil = parseInt(angka1) / parseInt(angka2)
        console.log(hasil);
        console.log(`Hasil dari ${angka1} / ${angka2} adalah ${hasil}`);
        rl.close();
    });
});

console.log('================ hasil total harga kali quantitas barang ================');
rl.question('Masukkan total harga? ', (price) => {
    rl.question('Masukkan quantitas barang? ', (quantity) => {
        const hasil = parseInt(price) * parseInt(quantity)
        console.log(hasil);
        console.log(`Hasil dari ${price} * ${quantity} adalah ${hasil}`);
        rl.close();
    });
});