import sumEvenNumbers from ".";

/**
 * Fungsi untuk menjalankan unit test pada fungsi sumEvenNumbers.
 */
export default function runTests() {
  const testCases = [
    {
      input: {
        outer: 2,
        obj: {
          inner: 2,
          otherObj: {
            superInner: 2,
            notANumber: true,
            alsoNotANumber: "yup",
          },
        },
      },
      expected: 6,
      description: "Nested objek dengan bilangan genap",
    },
    {
      input: {
        a: 2,
        b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
        c: { c: { c: 2 }, cc: "ball", ccc: 5 },
        d: 1,
        e: { e: { e: 4 }, ee: "car" },
      },
      expected: 12,
      description: "Nested objek dengan bilangan genap pada beberapa level",
    },
    {
      input: { a: 1, b: { c: 3, d: { e: 5 } } },
      expected: 0,
      description: "Nested objek tanpa bilangan genap",
    },
    {
      input: { a: 2, b: { c: 4, d: { e: 6 } } },
      expected: 12,
      description: "Nested objek dengan semua bilangan genap",
    },
    {
      input: {},
      expected: 0,
      description: "Objek kosong",
    },
    {
      input: { a: 1, b: null, c: undefined, d: [2, 4, 6] },
      expected: 12,
      description: "Objek dengan array yang tidak diproses",
    },
    {
      input: { a: 2, b: 2.5, c: "4", d: { e: 6 } },
      expected: 8,
      description: "Objek dengan bilangan desimal dan string",
    },
  ];

  let passed = 0;
  console.log(
    `🔉 Fungsi untuk mendapatkan jumlah semua bilangan genap dalam nested objek`
  );
  testCases.forEach((test, index) => {
    const result = sumEvenNumbers(test.input);
    const pass = result === test.expected;
    if (pass) {
      console.log(`   ✅ Test case ${index + 1} passed: ${test.description}`);
      passed++;
    } else {
      console.error(`  ❌ Test case ${index + 1} failed: ${test.description}`);
      console.error(`      Input: ${JSON.stringify(test.input)}`);
      console.error(`      Expected: ${test.expected}, but got: ${result}`);
    }
  });

  console.log(`\n${passed} out of ${testCases.length} tests passed.`);
}
