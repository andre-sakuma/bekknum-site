<template>
  <div>
    <div class="content">
      <AboutUs />
      <div class="spacer"></div>
      <Services />
      <div class="spacer"></div>
      <OurValues />
    </div>
  </div>
</template>
<style scoped>
  .spacer{
    height: 80px;
  }
</style>
<script>
import AboutUs from './AboutUs'
import Services from './Services'
import OurValues from './OurValues'

export default {
  components: {
    AboutUs,
    Services,
    OurValues
  }
}
</script>