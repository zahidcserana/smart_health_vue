<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h3>Index</h3>
    <li><router-link to="/bloods/add">Add</router-link></li>

  </div>
</template>

<script>
export default {
  name: 'DoctorSearch',
  props: {
    msg: String
  }
}
</script>
