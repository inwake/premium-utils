export default function formatMoneyCondensed(cents) {
  if (cents % 100 === 0) return `$${cents / 100}`;
  else return `$${(cents / 100).toFixed(2)}`;
}
