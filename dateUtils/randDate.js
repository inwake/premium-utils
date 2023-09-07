export {randDate}
export default function randDate(
    range=daysFromNowDateRange(7)) {
  const [start, end] = range
  const startMs = start.getTime()
  const endMs = end.getTime()

  const diff = (endMs - startMs)
  const randDiff = Math.floor(
    Math.random() * diff)

  const randInRange = startMs + randDiff
  const randDateInRange = new Date(randInRange)
  return randDateInRange}

function daysFromNowDateRange(daysFromNow=7) {
  const now = new Date()
  const nowDate = now.getDate()
  const then = new Date(now)
  then.setDate(nowDate + daysFromNow)
  return [now, then]}
