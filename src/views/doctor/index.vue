<template>
  <section id="docList">
    <div class="container">
      <div class="row">
        <div class="docListCont col-md-12 cl-sm-12 col-xs-12 no-padding">
          <!-- <div class="doc-profile-appoint doc-listing-appointment height-auto"> -->
          <div class="row">
            <input
              type="hidden"
              name="selected_date"
              id="selected_date"
              value="15072020"
            />
            <!-- <div id="result"></div> -->
            <div id="result">
              <div
                class="doc-profile-appoint doc-listing-appointment"
                id="doc-profile-appoint71"
              >
                <div class="main-box">
                  <div class="row">
                    <div class="col-4  p-0">
                      <div class="position-rel img-doc-appont img-doc-listing">
                        <a
                          href="https://www.manipalhospitals.com/oldairportroad/doctors/dr-col-r-d-holla-senior-consultant-internal-medicine"
                        >
                          <img
                            src="https://www.hospitalmanagement.net/wp-content/uploads/sites/13/2018/11/hospital.jpg"
                            alt=""
                            title=""
                            class="img-responsive"
                          />
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
                          href="https://www.manipalhospitals.com/oldairportroad/doctors/dr-col-r-d-holla-senior-consultant-internal-medicine"
                        >
                          <h3>item.user.name</h3>
                        </a>
                      </div>
                      <p class="desgn">item.speciality.title</p>
                      <h5 class="left_texty">QUALIFICATION</h5>
                      <p class="left_texty">
                        <span> item.qualification_details </span>
                      </p>
                    </div>
                    <div
                      class="col-4 no-padding"
                      style="text-align: center;padding-top: 6%;"
                    >
                      <button
                        class="booking-btn booking-disabled71"
                        @click="show"
                      >
                        Book Appointment
                      </button>
                      <a
                        href="https://www.manipalhospitals.com/oldairportroad/doctors/dr-col-r-d-holla-senior-consultant-internal-medicine"
                      >
                        <button class="booking-btn view-more-booking">
                          View profile
                        </button>
                      </a>
                    </div>
                  </div>

                  <input
                    type="hidden"
                    name="selected_date"
                    id="selected_date71"
                    value="16072020"
                  />
                  <input
                    type="hidden"
                    name="doctor_code"
                    id="doctor_code71"
                    value="MHBINTD4"
                  />
                  <input
                    type="hidden"
                    name="doctor_id"
                    id="doctor_ids"
                    value="71"
                  />
                  <input
                    type="hidden"
                    name="dept_code"
                    id="dept_code71"
                    value="MHBDINT"
                  />
                  <input
                    type="hidden"
                    name="doctor_price"
                    id="doctor_price71"
                    value=""
                  />
                  <input
                    type="hidden"
                    name="doctor_duration"
                    id="doctor_duration71"
                    value=""
                  />
                  <input
                    type="hidden"
                    name="doctor_loc_code"
                    id="doctor_loc_code71"
                    value="MHB"
                  />
                  <input
                    type="hidden"
                    name="doctor_address"
                    id="doctor_address71"
                    value="Dr. (COL) R D Holla"
                  />

                  <input
                    type="hidden"
                    name="selected_date"
                    id="selected_date"
                    value="16072020"
                  />
                  <input
                    type="hidden"
                    name="doctor_code"
                    id="doctor_code"
                    value="MHBINTD4"
                  />
                  <input
                    type="hidden"
                    name="dept_code"
                    id="dept_code"
                    value="MHBDINT"
                  />
                  <input
                    type="hidden"
                    name="doctor_price"
                    id="doctor_price"
                    value=""
                  />
                  <input
                    type="hidden"
                    name="doctor_duration"
                    id="doctor_duration"
                    value=""
                  />
                  <input
                    type="hidden"
                    name="doctor_loc_code"
                    id="doctor_loc_code"
                    value=""
                  />
                  <input
                    type="hidden"
                    name="doctor_address"
                    id="doctor_address"
                    value="Dr. (COL) R D Holla"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <modal height="550px" params="zahid" name="my-first-modal">
      <serial :zahid="zahid" />
    </modal>
  </section>
</template>

<script>
import '../../../public/dist/dstyle.css'
import '../../../public/dist/slick.css'
import '../../../public/dist/slick-theme.css'
import '../../../public/dist/magnific-popup.css'
import '../../../public/dist/style.css'
import '../../../public/dist/appointment-new.css'
import '../../../public/dist/doctors.css'

import { doctorList } from '@/api/doctor'
import Serial from '@/components/Serial'

export default {
  name: 'Doctor',
  props: {
    msg: String
  },
  components: {
    Serial
  },
  data () {
    return {
      fetchError: null,
      doctors: null,
      zahid: 'Hi Zahid'
    }
  },
  created () {
    // this.getDoctorList()
  },
  mounted () {
    // this.show()
  },
  methods: {
    show () {
      this.$modal.show('my-first-modal')
    },
    hide () {
      this.$modal.hide('my-first-modal')
    },
    getDoctorList () {
      doctorList()
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

<style>
.form-group {
  margin-bottom: 15px;
  margin-left: 5px;
  margin-right: 5px;
}

.search-wrap-banner {
  position: relative;
  top: -17%;
}

.speciality-banner-wrap {
  display: block !important;
}

@media screen and (max-width: 500px) {
  .search-wrap-banner {
    position: absolute;
    top: 55%;
  }
}
</style>
<style>
iframe#launcher {
  right: 7px !important;
  bottom: 50px !important;
  margin: 0 !important;
}
</style>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>

<style>
div.appointment-open {
  position: absolute;
  width: 100%;
  margin-top: 0;
  padding: 0 10px;
  margin-bottom: 0;
  box-shadow: 0 0 22px #02020265;
}
</style>
