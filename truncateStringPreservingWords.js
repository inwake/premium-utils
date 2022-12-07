export default function truncateStringPreservingWords(string, length) {
  const trimmedString = string.substr(0, length);
  return trimmedString.substr(0, Math.min(trimmedString.length, trimmedString.lastIndexOf(' ')));
}
