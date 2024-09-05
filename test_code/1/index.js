/**
 * Fungsi untuk mengurutkan array dari terbesar ke terkecil menggunakan algoritma Bubble Sort.
 * @param {number[]} arr - Array of numbers yang akan diurutkan.
 * @returns {number[]} - Array yang telah diurutkan dari terbesar ke terkecil.
 */
export function descending(arr) {
  // Buat salinan dari array input untuk menghindari mutasi pada array asli
  let array = arr.slice();
  let n = array.length;
  let swapped;

  // Loop untuk setiap elemen dalam array
  for (let i = 0; i < n - 1; i++) {
    swapped = false;
    // Loop untuk membandingkan elemen bersebelahan
    for (let j = 0; j < n - i - 1; j++) {
      if (array[j] < array[j + 1]) {
        // Tukar elemen jika elemen saat ini lebih kecil dari elemen berikutnya
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
        swapped = true;
      }
    }
    // Jika tidak ada pertukaran selama iterasi, array sudah terurut
    if (!swapped) break;
  }

  return array;
}

/**
 * Fungsi untuk membandingkan dua array.
 * @param {number[]} a - Array pertama.
 * @param {number[]} b - Array kedua.
 * @returns {boolean} - True jika kedua array sama, false jika tidak.
 */
export function arraysEqual(a, b) {
  if (a.length !== b.length) return false;
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}

