export function generateRandomEmail() {
  return `user_${Date.now()}@test.com`;
}

export function delay(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
