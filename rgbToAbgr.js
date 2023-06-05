// - - - WORKING
const argError = new Error('Invalid arguments')
const ignore = '#'
const a = 'ff'

export default function rgbToAbgr(...args) {
  let [hex = ''] = Array.from(args).filter(Boolean)
  hex = hex.slice(ignore)
  
  if (hex.length !== 6)
    return argError

  const r = hex.slice(0, 2)
  const g = hex.slice(2, 4)
  const b = hex.slice(4)
  return a.concat(b, g, r)
}



// const argError = new Error('Invalid arguments')
// const ignore = '#'
// const a = 'ff'

// export default function rgbToAbgr(

//   { args : [...args] = Array.from(...arguments)  }
// ) {
    
//   const {
//     hex: {
//       length
//     }
//   } = str.slice(ignore)

//   if (length !== 6) return argError

//   const r = hex.slice(0, 2)
//   const g = hex.slice(2, 4)
//   const b = hex.slice(4)
//   return a.concat(b, g, r)
// }

// rgbToAbgr(false)
