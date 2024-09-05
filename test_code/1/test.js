import * as sort from ".";

/**
 * Fungsi untuk menjalankan unit test pada fungsi sort descending.
 */
export default function runTests() {
  const testCases = [
    {
      input: [1, 2, 4, 3, 5, 3, 2, 1],
      expected: [5, 4, 3, 3, 2, 2, 1, 1],
      description: "Contoh dari pengguna",
    },
    {
      input: [],
      expected: [],
      description: "Array kosong",
    },
    {
      input: [10],
      expected: [10],
      description: "Array dengan satu elemen",
    },
    {
      input: [3, 3, 3],
      expected: [3, 3, 3],
      description: "Array dengan elemen yang sama",
    },
    {
      input: [5, -1, 4, 2, 0],
      expected: [5, 4, 2, 0, -1],
      description: "Array dengan angka positif dan negatif",
    },
    {
      input: [9, 8, 7, 6, 5],
      expected: [9, 8, 7, 6, 5],
      description: "Array yang sudah terurut menurun",
    },
    {
      input: [1, 2, 3, 4, 5],
      expected: [5, 4, 3, 2, 1],
      description: "Array yang terurut menaik",
    },
    {
      input: [1.5, 2.5, 0.5],
      expected: [2.5, 1.5, 0.5],
      description: "Array dengan angka desimal",
    },
    {
      input: [100, 200, 300, 400],
      expected: [400, 300, 200, 100],
      description: "Array dengan angka besar",
    },
    {
      input: [1, -2, 3, -4, 5],
      expected: [5, 3, 1, -2, -4],
      description: "Array dengan campuran angka positif dan negatif",
    },
  ];

  let passed = 0;
  console.log(
    `🔉 Fungsi dengan input array of number untuk mengurutkan angka dari terbesar ke terkecil`
  );
  testCases.forEach((test, index) => {
    const result = sort.descending(test.input);
    const pass = sort.arraysEqual(result, test.expected);
    if (pass) {
      console.log(`   ✅ Test case ${index + 1} passed: ${test.description}`);
      passed++;
    } else {
      console.error(`  ❌ Test case ${index + 1} failed: ${test.description}`);
      console.error(`      Input: ${JSON.stringify(test.input)}`);
      console.error(
        `      Expected: ${JSON.stringify(
          test.expected
        )}, but got: ${JSON.stringify(result)}`
      );
    }
  });

  console.log(`\n${passed} out of ${testCases.length} tests passed.`);
}
