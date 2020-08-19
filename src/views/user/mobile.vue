<template>
  <div class="login-page">
    <div class="form">
      <div class="alert-msg" v-if="fetchError">{{ fetchError }}</div>
      <p>Please enter your register mobile number</p>
      <form @submit.prevent="submitForm" class="m-login__form m-form">
        <input
          class="form-control m-input m-login__form-input--last"
          :class="{ 'form-group--error': $v.login.mobile.$error }"
          type="text"
          v-model.trim="$v.login.mobile.$model"
          placeholder="Mobile"
          name="mobile"
        />
        <Stretch v-if="loading" />
        <button v-if="!loading">Submit</button>
        <p class="message">
          Not registered?
          <router-link to="/register">Create an account</router-link>
        </p>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { env } from '@/utils/auth'
// import { getInfo } from '@/api/user'
import { required } from 'vuelidate/lib/validators'
// import buttonLoader from '@/components/-ButtonLoader.vue'
import '../../../public/css/auth.css'
import { Stretch } from 'vue-loading-spinner'

export default {
  name: 'login-form',
  data () {
    return {
      loading: false,
      submitStatus: null,
      login: {
        mobile: ''
      },
      fetchError: null
    }
  },
  validations: {
    login: {
      mobile: {
        required
      }
    }
  },
  created () {
    this.checkCookie()
  },
  methods: {
    checkCookie () {
      if (localStorage.getItem('token')) {
        this.$router.push('/')
      }
    },
    submitForm () {
      console.log('submitForm')
      this.$v.$touch()
      if (!this.$v.$invalid) {
        this.loading = true

        setTimeout(() => {
          axios
            .post(env.api_url + 'auth/login/mobile', this.login)
            .then(response => {
              const result = response.data
              if (result.status) {
                this.fetchError = null
                localStorage.setItem('token', result.data.token)
                localStorage.setItem(
                  'login_mobile',
                  JSON.stringify(result.data.login_mobile)
                )
                // this.$router.push('/user/mobile/otp')
                // location.reload()
                this.loading = false
                this.$router.push('mobile/otp')
              } else {
                this.loading = false
                this.showError(response.data.message)
              }
            })
            .catch(error => {
              this.loading = false
              console.log(error)
              this.showError('Error : Something went wrong!')
            })
        }, 500)
      } else {
        this.showError('Error : Please enter valid credential.')
      }
    },

    showError (msg) {
      this.fetchError = msg
    }
  },
  components: {
    // buttonLoader
    Stretch
  }
}
</script>
