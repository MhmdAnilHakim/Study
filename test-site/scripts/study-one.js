// var x = confirm('kamu yakin??')

// if( x === true ) {
//     alert('user menekan oke')
// } else {
//     alert('user menekan cancle')
// }


// var lagi = true;

// while( lagi === true ){
//     var nama = prompt('masukan nama anda..')
//     alert('halo ' + nama)

//     lagi = confirm('coba lagi??')
// }

// alert('terimakasih')


// var angka = prompt('masukan angka')

// if( angka % 2 ===0) {
//     alert(angka +' masukan adalah genap')
// } else {
//     alert(angka + ' masukan adalah ganjil')
// }

// alert('mulai')

// for(var i = 0; i < 10; i++) {
//     alert("ho'oh")
// }

// alert('selesai')

// 

// var x = 1;

// while(x <= 10) {
//     console.log('hello world' + x + 'satu')
//     x++
// }

// var angka = prompt('Masukan angka');


// if( angka % 2 == 0) {
//     alert('genap')
// }else{
//     alert('ganjil')
// }

// var angka = parseInt(prompt('masukan angka'));

// if(angka === 1) {
//     alert('anda memasukan angka 1')
// }else if(angka === 2) {
//     alert('anda memasukan angka 2')
// }else if(angka === 3) {
//     alert('anda memasukan angka 3')
// }else{
//     alert('angka yang dimasukkan salah')
// }

// var angka = prompt('masukan angka');

// switch( angka ) {
//     case '1' : alert('satu'); break;
//     case '2' : alert('dua'); break;
//     default : alert('angka yang anda masukan salah'); break;
// }

// var item = prompt('masukan nama makanan \n (cth: nasi, sayur, daging, soda)')

// switch ( item ) {
//     case 'nasi' : alert('sehat'); break;
//     case 'sayur' : alert('sehat'); break;
//     case 'daging' : alert('sehat'); break;
//     case 'soda' : alert('tidak sehat'); break;
//     default : alert('salah'); break;
// }

// var s = '';

// for(var i = 10; i >= 0; i--) {
//     for(var j = 0; j < i; j++) {
//         s += '*'
//     }
//     s += '\n'
// }
// console.log(s)

// var tanya = true;

// while(tanya) {
//     // Menangkap Pilihan player
//     var player = prompt('Bermain suwit jawa; \n Gajah \n semut \n orang')

//     // Menangkap pilihan computer
//     var comp = Math.random()

//     if(comp < 0.34) {
//         comp= 'orang'
//     }else if(comp >= 0.34 && comp < 0.67) {
//         comp= 'gajah'
//     }else {
//         comp= 'semut'
//     }

//     var hasil = ''

//     // menentukan rules

//     if(player == comp) {
//         hasil = 'SERI'
//     }else if(player == 'gajah') {
//         // if(comp == 'orang') {
//         //     hasil == 'menang'
//         // }else {
//         //     hasil = 'kalah'
//         // }

//         hasil = (comp == 'orang') ? 'MENANG' : 'KALAH';
//     }else if(player == 'orang') {
//         // if(comp == 'gajah') {
//         //     hasil = 'kalah'
//         // }else {
//         //     hasil = 'menang'
//         // }
//         hasil = (comp == 'gajah') ? 'KALAH' : 'MENANG'
//     }else if(player == 'semut') {
//         hasil = (comp == 'orang') ? 'KALAH' : 'MENANG'
//     }else {
//         hasil = 'Memasukkan pilihan yang salah'
//     }

//     // Tampilah hasilnya

//     alert('Kamu memilih ;' + player + ' dan komputer memilih :' + comp + '\n maka hasilnya : kamu ' + hasil)
//     tanya = confirm('lagi?')


// }

// alert('Terimakasih telah bermain')


// var tanya = true

// while(tanya) {

//         var player = prompt('Bermain Suwit \n Pilihan: \n batu \n gunting \n kertas')

//         var comp = Math.random()

//         if(comp < 0.34){
//             comp= 'batu'
//         }else if(comp >= 0.34 && comp < 0.67) {
//             comp = 'gunting'
//         }else {
//             comp = 'kertas'
//         }

//         var hasil = ''

//         if(player == comp) {
//             hasil = 'SERI'
//         }else if(player == 'batu') {
//             hasil = (comp == 'gunting') ? 'MENANG' : 'KALAH'
//         }else if(player == 'gunting') {
//             hasil = (comp == 'kertas') ? 'MENANG' : 'KALAH'
//         }else if(player == 'kertas') {
//             hasil = (comp == 'batu') ? 'MENANG' : 'KERTAS'
//         }else{
//             hasil = 'Memasukkan pilihan yang salah'
//         }

//         alert('KAMU MEMILIH ' + player + '\n dan COMP MEMILIH ' + comp + '\n ' + hasil )

//         tanya = confirm('Ingin bermain lagi')

// }

// alert('Terimakasih telah bermain')

// var makanan = prompt('MENU: \n nasi \n mie \n sayur')

// switch(makanan) {
//     case 'nasi': alert('karbo'); break;
//     case 'mie' : alert('instan'); break;
//     case 'sayur' : alert('sehat'); break;
//     default : alert('salah'); break;
// }



// function tabungan(a,b) {
//     var total;
//     var pemasukan;
//     var pengeluaran;

//     pemasukan = a * a / b
//     pengeluaran = b * a / b
    

//     total = pemasukan / pengeluaran

//     return total;
    
// }

// console.log(tabungan(1000,146))

// function tambah(a,b) {
//     return tambah;
// }

// var a = 10

// var b = 7

// var hasil = a + b




// console.log(hasil)

function plus(a,b) {
    return plus
}

var a = parseInt(prompt('Masukan Nilai'))

var b = parseInt(prompt('masukan nilai'))

var hasil = tambah(a,b)


console.log(hasil)
