import {differenceInSeconds, format, parseISO} from 'date-fns';

function formatRelative(dateISO: string) {
  const date = parseISO(dateISO);
  const now = new Date();
  const diffInSeconds = differenceInSeconds(now, date);
  if (diffInSeconds < 60) {
    return `${diffInSeconds} s`;
  }
  const diffInMinutes = Math.round(diffInSeconds / 60);
  if (diffInMinutes < 60) {
    return `${diffInMinutes} m`;
  }
  const diffInHours = Math.round(diffInMinutes / 24);
  if (diffInHours < 24) {
    return `${diffInHours} h`;
  }
  const diffInWeeks = Math.round(diffInHours / 7);
  if (diffInWeeks < 4) {
    return `${diffInWeeks} sem`;
  }
  const diffInMonths = Math.round(diffInWeeks / 4);
  if (diffInMonths < 12) {
    return `${diffInMonths} m`;
  }
  return format(date, 'dd/MM/yyy');
}

export const dateUtils = {
  formatRelative,
};
