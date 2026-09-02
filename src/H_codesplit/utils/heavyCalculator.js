
export function calculatePrimes(max = 50000) {
  console.log(`[heavyCalculator] ${max}까지의 소수 계산 시작...`);

  const primes = [];

  for (let i = 2; i <= max; i++) {
    let isPrime = true;

    for (let j = 2; j * j <= i; j++) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }

    if (isPrime) {
      primes.push(i);
    }
  }

  console.log(`[heavyCalculator] 계산 완료! 총 ${primes.length}개의 소수 발견`);

  return primes;
}


export function getFibonacciSequence(count = 20) {
  const seq = [0, 1];

  for (let i = 2; i < count; i++) {
    seq.push(seq[i - 1] + seq[i - 2]);
  }

  return seq;
}
