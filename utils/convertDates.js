import moment from 'moment'
import 'moment/locale/pt-br';

moment.locale('pt-br')

export const dateToString = (date, format = "dd/mm/yyyy") => {
  if(!date) return ''
  return moment(date).format(format)
}