export default function daysAfterDate(date) {
	const today = new Date()
	const pastDate = new Date(date)
	const diffTime = Math.abs(today - pastDate)
	return Math.ceil(diffTime / (1000 * 60 * 60 * 24))
}