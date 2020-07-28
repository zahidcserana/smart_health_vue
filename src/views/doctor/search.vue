<template>
  <div class="search col-md-12 cl-sm-12 col-xs-12 no-padding">
    <form class="form-inline" @submit.prevent="submitForm" style="padding-left: 14%;">
      <div class="form-group mb-2" v-if="userSettings.doctorSpecialties">
        <div class="checkout__input">
          <select
            v-model="formData.specialty_id"
            class="form-control"
          >
            <option value="0">-Speciality-</option>
            <option v-for="(item, index) in userSettings.doctorSpecialties" :key="item.id+index"
                    :value="item.id">{{ item.title }}
            </option>
          </select>
        </div>
      </div>
      <div class="form-group mx-sm-3 mb-2">
        <div class="checkout__input" v-if="doctors">
          <select
            v-model="formData.doctor_id"
            class="form-control"
          >
            <option value="0">-Doctor-</option>
            <option v-for="(item, index) in doctors" :key="index"
                    :value="item.doctor_id">{{ item.name }}
            </option>
          </select>
        </div>
      </div>
      <div class="checkout__input">
        <button type="submit" class="btn search-btn mb-2">Search</button> &nbsp;
        <a @click="reset" type="submit" class="btn reset-btn mb-2">Reset</a>
      </div>
    </form>
  </div>
</template>
<script>

import { userSettings } from '@/api/settings'
import { doctors } from '@/api/doctor'
import userSettingsModel from '@/components/models/userSettingsModel'

export default {
  name: 'DoctorSearch',
  props: {
    msg: String
  },
  data () {
    return {
      userSettings: userSettingsModel,
      doctors: null,
      formData: {
        doctor_id: '',
        specialty_id: ''
      }
    }
  },
  created () {
    this.getUserSettings()
    this.getDoctors()
    this.initialilze()
  },
  methods: {
    initialilze () {
      this.formData.doctor_id = 0
      this.formData.specialty_id = 0
    },
    reset () {
      this.initialilze()
      this.submitForm()
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
    getDoctors () {
      doctors().then(response => {
        if (response.status) {
          this.doctors = response.data
        } else {
          this.showError('Something went wrong.')
        }
      }).catch(err => {
        console.log(err)
        this.showError('Something went wrong.')
      })
    },
    submitForm () {
      this.$emit('search', this.formData)
    }
  }
}
</script>
