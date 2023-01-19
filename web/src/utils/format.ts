import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);

export const format = {
  dateFromNow: (date: string) => dayjs(date).fromNow(),
};
