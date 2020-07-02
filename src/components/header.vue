<template>
  <div class="myheader">
    <!-- Humberger Begin -->
    <div class="humberger__menu__overlay"></div>
    <div class="humberger__menu__wrapper">
      <div class="humberger__menu__logo">
        <a href="#"><img src="img/logo.png" alt=""/></a>
      </div>
      <div class="humberger__menu__cart">
        <ul>
          <li>
            <a href="#"><i class="fa fa-heart"></i> <span>1</span></a>
          </li>
          <li>
            <a href="#"><i class="fa fa-shopping-bag"></i> <span>3</span></a>
          </li>
        </ul>
        <div class="header__cart__price">item: <span>$150.00</span></div>
      </div>
      <div class="humberger__menu__widget">
        <div class="header__top__right__language">
          <img src="img/language.png" alt=""/>
          <div>English</div>
          <span class="arrow_carrot-down"></span>
          <ul>
            <li><a href="#">Spanis</a></li>
            <li><a href="#">English</a></li>
          </ul>
        </div>
        <div class="header__top__right__auth">
          <span v-if="loggedUser.name"> <small>{{ loggedUser.name.toUpperCase() }}</small> </span>
          <router-link v-else to="/login"><i class="fa fa-sign-in" aria-hidden="true"></i>Login</router-link>
        </div>
      </div>
      <nav class="humberger__menu__nav mobile-menu">
        <ul>
          <li class="active">
            <router-link to="/">Home</router-link>
          </li>
          <li>
            <router-link to="/product">Shop</router-link>
          </li>
          <li>
            <a href="#">Pages</a>
            <ul class="header__menu__dropdown">
              <li><a href="./shop-details.html">Shop Details</a></li>
              <li><a href="./shoping-cart.html">Shoping Cart</a></li>
              <li><a href="./checkout.html">Check Out</a></li>
              <li><a href="./blog-details.html">Blog Details</a></li>
            </ul>
          </li>
          <li><a href="./blog.html">Blog</a></li>
          <li><a href="./contact.html">Contact</a></li>
        </ul>
      </nav>
      <div id="mobile-menu-wrap"></div>
      <div class="header__top__right__social">
        <a href="#"><i class="fa fa-facebook"></i></a>
        <a href="#"><i class="fa fa-twitter"></i></a>
        <a href="#"><i class="fa fa-linkedin"></i></a>
        <a href="#"><i class="fa fa-pinterest-p"></i></a>
      </div>
      <div class="humberger__menu__contact">
        <ul>
          <li><i class="fa fa-envelope"></i> hello@colorlib.com</li>
          <li>Free Shipping for all Order of $99</li>
        </ul>
      </div>
    </div>
    <!-- Humberger End -->

    <!-- Header Section Begin -->
    <header class="header">
      <div class="header__top">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 col-md-6">
              <div class="header__top__left">
                <ul>
                  <li><i class="fa fa-envelope"></i> hello@colorlib.com</li>
                  <li>Free Shipping for all Order of $99</li>
                </ul>
              </div>
            </div>
            <div class="col-lg-6 col-md-6">
              <div class="header__top__right">
                <div class="header__top__right__social">
                  <a href="#"><i class="fa fa-facebook"></i></a>
                  <a href="#"><i class="fa fa-twitter"></i></a>
                  <a href="#"><i class="fa fa-linkedin"></i></a>
                  <a href="#"><i class="fa fa-pinterest-p"></i></a>
                </div>
                <div class="header__top__right__language">
                  <img src="img/language.png" alt=""/>
                  <div>English</div>
                  <span class="arrow_carrot-down"></span>
                  <ul>
                    <li><a href="#">Spanis</a></li>
                    <li><a href="#">English</a></li>
                  </ul>
                </div>
                <div class="header__top__right__auth">
                  <a v-if="loggedUser.name" v-on:click="logout()" title="logout" style="cursor: pointer">
                    <i class="fa fa-sign-out" aria-hidden="true"></i>
                  </a>
                  <router-link v-else to="/login"><i class="fa fa-sign-in" aria-hidden="true"></i>Login</router-link>
                </div>
                <div class="header__top__right__auth">
                  <span v-if="loggedUser.name">
                    <router-link title="Profile" to="/profile"><small>{{ loggedUser.name.toUpperCase() }}</small></router-link>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-lg-3">
            <div class="header__logo">
              <a href="./index.html"><img src="img/logo.png" alt=""/></a>
            </div>
          </div>
          <div class="col-lg-6">
            <nav class="header__menu">
              <ul>
                <li class="active">
                  <router-link to="/">Home</router-link>
                </li>
                <li>
                  <router-link to="/product">Shop</router-link>
                </li>
                <li>
                  <a href="#">Pages</a>
                  <ul class="header__menu__dropdown">
                    <li><a href="./shop-details.html">Shop Details</a></li>
                    <li><a href="./shoping-cart.html">Shoping Cart</a></li>
                    <li><a href="./checkout.html">Check Out</a></li>
                    <li><a href="./blog-details.html">Blog Details</a></li>
                  </ul>
                </li>
                <li><a href="./blog.html">Blog</a></li>
                <li><a href="./contact.html">Contact</a></li>
              </ul>
            </nav>
          </div>
          <div class="col-lg-3">
            <div class="header__cart">
              <ul>
                <li>
                  <a href="#"><i class="fa fa-heart"></i> <span>1</span></a>
                </li>
                <li>
                  <a href="#"
                  ><i class="fa fa-shopping-bag"></i> <span>3</span></a
                  >
                </li>
              </ul>
              <div class="header__cart__price">item: <span>$150.00</span></div>
            </div>
          </div>
        </div>
        <div class="humberger__open">
          <i class="fa fa-bars"></i>
        </div>
      </div>
    </header>
    <!-- Header Section End -->
  </div>
</template>

<script>
// import notifications from './notifications.vue'

export default {
  name: 'my-header',
  data () {
    return {
      showSettings: false,
      isHoverSettings: false
    }
  },
  props: {
    loggedUser: {
      type: Object
    }
  },
  computed: {},
  methods: {
    logout () {
      localStorage.removeItem('token')
      localStorage.removeItem('userInfo')
      localStorage.removeItem('login_mobile')

      // Empty this.loggedUser object
      this.loggedUser = {}

      // Set this.isLogged to false
      this.isLogged = false

      // Delete Cookie
      // this.$cookie.delete('appLogged')

      // Go to Login page
      location.reload()
      // this.$router.push('/user')
    }
  },
  components: {
    // notifications
  }
}
</script>
