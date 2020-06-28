<template>
  <div class="login-page">
    <div class="form">
      <div class="alert" v-if="fetchError"> {{ fetchError }}</div>
      <p class="my-req">OTP has been sent to: <b>{{ login.mobile }}</b>. Please enter your OTP to login </p>
      <p class="goto-site"> Successfully Login
        <a href="/"> Go to Home</a>
      </p>
      <form @submit.prevent="submitForm" class="m-login__form m-form">
        <input
          class="form-control m-input m-login__form-input--last"
          :class="{ 'form-group--error': $v.login.mobile_otp.$error }"
          type="text"
          v-model.trim="$v.login.mobile_otp.$model"
          placeholder="Enter OTP"
          name="mobile_otp"
        />
        <button>Submit</button>
        <p class="message">Not registered?
          <router-link to="/login">Email Login</router-link>
        </p>
      </form>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'
import axios from 'axios'
import { env, Helpers } from '@/utils/auth'
// import { getInfo } from '@/api/user'
import { required } from 'vuelidate/lib/validators'
// import buttonLoader from '@/components/ButtonLoader.vue'
import '../../../public/css/custom.css'

export default {
  name: 'login-form',
  data () {
    return {
      loading: false,
      submitStatus: null,
      login: {
        mobile: '',
        mobile_otp: ''
      },
      fetchError: null
    }
  },
  validations: {
    login: {
      mobile_otp: {
        required
      }
    }
  },
  mounted () {
    $(document).ready(function () {
      $(window).on('load', function () {
        $('.goto-site').hide()
        // $('body').removeClass('m-page--loading')
        // $('.message a').click(function () {
        //   $('form').animate({
        //     height: 'toggle',
        //     opacity: 'toggle'
        //   }, 'slow')
        // })
      })
    })
    // const recaptchaScript = document.createElement('script')
    // recaptchaScript.setAttribute('src', 'assets/snippets/pages/user/login.js')
    // document.head.appendChild(recaptchaScript)
  },
  created () {
    // this.checkCookie()
    this.login.mobile = JSON.parse(localStorage.getItem('login_mobile'))
  },
  methods: {
    checkCookie () {
      if (localStorage.getItem('token')) {
        this.$router.push('/')
      } else {
        Helpers.setLoading(true)
      }
      this.loading = false
    },
    submitForm () {
      this.$v.$touch()
      if (!this.$v.$invalid) {
        this.loading = true

        setTimeout(() => {
          axios
            .post(env.api_url + 'auth/login/mobile/otp', this.login)
            .then(response => {
              const result = response.data
              if (result.status) {
                this.fetchError = null
                localStorage.setItem('token', result.data.token)
                localStorage.setItem('userInfo', JSON.stringify(result.data.user))
                $('.goto-site').show()
                $('.my-req').hide()
                // this.$router.push('/')
                // location.reload()
              } else {
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
        this.showError('Error : Please enter your OTP.')
      }
    },

    showError (msg) {
      this.fetchError = msg
    }
  },
  components: {
    // buttonLoader
  }
}
</script>
