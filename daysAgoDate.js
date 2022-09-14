export default function daysAgoDate(daysAgo) {
    const today = new Date();
    return new Date(new Date().setDate(today.getDate() - daysAgo));
}