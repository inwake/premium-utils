/**
* Returns the current part of the day
* based on the current time. Accepts
* an optional object to override the
* the possible display names returned
*
* @param {Object} [displayNameMap={
*   a:'night',
*   b:'morning',
*   c:'afternoon',
*   d:'evening'
* }] - An object that maps each fourth
*   of the day (a, b, c, d) to the
*   corresponding display name
* @returns {string} The display name
*   for the current day segment.
*/

export default function currentDaySegment(
  {a='night',
    b='morning',
    c='afternoon',
    d='evening'}
  ={segmentMap: {}}) {
  const now = new Date()
  const hour = Number(now.getHours())
  let segment = ''
  switch (true) {
  case hour < 6 || hour >= 22:
    segment = a
    break
  case hour < 12:
    segment = b
    break
  case hour < 19:
    segment = c
    break
  case hour < 22:
    segment = d
    break
  default:
    segment = 'day'}
  return segment
}
