import { integer, numeric } from 'vuelidate/lib/validators'

export class Schedule {
  day = integer
  startTime = numeric
  endTime = numeric
  isOpen = true
}
