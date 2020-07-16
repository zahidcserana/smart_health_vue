<template>
  <div class="m-section" style="margin: 0px; margin-top: 20px;">
    <div class="m-section__content">
      <div class="table-responsive">
        <form class="m-login__form m-form" id="schedule_form">
          <table class="table table-bordered">
            <thead>
            <tr>
              <th>Day</th>
              <th>Is Open?</th>
              <th>Open Time</th>
              <th>Close Start</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>
                <select
                  v-model="schedule.day"
                  class="form-control"
                >
                  <option value="">--Select One--</option>
                  <option v-for="(d, index) in days" :key="index" :value="d.value">{{ d.name }}</option>
                </select>
              </td>
              <td>
                <switches style="text-align: center" v-model="schedule.isOpen" theme="bulma" color="blue" type-bold="true"></switches>
              </td>
              <td>
                <select name="hourStart" class="form-control" v-model="schedule.startTime">
                  <option value="">--Select One--</option>
                  <option v-for="(h) in hoursGroup" :key="h.value" :value="h.value">{{h.text}}</option>
                </select>
              </td>
              <td>
                <select name="hourEnd" class="form-control" v-model="schedule.endTime">
                  <option value="">--Select One--</option>
                  <option v-for="(h) in hoursGroup" :key="h.value" :value="h.value">{{h.text}}</option>
                </select>
              </td>
            </tr>
            <tr>
              <td colspan="5" class="text-right">
                <button v-if="!edit" type="button" class="btn btn-dark"
                        v-bind:class="{ 'm-loader m-loader--light m-loader--right': loading }" v-on:click="submit()">
                  Submit
                </button>

                <button v-if="edit" type="button" class="btn btn-dark"
                        v-bind:class="{ 'm-loader m-loader--light m-loader--right': loading }" v-on:click="update()">
                  Update
                </button>
              </td>
            </tr>
            </tbody>
          </table>
        </form>
      </div>
    </div>
    <div class="shoping__cart__table">
      <table class="table table-responsive table-bordered">
        <thead>
        <tr>
          <th width="30%">Day</th>
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
            <h5>{{item.start_time}}</h5>
          </td>
          <td class="shoping__cart__price">
            <h5>{{item.end_time}}</h5>
          </td>
          <td class="shoping__cart__price">
            <span class="btn" :class="item.status | statusFilter">{{ item.status ? 'Active' : 'Inactive' }}</span>
          </td>
          <td>
            <a v-on:click="view(item)" class="btn btn-info"><i class="fa fa-pencil-square-o"></i></a>
          </td>
        </tr>
        </tbody>
      </table>
      <p v-on:click="getDoctorSlot" title="Appointment Schedule">
          <span style="background: tan; color: aliceblue;" class="btn primary-btn">
            <i class="fa fa-user-md"></i> <b>View Slot</b>
          </span>
      </p>
    </div>

    <div class="shoping__cart__table" v-if="viewSlot">
      <table v-if="slots" class="table table-bordered">
        <thead>
        <tr>
          <th>Day</th>
          <th>Appointment Time</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(item,key) in slots" :key="key">
          <td class="shoping__cart__price" style="padding-top: 4%;">
            <span class="btn btn-info">{{ key }}</span>
          </td>
          <td class="shoping__cart__price">
            <table>
              <tr v-for="(row,i) in item" :key="i">
                <td>
                  <span style="background: cadetblue; color: aliceblue;" class="btn primary-btn">
                    <i class="fa fa-clock-o"></i> {{ row.start_time | moment }}
                  </span>
                </td>
              </tr>
            </table>
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
import { saveSchedule, scheduleList, updateSchedule, doctorSlot } from '../api/doctor'
import { weekdays, HoursGroup } from '../assets/utils/common'
import moment from 'moment'

export default {
  name: 'schedules',
  props: {
    user: {
      type: Object
    }
  },
  data () {
    return {
      viewSlot: false,
      schedules: null,
      slots: null,
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
    this.reset()
  },
  computed: {},
  created () {
    this.getScheduleList()
  },
  methods: {
    getDoctorSlot () {
      this.viewSlot = !this.viewSlot
      if (this.viewSlot) {
        doctorSlot(this.user.id).then(res => {
          if (res.status) {
            this.slots = res.data
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
      }
    },
    reset () {
      this.schedule.day = ''
      this.schedule.startTime = ''
      this.schedule.endTime = ''
    },
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
          this.$swal({
            position: 'center',
            icon: 'success',
            title: res.message,
            showConfirmButton: false,
            timer: 1500
          })
          this.reset()
          this.edit = false
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
          this.reset()
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
    moment: function (time) {
      const date = new Date().toISOString().substr(0, 10)
      return moment(date.concat(' ', time)).format('h:mm a')
    },
    statusFilter (status) {
      const statusMap = {
        1: 'btn-success',
        0: 'btn-danger'
      }
      return statusMap[status]
    },
    dayName (day) {
      return weekdays.find(f => f.value === day).name
    }
  }
}
</script>

<style>
  .shoping__cart__table table tbody tr td {
    padding-top: 2px;
    padding-bottom: 2px;
    border-bottom: 1px solid #ebebeb;
  }
</style>
