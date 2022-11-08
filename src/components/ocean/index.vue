<template>
  <div>
    <ocean-header />
    <left-nav />
    <right-nav />
    <pro-gress />
  </div>
</template>

<script>
import oceanHeader from "./../headerPage/oceanHeader.vue"
import leftNav from "./leftNav.vue"
import rightNav from "./rightNav.vue"
import proGress from "./progress.vue"
export default {
  name: "",
  components: {
    oceanHeader,
    leftNav,
    rightNav,
    proGress
  }
}
</script>

<style>

</style>