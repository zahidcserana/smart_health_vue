<template>
  <div
    class="m-grid__item m-grid__item--fluid m-grid m-grid--ver-desktop m-grid--desktop m-grid--tablet-and-mobile m-grid--hor-tablet-and-mobile m-login m-login--1 m-login--signin"
    id="m_login"
  >
    <div
      class="m-grid__item m-grid__item--order-tablet-and-mobile-2 m-login__aside"
    >
      <div class="m-stack m-stack--hor m-stack--desktop">
        <div class="m-stack__item m-stack__item--fluid">
          <div class="m-login__wrapper">
            <div class="m-login__logo">
              <a href="#">
                <img src="assets/app/media/img//logos/logo-2.png" />
              </a>
            </div>
            <div class="m-login__signin">
              <div class="m-login__head">
                <h3 class="m-login__title">
                  Sign In To Admin
                </h3>
              </div>
              <div class="alert alert-error error" v-if="fetchError">
                {{ fetchError }}
              </div>
              <form @submit.prevent="submitForm" class="m-login__form m-form">
                <div class="form-group m-form__group">
                  <input
                    class="form-control m-input"
                    :class="{ 'form-group--error': $v.login.email.$error }"
                    type="text"
                    v-model.trim="$v.login.email.$model"
                    placeholder="Email"
                    name="email"
                    autocomplete="off"
                  />
                </div>
                <div class="error" v-if="!$v.login.email.required">
                  Email is required
                </div>
                <div class="form-group m-form__group">
                  <input
                    class="form-control m-input m-login__form-input--last"
                    :class="{ 'form-group--error': $v.login.password.$error }"
                    type="password"
                    v-model.trim="$v.login.password.$model"
                    placeholder="Password"
                    name="password"
                  />
                </div>
                <div class="error" v-if="!$v.login.password.required">
                  Password is required
                </div>
                <div class="row m-login__form-sub">
                  <div class="col m--align-left">
                    <label class="m-checkbox m-checkbox--focus">
                      <input type="checkbox" name="remember" />
                      Remember me
                      <span></span>
                    </label>
                  </div>
                  <div class="col m--align-right">
                    <a
                      href="javascript:;"
                      id="m_login_forget_password"
                      class="m-link"
                    >
                      Forget Password ?
                    </a>
                  </div>
                </div>
                <div class="m-login__form-action">
                  <button-loader v-if="loading"></button-loader>
                  <button
                    type="submit"
                    v-else
                    class="btn btn-focus m-btn m-btn--pill m-btn--custom m-btn--air"
                  >
                    Sign In
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="m-grid__item m-grid__item--fluid m-grid m-grid--center m-grid--hor m-grid__item--order-tablet-and-mobile-1 m-login__content"
      style="background-image: url(assets/app/media/img//bg/bg-4.jpg)"
    >
      <div class="m-grid__item m-grid__item--middle">
        <h3 class="m-login__welcome">
          Join Our Community
        </h3>
        <p class="m-login__msg">
          Lorem ipsum dolor sit amet, coectetuer adipiscing
          <br />
          elit sed diam nonummy et nibh euismod
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'
import axios from 'axios'
import { env, Helpers } from '@/utils/auth'
import { getInfo } from '@/api/user'
import { required } from 'vuelidate/lib/validators'
import buttonLoader from '@/components/ButtonLoader.vue'

export default {
  name: 'login-form',
  data () {
    return {
      loading: false,
      submitStatus: null,
      login: {
        email: 'admin@admin.com',
        password: 'password@123',
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
        this.$router.push('/dashboard')
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
            .post(env.api_url + 'login/', this.login)
            .then(response => {
              if (response.error) {
                this.showError('Wrong login or password')
              } else {
                this.fetchError = null

                localStorage.setItem('token', response.data.success.token)

                getInfo().then(response => {
                  Helpers.setLoading(false)
                  this.$router.push('/dashboard')
                })
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
    buttonLoader
  }
}
</script>
<style scoped>
.error {
  color: red;
}
.alert {
  background: lavenderblush;
}
</style>
