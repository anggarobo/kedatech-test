/**
 * Fungsi untuk mendapatkan jumlah semua bilangan genap dalam nested objek.
 * @param {Object} obj - Objek yang berisi bilangan dan nested objek.
 * @returns {number} - Jumlah semua bilangan genap dalam objek.
 */
export default function sumEvenNumbers(obj) {
  let sum = 0;

  function recurse(currentObj) {
    // Iterasi melalui setiap properti di dalam objek
    for (let key in currentObj) {
      if (typeof currentObj[key] === "object" && currentObj[key] !== null) {
        // Jika properti adalah objek lain, panggil rekursif
        recurse(currentObj[key]);
      } else if (
        typeof currentObj[key] === "number" &&
        currentObj[key] % 2 === 0
      ) {
        // Jika properti adalah bilangan genap, tambahkan ke jumlah
        sum += currentObj[key];
      }
    }
  }

  recurse(obj);
  return sum;
}
