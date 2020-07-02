<template>
  <div class="login-page">
    <div class="form">
      <form @submit.prevent="submitForm" class="m-login__form m-form">
        <input
          class="form-control"
          :class="{ 'form-group--error': $v.login.name.$error }"
          type="text"
          v-model.trim="$v.login.name.$model"
          placeholder="Name"
          name="name"
          autocomplete="off"
        />
        <input
          class="form-control"
          :class="{ 'form-group--error': $v.login.mobile.$error }"
          type="text"
          v-model.trim="$v.login.mobile.$model"
          placeholder="Mobile"
          name="mobile"
          autocomplete="off"
        />
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
        <input
          class="form-control m-input m-login__form-input--last"
          :class="{ 'form-group--error': $v.login.c_password.$error }"
          type="password"
          v-model.trim="$v.login.c_password.$model"
          placeholder="Confirm Password"
          name="c_password"
        />
        <button>Sign Up</button>
        <p class="message">Already registered?
          <router-link to="/login">Sign in</router-link>
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

export default {
  name: 'register-form',
  data () {
    return {
      loading: false,
      submitStatus: null,
      login: {
        name: 'Zahid',
        email: 'zahid@admin.com',
        mobile: '',
        password: '12345678',
        c_password: '12345678'
      },
      fetchError: null
    }
  },
  validations: {
    login: {
      name: {
        required
      },
      mobile: {
        required
      },
      email: {
        required
      },
      password: {
        required
      },
      c_password: {
        required
      }
    }
  },
  mounted () {
    $(document).ready(function () {
      $(window).on('load', function () {
        // $('body').removeClass('m-page--loading')
        /* $('.message a').click(function () {
          $('form').animate({
            height: 'toggle',
            opacity: 'toggle'
          }, 'slow')
        }) */
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
            .post(env.api_url + 'auth/register/', this.login)
            .then(response => {
              const result = response.data
              if (result.status) {
                this.fetchError = null
                localStorage.setItem('token', result.data.token)
                localStorage.setItem('userInfo', JSON.stringify(result.data.user))
                this.$router.push('/')
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
<style scoped>
  @import url(https://fonts.googleapis.com/css?family=Roboto:300);

  .login-page {
    width: 360px;
    padding: 8% 0 0;
    margin: auto;
  }

  .form {
    position: relative;
    z-index: 1;
    background: #ffffff;
    max-width: 360px;
    margin: 0 auto 100px;
    padding: 45px;
    text-align: center;
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
  }

  .form input {
    font-family: 'Roboto', sans-serif;
    outline: 0;
    background: #f2f2f2;
    width: 100%;
    border: 0;
    margin: 0 0 15px;
    padding: 15px;
    box-sizing: border-box;
    font-size: 14px;
  }

  .form button {
    font-family: 'Roboto', sans-serif;
    text-transform: uppercase;
    outline: 0;
    background: #4caf50;
    width: 100%;
    border: 0;
    padding: 15px;
    color: #ffffff;
    font-size: 14px;
    -webkit-transition: all 0.3 ease;
    transition: all 0.3 ease;
    cursor: pointer;
  }

  .form button:hover,
  .form button:active,
  .form button:focus {
    background: #43a047;
  }

  .form .message {
    margin: 15px 0 0;
    color: #b3b3b3;
    font-size: 12px;
  }

  .form .message a {
    color: #4caf50;
    text-decoration: none;
  }

  /*.form .register-form {*/
  /*  display: none;*/
  /*}*/

  .container {
    position: relative;
    z-index: 1;
    max-width: 300px;
    margin: 0 auto;
  }

  .container:before,
  .container:after {
    content: '';
    display: block;
    clear: both;
  }

  .container .info {
    margin: 50px auto;
    text-align: center;
  }

  .container .info h1 {
    margin: 0 0 15px;
    padding: 0;
    font-size: 36px;
    font-weight: 300;
    color: #1a1a1a;
  }

  .container .info span {
    color: #4d4d4d;
    font-size: 12px;
  }

  .container .info span a {
    color: #000000;
    text-decoration: none;
  }

  .container .info span .fa {
    color: #ef3b3a;
  }

  body {
    background: #76b852; /* fallback for old browsers */
    background: -webkit-linear-gradient(right, #76b852, #8dc26f);
    background: -moz-linear-gradient(right, #76b852, #8dc26f);
    background: -o-linear-gradient(right, #76b852, #8dc26f);
    background: linear-gradient(to left, #76b852, #8dc26f);
    font-family: 'Roboto', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
</style>
