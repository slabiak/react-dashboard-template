import { format, getTime, formatDistanceToNow } from 'date-fns';

type Input = Date | string | number | null | undefined;

export function fDate(date: Input, newFormat?: string) {
  const fm = newFormat || 'dd MMM yyyy';

  return date ? format(new Date(date), fm) : '';
}

export function fDateTime(date: Input, newFormat?: string) {
  const fm = newFormat || 'dd MMM yyyy p';

  return date ? format(new Date(date), fm) : '';
}

export function fTimestamp(date: Input) {
  return date ? getTime(new Date(date)) : '';
}

export function fToNow(date: Input) {
  return date
    ? formatDistanceToNow(new Date(date), {
        addSuffix: true,
      })
    : '';
}
