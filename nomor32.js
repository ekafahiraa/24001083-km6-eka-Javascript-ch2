// Soal nomor 32
// Tulis fungsi JavaScript untuk menemukan array yang mengandung elemen tertentu.

// Fungsi untuk memeriksa apakah suatu array mengandung elemen tertentu
function contains(array, element) {
  // Iterasi melalui array
  for (let i = 0; i < array.length; i++) {
    // Periksa apakah elemen saat ini sama dengan elemen yang dicari
    if (array[i] === element) {
      // Kembalikan true jika elemen ditemukan dalam array
      return true;
    }
  }
  // Kembalikan false jika elemen tidak ditemukan dalam array
  return false;
}

// Contoh array
array = [2, 5, 9, 6, 3];

// Panggil fungsi contains untuk memeriksa apakah elemen ini ada dalam array
console.log(contains(array, 9)); // true
console.log(contains(array, 8)); // false
console.log(contains(array, 7, 4, 1)); // false
console.log(contains(array, 5, 6, 3)); // true
