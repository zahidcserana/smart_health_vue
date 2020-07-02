<template>
  <div class="login-page">
    <div class="form">
      <form @submit.prevent="submitForm" class="m-login__form m-form">
        <input
          class="form-control"
          :class="{ 'form-group--error': $v.login.email.$error }"
          type="text"
          v-model.trim="$v.login.email.$model"
          placeholder="Email"
          name="email"
          autocomplete="off"
        />
        <input
          class="form-control m-input m-login__form-input--last"
          :class="{ 'form-group--error': $v.login.password.$error }"
          type="password"
          v-model.trim="$v.login.password.$model"
          placeholder="Password"
          name="password"
        />
        <button>login</button>
        <p class="message">Not registered?
          <router-link to="/register">Create an account</router-link>
        </p>
        <p class="btn-link">
          <router-link class="primary-btn" to="/login/mobile">Mobile Login</router-link>
        </p>
      </form>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'
import axios from 'axios'
import { env } from '@/utils/auth'
// import { getInfo } from '@/api/user'
import { required } from 'vuelidate/lib/validators'
// import buttonLoader from '@/components/ButtonLoader.vue'
import '../../../public/css/auth.css'

export default {
  name: 'login-form',
  data () {
    return {
      loading: false,
      submitStatus: null,
      login: {
        email: 'admin@admin.com',
        password: '12345678',
        loginRemember: null
      },
      fetchError: null
    }
  },
  validations: {
    login: {
      email: {
        required
      },
      password: {
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
    // recaptchaScript.setAttribute('src', 'assets/snippets/pages/user/user.js')
    // document.head.appendChild(recaptchaScript)
  },
  created () {
    this.checkCookie()
  },
  methods: {
    checkCookie () {
      if (localStorage.getItem('token')) {
        this.$router.push('/')
      }
      this.loading = false
    },
    submitForm () {
      this.$v.$touch()
      if (!this.$v.$invalid) {
        this.loading = true

        setTimeout(() => {
          axios
            .post(env.api_url + 'auth/login', this.login)
            .then(response => {
              const result = response.data
              if (result.status) {
                this.fetchError = null
                localStorage.setItem('token', result.data.token)
                localStorage.setItem('userInfo', JSON.stringify(result.data.user))
                // this.$router.push('/')
                location.reload()
              } else {
                this.showError('Wrong user or password')
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
