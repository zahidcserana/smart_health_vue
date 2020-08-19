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
            <li><router-link to="/doctors">Doctor</router-link></li>
            <li><router-link to="/doctors/appointments">Appointments</router-link></li>
            <li><router-link to="/doctors/serials">Serial</router-link></li>
          </ul>
        </li>
        <li>
          <a href="#">Request</a>
          <ul class="header__menu__dropdown">
            <li><router-link to="/bloods">Blood</router-link></li>
            <li><router-link to="/ambulance">Ambulance</router-link></li>
          </ul>
        </li>
        <li><a href="./blog.html">Blog</a></li>
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
