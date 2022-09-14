export default function percentage(value, total) {
    return Number(total) === 0 ? 0 : Math.round( (value / total) * 100 );
}