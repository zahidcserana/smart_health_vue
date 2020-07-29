<template>
  <div>
    <!-- Checkout Section Begin -->
    <section class="checkout spad">
      <div class="container">
        <div class="checkout__form">
          <h4>Blood Donation</h4>
          <form @submit.prevent="submitForm" class="m-login__form m-form">
            <div class="row">
              <div class="col-lg-8 col-md-6">
                <div class="row">
                  <div class="col-lg-6">
                    <div class="checkout__input">
                      <p>Patient Name<span>*</span></p>
                      <input
                        class="form-control"
                        :class="{ 'form-group--error': $v.donation.patient_name.$error }"
                        type="text"
                        v-model.trim="$v.donation.patient_name.$model"
                        placeholder="Patient Name"
                        autocomplete="off"
                      />
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="checkout__input">
                      <p>Patient Age<span>*</span></p>
                      <input
                        class="form-control"
                        :class="{ 'form-group--error': $v.donation.patient_age.$error }"
                        type="text"
                        v-model.trim="$v.donation.patient_age.$model"
                        placeholder="Patient Age"
                        autocomplete="off"
                      />
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-lg-6">
                    <div class="checkout__input">
                      <p>Mobile<span>*</span></p>
                      <input
                        class="form-control"
                        :class="{ 'form-group--error': $v.donation.contact_no.$error }"
                        type="text"
                        v-model.trim="$v.donation.contact_no.$model"
                        placeholder="Mobile"
                        autocomplete="off"
                      />
                    </div>
                  </div>
                  <div class="col-lg-3" v-if="userSettings.bloodGroups">
                    <div class="checkout__input">
                      <p>Blood Group<span>*</span></p>
                      <select
                        v-model="$v.donation.blood_group.$model"
                        class="form-control"
                        :class="{ 'form-group--error': $v.donation.blood_group.$error }"
                      >
                        <option v-for="(item,index) in userSettings.bloodGroups" :key="item" :index="index"
                                :value="item">{{ item }}
                        </option>
                      </select>
                    </div>
                  </div>
                  <div class="col-lg-3" v-if="userSettings.genders">
                    <div class="checkout__input">
                      <p>Gender<span>*</span></p>
                      <select
                        v-model="$v.donation.patient_gender.$model"
                        class="form-control"
                        :class="{ 'form-group--error': $v.donation.patient_gender.$error }"
                      >
                        <option v-for="(value, key, index) in userSettings.genders" :key="value+index" :value="key">{{
                            value
                          }}
                        </option>
                      </select>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-lg-6">
                    <div class="checkout__input">
                      <p>Required Time<span>*</span></p>
                      <input
                        class="form-control"
                        :class="{ 'form-group--error': $v.donation.required_time.$error }"
                        type="date"
                        v-model.trim="$v.donation.required_time.$model"
                        placeholder="Mobile"
                        autocomplete="off"
                      />
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="checkout__input">
                      <p>Request Type<span>*</span></p>
                      <select
                        v-model="$v.donation.req_type.$model"
                        class="form-control"
                        :class="{ 'form-group--error': $v.donation.req_type.$error }"
                      >
                        <option v-for="(item,index) in reqTypes" :key="index" :value="item">{{ item }}</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-lg-12">
                    <div class="checkout__input">
                      <p>Problem Description<span>*</span></p>
                      <input
                        class="form-control"
                        type="text"
                        v-model.trim="$v.donation.problem_description.$model"
                        placeholder="Problem Description"
                        autocomplete="off"
                      />
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-lg-12">
                    <div class="checkout__input">
                      <p>Address for Donation<span>*</span></p>
                      <input
                        class="form-control"
                        type="text"
                        v-model.trim="$v.donation.address_for_donation.$model"
                        placeholder="Address for Donation"
                        autocomplete="off"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button type="submit" class="site-btn">SAVE</button>
          </form>
        </div>
      </div>
    </section>
    <!-- Checkout Section End -->
  </div>
</template>
<script>
import { required } from 'vuelidate/lib/validators'
import { getInfo } from '@/api/user'
import { cityList, areaList, userSettings } from '@/api/settings'
import userModel from '@/components/models/userModel'
import userSettingsModel from '@/components/models/userSettingsModel'
import { BloodDonation, reqTypes } from '@/components/models/DonationModel'
import { bloodDonation } from '@/api/service'

export default {
  name: 'Profile',
  components: {},
  data () {
    return {
      addSchedule: false,
      loading: false,
      submitStatus: null,
      donation: BloodDonation,
      userSettings: userSettingsModel,
      reqTypes: reqTypes,
      cities: null,
      areas: null
    }
  },
  validations: {
    donation: {
      req_type: { required },
      blood_group: { required },
      patient_name: { required },
      patient_gender: { required },
      patient_age: { required },
      contact_no: { required },
      address_for_donation: { required },
      problem_description: { required },
      required_time: { required }
    }
  },
  mounted () {
    const recaptchaScript = document.createElement('script')
    recaptchaScript.setAttribute('src', 'js/main.js')
    document.head.appendChild(recaptchaScript)
  },
  created () {
    console.log(this.donation)
    this.getUserSettings()
    this.checkCookie()
    this.getUserInfo()
    this.getCityList()
  },
  methods: {
    scheduleForm () {
      this.addSchedule = !this.addSchedule
    },
    checkCookie () {
      if (!localStorage.getItem('token')) {
        this.$router.push('/login')
      }
    },
    getUserInfo () {
      getInfo().then(response => {
        if (response.status) {
          this.user = response.data
          if (this.donation.doctor === null) {
            this.donation.doctor = userModel.doctor
          }
          console.log(this.donation.doctor)
          this.getAreaList(this.donation.blood_group)
        } else {
          this.showError('Something went wrong.')
        }
      }).catch(err => {
        console.log(err)
        this.showError('Something went wrong.')
      })
    },
    getUserSettings () {
      userSettings().then(response => {
        if (response.status) {
          this.userSettings = response.data
        } else {
          this.showError('Something went wrong.')
        }
      }).catch(err => {
        console.log(err)
        this.showError('Something went wrong.')
      })
    },
    getCityList () {
      cityList().then(response => {
        if (response.status) {
          this.cities = response.data
        }
      })
    },
    getAreaList (cityId) {
      areaList(cityId).then(response => {
        if (response.status) {
          this.areas = response.data
        }
      })
    },
    submitForm () {
      this.$v.$touch()
      if (!this.$v.$invalid) {
        this.loading = true
        bloodDonation(this.donation).then(response => {
          if (response.status) {
            this.user = response.data
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
