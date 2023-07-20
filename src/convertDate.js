import { parse, format } from 'date-fns';

export default function formatDate(inputDate) {
  const dateObject = parse(inputDate, 'yyyy-MM', new Date());
  const formattedDate = format(dateObject, 'MMMM yyyy');
  return formattedDate.toString();
}
