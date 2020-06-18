<template>
  <div id="master">
    <!-- Page Preloder -->
    <div id="preloder">
      <div class="loader"></div>
    </div>

    <div class="m-grid m-grid--hor m-grid--root m-page">
      <div>
        <app-header :loggedUser="loggedUser" :isLogged="isLogged"></app-header>

        <router-view/>

        <app-footer></app-footer>
      </div>
    </div>

    <div
      class="m-scroll-top m-scroll-top--skin-top"
      data-toggle="m-scroll-top"
      data-scroll-offset="500"
      data-scroll-speed="300"
    >
      <i class="la la-arrow-up"></i>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'
import appHeader from '@/components/header.vue'
import appFooter from '@/components/footer.vue'
// import { getInfo } from '@/api/user'

export default {
  name: 'app',
  data () {
    return {
      loggedUser: {},
      isLogged: false,
      loading: true,
      publicPath: process.env.BASE_URL
    }
  },
  mounted () {
    $(document).ready(function () {
      // setTimeout(function () {
      //   $('#preloder').css('display', 'none')
      // }, 1000)

      $(window).on('load', function () {
        console.log('--start--')
        $('.loader').fadeOut()
        $('#preloder').delay(200).fadeOut('slow')
        // $('#preloder').css('display', 'none')
        // $('body').removeClass('m-page--loading')
      })
    })

    const recaptchaScript = document.createElement('script')
    recaptchaScript.setAttribute('src', 'js/main.js')
    document.head.appendChild(recaptchaScript)
  },
  created () {
    this.loading = false
    this.checkCookie()
  },
  methods: {
    logout () {
      localStorage.removeItem('token')

      this.loggedUser = {}

      this.isLogged = false

      // this.$router.push('/login')
    },

    checkCookie () {
      if (localStorage.getItem('userInfo')) {
        this.loggedUser = JSON.parse(localStorage.getItem('userInfo'))

        this.isLogged = true
        // getInfo()
        //   .then(response => {
        //     if (response.error) {
        //       console.log('ok1')
        //       this.logout()
        //     } else {
        //       console.log('ok2')

        //       this.loggedUser = response
        //       console.log('loggedUser')
        //       console.log(this.loggedUser)
        //       this.isLogged = true
        //     }
        //   })
        //   .catch(error => {
        //     console.log(error)
        //     this.logout()
        //   })
      } else {
        this.logout()
      }

      // Remove loading
      this.loading = false
    }
  },
  components: {
    appHeader,
    appFooter
  }
}
</script>
