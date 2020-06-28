<template>
  <div class="login-page">
    <div class="form">
      <div class="alert" v-if="fetchError"> {{ fetchError }}</div>
      <form @submit.prevent="submitForm" class="m-login__form m-form">
        <input
          class="form-control m-input m-login__form-input--last"
          :class="{ 'form-group--error': $v.login.mobile.$error }"
          type="text"
          v-model.trim="$v.login.mobile.$model"
          placeholder="Mobile"
          name="mobile"
        />
        <button>Submit</button>
        <p class="message">Not registered?
          <router-link to="/register">Create an account</router-link>
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
  mounted () {
    $(document).ready(function () {
      $(window).on('load', function () {
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
    this.checkCookie()
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
                localStorage.setItem('login_mobile', JSON.stringify(result.data.login_mobile))
                // this.$router.push('/login/mobile/otp')
                // location.reload()
                this.$router.push('mobile/otp')
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
        this.showError('Error : Please enter valid credential.')
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
