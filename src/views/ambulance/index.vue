<template>
  <section id="docList">
    <div class="container">
      <div class="row">
        <div class="docListCont col-md-12 cl-sm-12 col-xs-12 no-padding">
          <!-- <div class="doc-profile-appoint doc-listing-appointment height-auto"> -->
          <div class="row">
            <!-- <div id="result"></div> -->
            <div id="result" v-if="ambulances">
              <div v-for="(item,index) in ambulances" :key="index"
                   class="doc-profile-appoint doc-listing-appointment" id="doc-profile-appoint71">
                <div class="main-box">
                  <div class="row">
                    <div class="col-4  p-0">
                      <div class="position-rel img-doc-appont img-doc-listing">
                        <a :href="item.vendor_image" target="_blank">
                          <img :src="item.vendor_image" alt="" title="" class="img-responsive">
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
                          <h3 style="color: darkcyan; font-size: 14px">Ambulance Information</h3>
                          Vendor Name: <span>{{ item.vendor_name }}</span> <br>
                          Mobile: <span> {{ item.contact }} </span> <br>
                        </a>
                      </div>
                      <h5 class="left_texty">Rent Rate:<span> {{ item.rent_rate }} </span></h5>
                      <p class="desgn">{{ item.status = 'ACTIVE' ? 'Available' : 'N/A' }}</p>
                    </div>
                    <div
                      class="col-4 no-padding"
                      style="text-align: center;padding-top: 6%;"
                    >
                      <button
                        class="booking-btn booking-disabled71"
                        @click="show(item)"
                      >
                        View Details
                      </button>
                      <a
                        href="javascript:void(0)"
                      >
                        <button class="booking-btn view-more-booking">
                          Change Status
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
      <view-ambulance :ambulance="ambulance" @refreshData="refreshData"/>
    </modal>
  </section>
</template>

<script>
import '../../../public/dist/appointment-new.css'
import '../../../public/dist/doctors.css'

import { ambulanceList } from '@/api/service'
import ViewAmbulance from '@/components/ViewAmbulance'

export default {
  name: 'Ambulance',
  components: {
    ViewAmbulance
  },
  props: {
    msg: String
  },
  data () {
    return {
      fetchError: null,
      ambulances: null,
      ambulance: null,
      user: null
    }
  },
  created () {
    this.user = JSON.parse(localStorage.getItem('userInfo'))
    this.getAmbulanceList()
  },
  methods: {
    refreshData () {
      this.getAmbulanceList()
    },
    show (item) {
      this.ambulance = item
      this.$modal.show('my-first-modal')
    },
    hide () {
      this.$modal.hide('my-first-modal')
    },
    getAmbulanceList () {
      ambulanceList()
        .then(response => {
          if (response.status) {
            this.fetchError = null
            this.ambulances = response.data
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
