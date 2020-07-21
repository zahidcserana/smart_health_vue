<template>
  <div class="row">
    <div
      id="appointment-open66"
      style="display: block;"
      class="appointment-open"
    >
      <div class="col-12 col-sm-12 col-md-12 col-lg-12">
        <div class="section2 doc-listing-booking">
          <div class="select-time" id="select-time66" style="display: block;">
            <div class="display-flex">
              <p class="section2-headpara padding-top-10 text-center">
                Book an appoinment for Consultation
              </p>
              <div class="dropdown">
                <p
                  class="form-control select-dropDown"
                  id="selected_unit'+value.doctor_id+'"
                ></p>
                <p></p>
              </div>
            </div>
            <SingleDatePicker style="margin-left: 21%;" v-model="apt_date" @selectDate="getDate"/>

            <div
              class="radio-btn radio-btn-doc-listing text-center"
              id="radio-btn66"
            >
              <ul v-if="morning">
                <p class="days_style" id="days_style">Morning</p>
                <li v-for="(item,index) in morning" :key="index">
                  <input
                    type="radio"
                    v-model="requestData.time"
                  /><label :class="'schedule_'+index" @click="checkSchedule(index, item)" for="f-option1"> {{ item }} </label>
                  <div class="check"></div>
                </li>
              </ul>
              <ul v-if="afternoon">
                <p class="days_style" id="days_style">Afternoon</p>
                <li v-for="(item,index) in afternoon" :key="index">
                  <input
                    type="radio"
                    v-model="requestData.time"
                  /><label :class="'schedule_'+index" @click="checkSchedule(index, item)" for="f-option1"> {{ item }} </label>
                  <div class="check"></div>
                </li>
              </ul>
              <ul></ul>
              <ul></ul>
            </div>
            <button
              id="bookNow_date66"
              class="bookNow bookNow1 button-booking-listing step-1-booking"
              style="display: block;"
              @click="bookingDate"
              type="button"
            >
              Book Now
            </button>
          </div>
          <div
            class="thanks-appointment"
            id="thanks-appointment66"
            style="display:none;"
          >
            <div class="width-booking-form text-center">
              <img src="assets/images/check-mark.svg" alt=""/>
              <h3 class="main-center">
                You’re appointment is confirmed.
              </h3>
              <p class="main-center">
                The details will be shared via Email &amp; SMS
              </p>
              <p>
                <b>Note :</b>Temporary visitor restriction, only one attendant
                is permitted with the patient. Your cooperation is solicited.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SingleDatePicker from 'vue-single-date-picker'
import moment from 'moment'
import { requestSchedule } from '@/api/doctor'
import $ from 'jquery'

export default {
  name: 'Serial',
  components: {
    SingleDatePicker
  },
  props: {
    slots: Array
  },
  filters: {
    moment: function (time) {
      const date = new Date().toISOString().substr(0, 10)
      return moment(date.concat(' ', time)).format('h:mm a')
    }
  },
  data () {
    return {
      myDays: null,
      apt_date: null,
      morning: null,
      afternoon: null,
      schedule_index: null,
      requestData: {
        day: '',
        time: ''
      }
    }
  },
  methods: {
    checkSchedule (label, item) {
      $('.' + this.schedule_index).removeClass('check-schedule')
      $('.schedule_' + label).addClass('check-schedule')
      this.schedule_index = 'schedule_' + label
      this.requestData.time = item
    },
    getDate (date) {
      const myDate = date.year + '-' + (date.month + 1) + '-' + date.date
      var dt = moment(myDate, 'YYYY-MM-DD HH:mm:ss')
      const d = dt.format('d')

      this.myDays = this.slots.filter(row => parseInt(row.day) === parseInt(d))
      this.requestData.day = d
      this.getSlot()
    },
    makeTime (time) {
      const date = new Date().toISOString().substr(0, 10)
      return moment(date.concat(' ', time)).format('h:mm a')
    },
    getSlot () {
      const pmList = []
      const amList = []
      this.myDays.map(function (row) {
        const date = new Date().toISOString().substr(0, 10)
        const time = moment(date.concat(' ', row.start_time)).format('h:mm a')

        const timeArr = time.split(' ')
        if (timeArr[1] === 'am') {
          amList.push(time)
        } else {
          pmList.push(time)
        }
      })
      this.afternoon = pmList.length > 0 ? pmList : null
      this.morning = amList.length > 0 ? amList : null
    },
    checkValidation () {
      return true
    },
    bookingDate () {
      if (this.checkValidation()) {
        this.loading = true
        requestSchedule(this.requestData).then(response => {
          if (response.status) {
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
              text: 'Something went wrong',
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
      } else {
        console.log(this.$v)
        this.$swal({
          position: 'center',
          icon: 'error',
          title: 'Oops...',
          text: 'Please enter all required field',
          showConfirmButton: false,
          timer: 1500
        })
      }
    }
  }
}
</script>
