export default function camelCase(s) {
  const delims = ['_', /[A-Z]/, ' ',
    '.', ',', ':', '-', '*', '^',
    '?', '&', '$', '%',
    '#', '@', '<', '>',
   '/', '|', '\\']

   let delimIdx = 0
   let delim
   let cS = ''
   
  delims.forEach(function(dlm, idx) {
    delim = s.charAt(s.indexOf(dlm) + 1)
    if (delim) delimIdx = idx})

  console.log('delim', delim)
  console.log('delimIdx', delimIdx)
  

  s.split(delim).reduce(function(cS, bit) {
    console.log('bit', bit)
    cS += bit.charAt(0)
      .toUpperCase()
      + bit.slice(1)
    return cS}, '')

  return cS
}