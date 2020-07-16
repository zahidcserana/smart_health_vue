<template>
  <div>
    <!-- Breadcrumb Section Begin -->
    <section class="breadcrumb-section set-bg" data-setbg="img/breadcrumb.jpg">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 text-center">
            <div class="breadcrumb__text">
              <h2>Profile</h2>
              <div class="breadcrumb__option">
                <a href="./index.html">Home</a>
                <span>Checkout</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Breadcrumb Section End -->

    <!-- Checkout Section Begin -->
    <section class="checkout spad">
      <div class="container">
        <div class="checkout__form">
          <h4>User Details</h4>
          <div class="alert-msg" v-if="fetchError"> {{ fetchError }}</div>
          <form @submit.prevent="submitForm" class="m-login__form m-form">
            <div class="row">
              <div class="col-lg-8 col-md-6">
                <div class="row">
                  <div class="col-lg-6">
                    <div class="checkout__input">
                      <p>Name<span>*</span></p>
                      <input
                        class="form-control"
                        :class="{ 'form-group--error': $v.user.name.$error }"
                        type="text"
                        v-model.trim="$v.user.name.$model"
                        placeholder="Name"
                        autocomplete="off"
                      />
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="checkout__input">
                      <p>Email<span>*</span></p>
                      <input
                        class="form-control"
                        :class="{ 'form-group--error': $v.user.email.$error }"
                        type="text"
                        v-model.trim="$v.user.email.$model"
                        placeholder="Email"
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
                        :class="{ 'form-group--error': $v.user.mobile.$error }"
                        type="text"
                        v-model.trim="$v.user.mobile.$model"
                        placeholder="Mobile"
                        autocomplete="off"
                      />
                    </div>
                  </div>
                  <div class="col-lg-6" v-if="userSettings.userTypes">
                    <div class="checkout__input">
                      <p>User Type<span>*</span></p>
                      <select
                        v-model="$v.user.user_type.$model"
                        class="form-control"
                        :class="{ 'form-group--error': $v.user.user_type.$error }"
                      >
                        <option v-for="(value, key, index) in userSettings.userTypes" :key="value+index" :value="key">{{
                          value }}
                        </option>
                      </select>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-lg-6" v-if="cities">
                    <div class="checkout__input">
                      <p>City<span>*</span></p>
                      <select
                        @change="getAreaList(user.city_id)"
                        v-model="$v.user.city_id.$model"
                        class="form-control"
                        :class="{ 'form-group--error': $v.user.city_id.$error }"
                      >
                        <option v-for="(item,index) in cities" :key="item+index" :value="item.id">{{ item.name }}
                        </option>
                      </select>
                    </div>
                  </div>
                  <div class="col-lg-6" v-if="areas">
                    <div class="checkout__input">
                      <p>Area<span>*</span></p>
                      <select
                        v-model="$v.user.area_id.$model"
                        class="form-control"
                        :class="{ 'form-group--error': $v.user.area_id.$error }"
                      >
                        <option v-for="(item,index) in areas" :key="item+index" :value="item.id">{{ item.name }}
                        </option>
                      </select>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-lg-6" v-if="userSettings.genders">
                    <div class="checkout__input">
                      <p>Gender<span>*</span></p>
                      <select
                        v-model="$v.user.gender.$model"
                        class="form-control"
                        :class="{ 'form-group--error': $v.user.gender.$error }"
                      >
                        <option v-for="(value, key, index) in userSettings.genders" :key="value+index" :value="key">{{
                          value }}
                        </option>
                      </select>
                    </div>
                  </div>
                  <div class="col-lg-6" v-if="userSettings.bloodGroups">
                    <div class="checkout__input">
                      <p>Blood Group<span>*</span></p>
                      <select
                        v-model="$v.user.blood_group.$model"
                        class="form-control"
                        :class="{ 'form-group--error': $v.user.blood_group.$error }"
                      >
                        <option v-for="(item,index) in userSettings.bloodGroups" :key="item" :index="index"
                                :value="item">{{ item }}
                        </option>
                      </select>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-lg-12">
                    <div class="checkout__input">
                      <p>Address<span>*</span></p>
                      <input
                        class="form-control"
                        :class="{ 'form-group--error': $v.user.address.$error }"
                        type="text"
                        v-model.trim="$v.user.address.$model"
                        placeholder="Address"
                        autocomplete="off"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-6">
                <div class="checkout__order">
                  <avatar :user="user"/>
                </div>
              </div>
            </div>

            <h4 v-if="user.user_type == 'DOCTOR'">Doctor Details</h4>
            <div v-if="user.user_type == 'DOCTOR'" class="row">
              <div class="col-lg-8 col-md-6">
                <div class="row">
                  <div class="col-lg-6">
                    <div class="checkout__input">
                      <p>BMDC Reg. No<span>*</span></p>
                      <input
                        class="form-control"
                        type="text"
                        v-model="user.doctor.bmdc_reg_no"
                        placeholder="BMDC Reg. No"
                        autocomplete="off"
                      />
                    </div>
                  </div>
                  <div class="col-lg-6" v-if="userSettings.doctorSpecialties">
                    <div class="checkout__input">
                      <p>Specialty<span>*</span></p>
                      <select
                        v-model="user.doctor.specialty_id"
                        class="form-control"
                      >
                        <option v-for="(value, key, index) in userSettings.doctorSpecialties" :key="value+index"
                                :value="value">{{ key }}
                        </option>
                      </select>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-lg-6">
                    <div class="checkout__input">
                      <p>Qualification<span>*</span></p>
                      <input
                        class="form-control"
                        type="text"
                        v-model="user.doctor.qualification_details"
                        placeholder="Qualification"
                        autocomplete="off"
                      />
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="checkout__input">
                      <p>Designation<span>*</span></p>
                      <input
                        class="form-control"
                        type="text"
                        v-model="user.doctor.designation_details"
                        placeholder="Designation"
                        autocomplete="off"
                      />
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-lg-6">
                    <div class="checkout__input">
                      <p>Chamber1 Address<span>*</span></p>
                      <input
                        class="form-control"
                        type="text"
                        v-model="user.doctor.chamber1_address"
                        placeholder="Chamber1 Address"
                        autocomplete="off"
                      />
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="checkout__input">
                      <p>Chamber2 Address<span>*</span></p>
                      <input
                        class="form-control"
                        type="text"
                        v-model="user.doctor.chamber2_address"
                        placeholder="Chamber2 Address"
                        autocomplete="off"
                      />
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-lg-6">
                    <div class="checkout__input">
                      <p>Chamber1 Contact No<span>*</span></p>
                      <input
                        class="form-control"
                        type="text"
                        v-model="user.doctor.chamber1_contact_no"
                        placeholder="Chamber1 Contact No"
                        autocomplete="off"
                      />
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="checkout__input">
                      <p>Chamber2 Contact No<span>*</span></p>
                      <input
                        class="form-control"
                        type="text"
                        v-model="user.doctor.chamber2_contact_no"
                        placeholder="Chamber2 Contact No"
                        autocomplete="off"
                      />
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-lg-12">
                    <div class="checkout__input">
                      <p v-on:click="scheduleForm" title="Appointment Schedule">
                        <span style="background: cadetblue; color: aliceblue;" class="btn primary-btn">
                          <i class="fa fa-user-md"></i> <b>Doctor Schedule</b>
                        </span>
                      </p>
                      <schedules v-if="addSchedule" :user="user"/>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-6">
                <div class="checkout__order">
                  <avatar :user="user"/>
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
import { getInfo, updateUser } from '@/api/user'
import { cityList, areaList, userSettings } from '@/api/settings'
import Avatar from '@/components/Avatar'
import Schedules from '@/components/Schedules'
import userModel from '@/components/models/userModel'
import userSettingsModel from '@/components/models/userSettingsModel'

export default {
  name: 'Profile',
  components: {
    Avatar,
    Schedules
  },
  data () {
    return {
      addSchedule: false,
      loading: false,
      submitStatus: null,
      user: userModel,
      userSettings: userSettingsModel,
      fetchError: null,
      cities: null,
      areas: null
    }
  },
  validations: {
    user: {
      email: { required },
      name: { required },
      mobile: { required },
      city_id: { required },
      area_id: { required },
      address: { required },
      gender: { required },
      blood_group: { required },
      user_type: { required }
    }
  },
  mounted () {
    const recaptchaScript = document.createElement('script')
    recaptchaScript.setAttribute('src', 'js/main.js')
    document.head.appendChild(recaptchaScript)
  },
  created () {
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
          this.fetchError = null
          this.user = response.data
          if (this.user.doctor === null) { this.user.doctor = userModel.doctor }
          console.log(this.user.doctor)
          this.getAreaList(this.user.city_id)
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
          this.fetchError = null
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
        updateUser(this.user).then(response => {
          if (response.status) {
            this.fetchError = null
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
    },
    showError (msg) {
      this.fetchError = msg
    }
  }
}
</script>
