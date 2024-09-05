import maxSubarraySum from ".";

/**
 * Fungsi untuk menjalankan unit test pada fungsi maxSubarraySum.
 */
export default function runTests() {
  const testCases = [
    {
      input: { arr: [100, 200, 300, 400], num: 2 },
      expected: 700,
      description: "Subarray maksimum dari [300, 400] dengan panjang 2",
    },
    {
      input: { arr: [1, 4, 2, 10, 23, 3, 1, 0, 20], num: 4 },
      expected: 39,
      description: "Subarray maksimum dari [4, 2, 10, 23] dengan panjang 4",
    },
    {
      input: { arr: [-3, 4, 0, -2, 6, -1], num: 2 },
      expected: 5,
      description: "Subarray maksimum dari [6, -1] dengan panjang 2",
    },
    {
      input: { arr: [1, 2, 3], num: 4 },
      expected: null,
      description: "Mengembalikan null jika panjang array kurang dari num",
    },
    {
      input: { arr: [], num: 2 },
      expected: null,
      description: "Mengembalikan null untuk array kosong",
    },
    {
      input: { arr: [10, -10, 10, -10, 10], num: 3 },
      expected: 10,
      description: "Subarray maksimum dari [10, -10, 10] dengan panjang 3",
    },
    {
      input: { arr: [1, 1, 1, 1, 1], num: 5 },
      expected: 5,
      description: "Subarray maksimum dari [1, 1, 1, 1, 1] dengan panjang 5",
    },
  ];

  let passed = 0;
  console.log(
    `🔉 Fungsi dengan input array of number dan number untuk menemukan jumlah maksimum subarray dengan panjang angka yang dimasukan ke fungsi`
  );
  testCases.forEach((test, index) => {
    const result = maxSubarraySum(test.input.arr, test.input.num);
    const pass = result === test.expected;
    if (pass) {
      console.log(`   ✅ Test case ${index + 1} passed: ${test.description}`);
      passed++;
    } else {
      console.error(`  ❌ Test case ${index + 1} failed: ${test.description}`);
      console.error(
        `      Input: arr = ${JSON.stringify(test.input.arr)}, num = ${
          test.input.num
        }`
      );
      console.error(`      Expected: ${test.expected}, but got: ${result}`);
    }
  });

  console.log(`\n${passed} out of ${testCases.length} tests passed.`);
}
