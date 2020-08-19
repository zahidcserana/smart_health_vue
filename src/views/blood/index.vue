<template>
  <section id="docList">
    <div class="container">
      <div class="row">
        <div class="docListCont col-md-12 cl-sm-12 col-xs-12 no-padding">
          <!-- <div class="doc-profile-appoint doc-listing-appointment height-auto"> -->
          <div class="row">
            <!-- <div id="result"></div> -->
            <div id="result" v-if="bloodDonations">
              <div v-for="(item,index) in bloodDonations" :key="index"
                   class="doc-profile-appoint doc-listing-appointment" id="doc-profile-appoint71">
                <div class="main-box">
                  <div class="row">
                    <div class="col-4  p-0">
                      <div class="position-rel img-doc-appont img-doc-listing">
                        <a :href="item.user.avatar" target="_blank">
                          <img :src="item.user.avatar" alt="" title="" class="img-responsive">
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
                          <h3 style="color: darkcyan; font-size: 14px">Donation Information</h3>
                          <span>Name: {{ item.patient_name }}</span> <br>
                          <span>Mobile: {{ item.contact_no }} </span> <br>

                        </a>
                      </div>
                      <h5 class="left_texty">Required Date:<span> {{ item.required_time }} </span></h5>
                      <p class="desgn">{{ item.status }} <br> {{ item.is_self ? 'Self' : 'Reference' }}</p>
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
      <view-blood-donation :bloodDonation="bloodDonation"  @refreshData="refreshData"/>
    </modal>
  </section>
</template>

<script>
import '../../../public/dist/appointment-new.css'
import '../../../public/dist/doctors.css'

import { bloodDonationList } from '@/api/service'
import ViewBloodDonation from '@/components/ViewBloodDonation'

export default {
  name: 'BloodDonation',
  components: {
    ViewBloodDonation
  },
  props: {
    msg: String
  },
  data () {
    return {
      fetchError: null,
      bloodDonations: null,
      bloodDonation: null,
      user: null,
      param: {
        patient_id: undefined
      }
    }
  },
  created () {
    this.user = JSON.parse(localStorage.getItem('userInfo'))
    this.param.patient_id = this.user.id
    this.getBloodDonationList()
  },
  methods: {
    refreshData () {
      this.getBloodDonationList()
    },
    show (item) {
      this.bloodDonation = item
      this.$modal.show('my-first-modal')
    },
    hide () {
      this.$modal.hide('my-first-modal')
    },
    getBloodDonationList () {
      console.log(this.param)
      bloodDonationList(this.param)
        .then(response => {
          if (response.status) {
            this.fetchError = null
            this.bloodDonations = response.data
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
