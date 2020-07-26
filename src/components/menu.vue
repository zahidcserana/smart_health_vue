<template>
  <div class="col-lg-6">
    <nav class="header__menu">
      <ul>
        <li class="active">
          <router-link to="/">Home</router-link>
        </li>
        <li><router-link to="/product">Shop</router-link></li>
        <li>
          <a href="#">Pages</a>
          <ul class="header__menu__dropdown">
            <li><router-link to="/doctor">Doctor</router-link></li>
            <li><router-link to="/appointments">Appointments</router-link></li>
            <li><router-link to="/serials">Serial</router-link></li>
          </ul>
        </li>
        <li><a href="./blog.html">Blog</a></li>
        <li><a href="./contact.html">Contact</a></li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'header-menu',
  data () {
    return {
    }
  },
  props: {
  },
  computed: {},
  methods: {
  },
  components: {
  }
}
</script>
