<template>
<div>
<div><h1>{{name}}</h1></div>
  <div class="menu-links">
    <router-link to="/">Home</router-link>
    <router-link to="/profile">Profile</router-link>
    <router-link to="/contact">Contact</router-link>
  </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name:'Jenny Ward'

    }
  }
}
</script>

<style>

</style>
