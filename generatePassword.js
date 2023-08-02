export default function generatePassword(l=16) {
  function int2hex(int) {
    return int
      .toString(36)
      .padStart(2, '0')}

  const array = new Uint8Array(l / 2)
  window.crypto.getRandomValues(array)
  return Array
    .from(array, int2hex)
    .join('')
}
