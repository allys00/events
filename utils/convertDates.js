import moment from 'moment'
import 'moment/locale/pt-br';

moment.locale('pt-br')

export const dateToString = (date = new Date(), format = "dd/mm/yyyy") => {
  return moment(date).format(format)
}