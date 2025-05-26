const assert = require('assert');
const { add } = require('./app');

function runTest(name, fn) {
  try {
    fn();
    console.log(`✅ ${name}`);
  } catch (error) {
    console.error(`❌ ${name}`);
    console.error(error.message);
    process.exit(1); // テスト失敗時は終了コード1で終了
  }
}

runTest('add関数は正しく足し算ができるべき', () => {
  assert.strictEqual(add(1, 2), 3, '1 + 2 は 3 になるべき');
  assert.strictEqual(add(-1, 1), 0, '-1 + 1 は 0 になるべき');
});

console.log('すべてのテストが完了しました。');
