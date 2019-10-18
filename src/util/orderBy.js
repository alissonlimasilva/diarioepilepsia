import moment from 'moment';
export function orderBy(list = [], key) {
  list.sort((a, b) => {
    if (moment(a[key]).isSame(b[key])) return 0;
    if (moment(a[key]).isBefore(b[key])) return 1;
    return -1;
  });
  return list;
}
