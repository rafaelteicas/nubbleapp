import {parseISO, format, differenceInSeconds} from 'date-fns';

function formatRelative(dateISO: string) {
  const date = parseISO(dateISO);
  const now = new Date();

  const diff = differenceInSeconds(now, date);

  if (diff < 60) {
    return `${diff} s`;
  }

  const diffInMinutes = Math.round(diff / 60);

  if (diffInMinutes < 60) {
    return `${diffInMinutes} m`;
  }

  const diffInHours = Math.floor(diffInMinutes / 60);

  if (diffInHours < 24) {
    return `${diffInHours} h`;
  }

  const diffInDays = Math.floor(diffInHours / 24);

  if (diffInDays < 30) {
    return `${diffInDays} d`;
  }

  return format(date, 'dd-MM-yyyy');
}

export const dateUtils = {
  formatRelative,
};
