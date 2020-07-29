<template>
  <section id="docList">
    <div class="container">
      <div class="row">
        <div class="docListCont col-md-12 cl-sm-12 col-xs-12 no-padding">
          <!-- <div class="doc-profile-appoint doc-listing-appointment height-auto"> -->
          <div class="row">
            <!-- <div id="result"></div> -->
            <div id="result" v-if="appointments">
              <div v-for="(item,index) in appointments" :key="index" class="doc-profile-appoint doc-listing-appointment" id="doc-profile-appoint71">
                <div class="main-box">
                  <div class="row">
                    <div class="col-4  p-0">
                      <div class="position-rel img-doc-appont img-doc-listing">
                        <a :href="item.user.avatar" target="_blank">
                          <img :src="item.user.avatar" alt="" title="" class="img-responsive" >
                        </a>
                        <p class="pic_box">
                          Smart Health Ltd.
                        </p>
                      </div>
                    </div>
                    <div class="col-4 no-padding">
                      <div
                        class="col-12 col-sm-12 col-md-12 col-lg-12 text-left no-padding"
                      >
                        <a
                          id="view_profile71"
                          href="javascript:void(0)"
                        >
                          <h3 style="color: darkcyan; font-size: 14px">Doctor Information</h3>
                          <span>Name: {{ item.doctor.user.name }}</span> <br>
                          <span>Mobile: {{ item.doctor.user.mobile }} </span> <br>
                          <span>Email: <a style="text-transform: lowercase" :href="`mailto:${item.doctor.user.email}`">{{ item.doctor.user.email }}</a> </span>

                        </a>
                      </div>
                      <h5 class="left_texty">Date:<span> {{ item.appoint_date }} </span></h5>
                      <h5 class="left_texty">Time:<span> {{ item.slot_time }} </span></h5>
                      <p class="desgn">{{ item.status }}</p>
                    </div>
                    <div
                      class="col-4 no-padding"
                      style="text-align: center;padding-top: 6%;"
                    >
                      <button
                        class="booking-btn booking-disabled71"
                        @click="show(item)"
                      >
                        Change Status
                      </button>
                      <a
                        href="javascript:void(0)"
                      >
                        <button class="booking-btn view-more-booking">
                          View Appointment
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <modal height="550px" params="zahid" name="my-first-modal">
      <serial :mySlots="slots" :doctorInfo="doctor" @refreshData="refreshData"/>
    </modal>
  </section>
</template>

<script>
import '../../../public/dist/appointment-new.css'
import '../../../public/dist/doctors.css'

import { appointmentList } from '@/api/doctor'
import Serial from '@/components/Serial'

export default {
  name: 'PatientSerial',
  props: {
    msg: String
  },
  components: {
    Serial
  },
  data () {
    return {
      fetchError: null,
      appointments: null,
      doctor: null,
      user: null,
      slots: null,
      param: {
        patient_id: undefined
      }
    }
  },
  created () {
    this.user = JSON.parse(localStorage.getItem('userInfo'))
    this.param.patient_id = this.user.id
    this.getAppointmentList()
  },
  mounted () {
    // this.show()
  },
  methods: {
    refreshData () {
      this.getAppointmentList()
    },
    show (item) {
      // this.slots = item.slots
      // this.doctor = item
      // this.$modal.show('my-first-modal')
    },
    hide () {
      this.$modal.hide('my-first-modal')
    },
    getAppointmentList () {
      console.log(this.param)
      appointmentList(this.param)
        .then(response => {
          if (response.status) {
            this.fetchError = null
            this.appointments = response.data
          } else {
            this.showError(response.status)
          }
        })
        .catch(err => {
          console.log(err)
          this.showError('Something went wrong.')
        })
    }
  },
  showError (msg) {
    this.fetchError = 'Error: ' + msg
  }
}
</script>
