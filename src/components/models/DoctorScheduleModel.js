import { integer, numeric } from 'vuelidate/lib/validators'

export class WeekDays {
  day = integer
  startTime = numeric
  endTime = numeric
  isOpen = true
  weekName = numeric
}

export class Schedule {
  day = integer
  startTime = numeric
  endTime = numeric
  isOpen = true
}
