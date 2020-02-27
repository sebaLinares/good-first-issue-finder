import { format } from 'date-fns';

export default class {
  formatDateToApi(date) {
    return format(date, 'yyyy-MM-dd');
  }
}
