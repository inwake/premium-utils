export {formatDate}
export default function formatDate(date,
  separator = '.',
  order = ['month', 'day', 'year']) {
  const {validDate, validSeparator, validOrder} =
    validArgs({date, separator, order})
  const monthNumMap = [1,2,3,4,5,6,7,8,9,10,11,12]
  const monthIndex = validDate.getMonth()
  const month = monthNumMap[monthIndex]
  const day = validDate.getDate()
  const year = validDate.getFullYear()
  const components = validOrder.reduce(
    function(components, el) {
      switch (el) {
        case 'year':
          components.push(year)
          break
        case 'month':
          components.push(month)
          break
        case 'day':
          components.push(day)
          break
        default:
          break}
      return components}, [])
  return components
    .join(validSeparator)
}

function validArgs({date, separator, order}) {
  const validDate = new Date(date)
  const validSeparator = String(separator)
  if (validDate.toString() === 'Invalid Date') {
    throw new Error('Invalid Date')}
  if (!(Array.isArray(order) && order.length === 3))
    throw new Error('The order does not match the required format')
  const validOrder = order.map(function(el) {
    return String(el).toLowerCase()})
  return {validOrder,
    validSeparator,
    validDate}}
