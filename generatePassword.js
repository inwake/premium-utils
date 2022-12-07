export default function generatePassword(length) {
    function dec2hex(dec) {
        return dec.toString(36).padStart(2, "0");
    }

    const array = new Uint8Array(length / 2);
    window.crypto.getRandomValues(array);
    return Array.from(array, dec2hex).join('');
}
