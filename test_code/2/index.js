/**
 * Fungsi untuk menemukan jumlah maksimum dari subarray dengan panjang tertentu.
 * @param {number[]} arr - Array of numbers yang menjadi input.
 * @param {number} num - Panjang subarray yang harus dicari jumlah maksimumnya.
 * @returns {number} - Jumlah maksimum dari subarray dengan panjang yang ditentukan.
 */
export default function maxSubarraySum(arr, num) {
  if (arr.length < num) return null; // Mengembalikan null jika panjang array kurang dari num

  let maxSum = 0;
  let tempSum = 0;

  // Hitung jumlah dari subarray pertama dengan panjang num
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }

  tempSum = maxSum;

  // Sliding window: geser subarray dan hitung jumlahnya
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }

  return maxSum;
}
