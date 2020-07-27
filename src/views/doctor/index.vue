<template>
  <section id="docList">
    <div class="container">
      <div class="row">
        <search @search="dataSearch"/>
      </div>

      <div class="row">
        <div class="docListCont col-md-12 cl-sm-12 col-xs-12 no-padding">
          <!-- <div class="doc-profile-appoint doc-listing-appointment height-auto"> -->
          <div class="row">
            <!-- <div id="result"></div> -->
            <div id="result" v-if="doctors">
              <div v-for="(item,index) in doctors" :key="index" class="doc-profile-appoint doc-listing-appointment" id="doc-profile-appoint71">
                <div class="main-box">
                  <div class="row">
                    <div class="col-4  p-0">
                      <div class="position-rel img-doc-appont img-doc-listing">
                        <a :href="item.user.picture" target="_blank">
                          <img :src="item.user.picture" alt="" title="" class="img-responsive" >
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
                          <h3>{{ item.user.name }}</h3>
                        </a>
                      </div>
                      <p class="desgn">{{ item.speciality.title }}</p>
                      <h5 class="left_texty">QUALIFICATION</h5>
                      <p class="left_texty">
                        <span> {{ item.qualification_details }} </span>
                      </p>
                    </div>
                    <div
                      class="col-4 no-padding"
                      style="text-align: center;padding-top: 6%;"
                    >
                      <button
                        class="booking-btn booking-disabled71"
                        @click="show(item)"
                      >
                        Book Appointment
                      </button>
                      <a
                        href="javascript:void(0)"
                      >
                        <button class="booking-btn view-more-booking">
                          View profile
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

import { doctorList } from '@/api/doctor'
import Serial from '@/components/Serial'
import search from '@/views/doctor/search'

export default {
  name: 'Doctor',
  props: {
    msg: String
  },
  components: {
    Serial,
    search
  },
  data () {
    return {
      fetchError: null,
      doctors: null,
      doctor: null,
      slots: null
    }
  },
  created () {
    this.getDoctorList()
  },
  mounted () {
    // this.show()
  },
  methods: {
    dataSearch (data) {
      console.log(data)
      this.getDoctorList(data)
    },
    refreshData () {
      this.getDoctorList()
    },
    show (item) {
      this.slots = item.slots
      this.doctor = item
      this.$modal.show('my-first-modal')
    },
    hide () {
      this.$modal.hide('my-first-modal')
    },
    getDoctorList (q = null) {
      doctorList(q)
        .then(response => {
          if (response.status) {
            this.fetchError = null
            this.doctors = response.data
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
