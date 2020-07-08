<template>
  <div class="m-section" style="margin: 0px; margin-top: 20px;">
    <div class="m-section__content">
      <div class="table-responsive">
        <table class="table">
          <thead>
          <tr>
            <th></th>
            <th>Open?</th>
            <th>Open?</th>
            <th>Open?</th>
            <th>Close</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="(w,index) in scheduleDays" :key="index" :value="w">
            <td class="text-left" @click="isOpen()"> {{ w.weekName }}</td>
            <td>
              <switches v-model="enabled" theme="bulma" color="blue" type-bold="true"></switches>
            </td>
            <td>
              <input class="is-open" v-bind:id="'open-'+w.day" data-switch="true" data-size="small" type="checkbox"
                     name="isOpen"
                     :checked="w.isOpen ? 'checked' : null" :data-on-text="'Yes'" :data-off-text="'No'"
                     :data-on-color="'success'" :data-off-color="'danger'">
            </td>
            <td>
              <select v-if="w.isOpen" name="hourStart" class="form-control"
                      v-model="w.startTime">
                <option v-for="(h) in hoursGroup" :key="h.value" :value="h.value">{{h.text}}</option>
              </select>
            </td>
            <td>
              <select v-if="w.isOpen" name="hourEnd" class="form-control"
                      v-model="w.endTime">
                <option v-for="(h) in hoursGroup" :key="h.value" :value="h.value">{{h.text}}</option>
              </select>
            </td>
          </tr>
          <tr>
            <td colspan="5" class="text-right">
              <button type="button" class="btn btn-dark"
                      v-bind:class="{ 'm-loader m-loader--light m-loader--right': loading }"
                      v-on:click="submit()">Submit
              </button>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import DoctorScheduleModel, { WeekDays } from './models/DoctorScheduleModel'
import Switches from 'vue-switches'
import $ from 'jquery'

export default {
  name: 'doctor-schedule',
  data () {
    return {
      enabled: false,
      loading: false,
      doctorSchedule: DoctorScheduleModel,
      days: [
        { value: 1, name: 'Monday' },
        { value: 2, name: 'Tuesday' },
        { value: 3, name: 'Wednesday' },
        { value: 4, name: 'Thursday' },
        { value: 5, name: 'Friday' },
        { value: 6, name: 'Saturday' },
        { value: 7, name: 'Sunday' }
      ],
      scheduleDays: new WeekDays(),
      // weekDays: {
      //   day: '',
      //   startTime: '',
      //   endTime: '',
      //   is_open: true,
      //   always_open: true,
      //   weekName: ''
      // },
      hoursGroup: [
        {
          value: '01:00',
          text: '01:00 am'
        },
        {
          value: '01:30',
          text: '01:30 am'
        },
        {
          value: '02:00',
          text: '02:00 am'
        },
        {
          value: '02:30',
          text: '02:30 am'
        },
        {
          value: '03:00',
          text: '03:00 am'
        },
        {
          value: '03:30',
          text: '03:30 am'
        },
        {
          value: '04:00',
          text: '04:00 am'
        },
        {
          value: '04:30',
          text: '04:30 am'
        },
        {
          value: '05:00',
          text: '05:00 am'
        },
        {
          value: '05:30',
          text: '05:30 am'
        },
        {
          value: '06:00',
          text: '06:00 am'
        },
        {
          value: '06:30',
          text: '06:30 am'
        },
        {
          value: '07:00',
          text: '07:00 am'
        },
        {
          value: '07:30',
          text: '07:30 am'
        },
        {
          value: '08:00',
          text: '08:00 am'
        },
        {
          value: '08:30',
          text: '08:30 am'
        },
        {
          value: '09:00',
          text: '09:00 am'
        },
        {
          value: '09:30',
          text: '09:30 am'
        },
        {
          value: '10:00',
          text: '10:00 am'
        },
        {
          value: '10:30',
          text: '10:30 am'
        },
        {
          value: '11:00',
          text: '11:00 am'
        },
        {
          value: '11:30',
          text: '11:30 am'
        },
        {
          value: '12:00',
          text: '12:00 pm'
        },
        {
          value: '12:30',
          text: '12:30 pm'
        },
        {
          value: '13:00',
          text: '01:00 pm'
        },
        {
          value: '13:30',
          text: '01:30 pm'
        },
        {
          value: '14:00',
          text: '02:00 pm'
        },
        {
          value: '14:30',
          text: '02:30 pm'
        },
        {
          value: '15:00',
          text: '03:00 pm'
        },
        {
          value: '15:30',
          text: '03:30 pm'
        },
        {
          value: '16:00',
          text: '04:00 pm'
        },
        {
          value: '16:30',
          text: '04:30 pm'
        },
        {
          value: '17:00',
          text: '05:00 pm'
        },
        {
          value: '17:30',
          text: '05:30 pm'
        },
        {
          value: '18:00',
          text: '06:00 pm'
        },
        {
          value: '18:30',
          text: '06:30 pm'
        },
        {
          value: '19:00',
          text: '07:00 pm'
        },
        {
          value: '19:30',
          text: '07:30 pm'
        },
        {
          value: '20:00',
          text: '08:00 pm'
        },
        {
          value: '20:30',
          text: '08:30 pm'
        },
        {
          value: '21:00',
          text: '09:00 pm'
        },
        {
          value: '21:30',
          text: '09:30 pm'
        },
        {
          value: '22:00',
          text: '10:00 pm'
        },
        {
          value: '22:30',
          text: '10:30 pm'
        },
        {
          value: '23:00',
          text: '11:00 pm'
        },
        {
          value: '23:30',
          text: '11:30 pm'
        },
        {
          value: '00:00',
          text: '12:00 am'
        },
        {
          value: '00:30',
          text: '12:30 am'
        }
      ]
    }
  },
  computed: {},
  created () {
    this.formatWeekDays()
  },
  methods: {
    submit () {
      console.log(this.scheduleDays)
    },
    isOpen () {
      for (const d of this.days) {
        console.log('#open-' + d.value)
        console.log($('#open-' + d.value).val())
      }
    },
    formatWeekDays (list = null) {
      let newList = []
      // let newList = new WeekDays()
      if (list && list.length > 0) {
        newList = list.map(m => {
          m.weekName = this.days.find(f => f.value === m.day).name
          m.startTime = m.startTime ? m.startTime : '08:00'
          m.endTime = m.endTime ? m.endTime : '17:00'
          return m
        })
      } else {
        console.log('-- days --')
        for (const d of this.days) {
          // const week = {}
          const week = new WeekDays()
          week.startTime = '08:00'
          week.endTime = '17:00'
          week.day = d.value
          week.weekName = d.name
          newList.push(week)

          /* const week = new WeekDays({
            startTime: '08:00',
            endTime: '17:00',
            day: d.value,
            weekName: d.name
          })
          newList.push(week) */
        }
      }
      this.scheduleDays = newList

      // return newList
    }
  },
  components: {
    Switches
  }
}
</script>

<style>
  .is-open {
    width: 46px;
    background-color: #34bfa3;
    border-color: #34bfa3;
    color: #fff;
  }
</style>
