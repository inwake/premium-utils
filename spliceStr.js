export default function splicedStr(s, i, val) {
  const {start, end} = s.split('')
    .reduce(function({start, end}, char, charI) {
      if (charI < i) start = start.concat(char)
      else end = end.concat(char)
      return {start, end}
    }, {start: '', end: ''})
  return start
    .concat(val)
    .concat(end)
}

if (!String.prototype.splice) {
  /**
   * {JSDoc}
   *
   * This method takes the current string, splits it in half at the given index,
   * and inserts a string (val) in between. It returns the new string
   * and does not modify the original string
   *
   * @this {String}
   * @param {number} i Index at which to split the string
   * @param {string} val The value to insert at the given index
   * @return {string} The new string with inserted value at the given index
   */
  String.prototype.splice =
    function(i, val) {
      return splicedStr(this, i, val)}
}
