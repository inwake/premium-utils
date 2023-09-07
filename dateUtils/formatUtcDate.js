export {formatUtcDate}
export default function formatUtcDate(date, separator = '.', order=['month', 'day', 'year']) {
  const month = date.getUTCMonth() + 1;
  const day = date.getUTCDate();
  const year = date.getUTCFullYear();

  const slicedOrder = order.slice(0, 3);
  const dateString = order.reduce((string, component, i) => {
    const last = i === slicedOrder.length - 1;
    switch (component) {
      case 'year':
        string += year;
        if (!last) string += separator;
        return string;
      case 'month':
        string += month;
        if (!last) string += separator;
        return string;
      case 'day':
        string += day;
        if (!last) string += separator;
        return string;
      default:
        return string;}
  }, '');

  return dateString;
}
