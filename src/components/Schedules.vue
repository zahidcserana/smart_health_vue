<template>
  <div class="m-section" style="margin: 0px; margin-top: 20px;">
    <div class="m-section__content">
      <div class="table-responsive">
        <form class="m-login__form m-form">
          <table class="table">
          <thead>
          <tr>
            <th>Day</th>
            <th>Open?</th>
            <th>Open?</th>
            <th>Close</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>
              <select
                v-model="schedule.day"
                class="form-control"
              >
                <option v-for="(d, index) in days" :key="index" :value="d.value">{{ d.name }}</option>
              </select>
            </td>
            <td>
              <switches v-model="schedule.isOpen" theme="bulma" color="blue" type-bold="true"></switches>
            </td>
            <td>
              <select name="hourStart" class="form-control" v-model="schedule.startTime">
                <option v-for="(h) in hoursGroup" :key="h.value" :value="h.value">{{h.text}}</option>
              </select>
            </td>
            <td>
              <select name="hourEnd" class="form-control" v-model="schedule.endTime">
                <option v-for="(h) in hoursGroup" :key="h.value" :value="h.value">{{h.text}}</option>
              </select>
            </td>
          </tr>
          <tr>
            <td colspan="5" class="text-right">
              <button v-if="!edit" type="button" class="btn btn-dark"
                      v-bind:class="{ 'm-loader m-loader--light m-loader--right': loading }" v-on:click="submit()">Submit
              </button>

              <button v-if="edit" type="button" class="btn btn-dark"
                      v-bind:class="{ 'm-loader m-loader--light m-loader--right': loading }" v-on:click="update()">Update
              </button>
            </td>
          </tr>
          </tbody>
        </table>
        </form>
      </div>
    </div>
    <div class="shoping__cart__table">
      <table class="table table-responsive">
        <thead>
        <tr>
          <th width="30%" class="shoping__product">Day</th>
          <th width="30%">Start Time</th>
          <th width="30%">End Time</th>
          <th width="30%">Status</th>
          <th width="30%"></th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(item,index) in schedules" :key="index">
          <td class="shoping__cart__price">
            <h5>{{ item.day | dayName }}</h5>
          </td>
          <td class="shoping__cart__price">
            {{item.start_time}}
          </td>
          <td class="shoping__cart__price">
            {{item.end_time}}
          </td>
          <td class="shoping__cart__price">
            {{ item.status ? 'Active' : 'Inactive' }}
          </td>
          <td>
            <a v-on:click="view(item)" class="btn btn-info"><i class="fa fa-pencil-square-o"></i></a>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { Schedule } from './models/DoctorScheduleModel'
import Switches from 'vue-switches'
import { saveSchedule, scheduleList, updateSchedule } from '../api/doctor'
import $ from 'jquery'
import { weekdays, HoursGroup } from '../assets/utils/common'

export default {
  name: 'schedules',
  props: {
    user: {
      type: Object
    }
  },
  data () {
    return {
      schedules: null,
      enabled: false,
      edit: false,
      loading: false,
      days: weekdays,
      hoursGroup: HoursGroup,
      schedule: new Schedule(),
      editId: undefined,
      doctorTime: {
        id: undefined,
        doctor_id: undefined,
        day: String,
        start_time: String,
        end_time: String,
        status: Boolean
      }
    }
  },
  mounted () {
    $(document).ready(function () {
    })
  },
  computed: {},
  created () {
    this.getScheduleList()
  },
  methods: {
    view (item) {
      this.edit = true
      console.log(item)
      this.editId = item.id
      this.schedule.day = item.day
      this.schedule.startTime = item.start_time
      this.schedule.endTime = item.end_time
      this.schedule.isOpen = item.status
    },
    update () {
      const formData = this.schedule.valueOf()
      this.doctorTime.id = this.editId
      this.doctorTime.status = formData.isOpen
      this.doctorTime.day = formData.day
      this.doctorTime.start_time = formData.startTime
      this.doctorTime.end_time = formData.endTime
      updateSchedule(this.doctorTime).then(res => {
        if (res.status) {
          this.schedules = []
          this.schedules = res.data
        }
      }).catch(err => {
        console.log(err)
        this.$swal({
          position: 'center',
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong',
          showConfirmButton: false,
          timer: 1500
        })
      })
    },
    getScheduleList () {
      scheduleList(this.user.id).then(res => {
        if (res.status) {
          this.schedules = res.data
        } else {
          this.$swal({
            position: 'center',
            icon: 'error',
            title: 'Oops...',
            text: res.message,
            showConfirmButton: false,
            timer: 1500
          })
        }
      })
    },
    submit () {
      console.log(this.schedule.valueOf())
      const formData = this.schedule.valueOf()
      this.doctorTime.doctor_id = this.user.doctor.id
      this.doctorTime.status = formData.isOpen
      this.doctorTime.day = formData.day
      this.doctorTime.start_time = formData.startTime
      this.doctorTime.end_time = formData.endTime
      console.log(this.doctorTime)
      saveSchedule(this.doctorTime).then(response => {
        if (response.status) {
          this.fetchError = null
          this.schedules = response.data

          this.$swal({
            position: 'center',
            icon: 'success',
            title: response.message,
            showConfirmButton: false,
            timer: 1500
          })
          localStorage.setItem('userInfo', JSON.stringify(response.data))
        } else {
          this.$swal({
            position: 'center',
            icon: 'error',
            title: 'Oops...',
            text: response.message,
            showConfirmButton: false,
            timer: 1500
          })
        }
      }).catch(err => {
        console.log(err)
        this.$swal({
          position: 'center',
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong',
          showConfirmButton: false,
          timer: 1500
        })
      })
    }
  },
  components: {
    Switches
  },
  filters: {
    dayName (day) {
      return weekdays.find(f => f.value === day).name
    }
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
