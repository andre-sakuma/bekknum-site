<template>
  <div class="title mr-5">
    <div class="bar mb-2 secondary"></div>
    <h1 class="primary--text">{{ text }}</h1>
  </div>
</template>
<style scoped>
.title {
  width: 15%;
}
.bar {
  width: 100%;
  height: 1vw;
}
h1 {
  font-size: 3vw;
  line-height: 3vw;
}
</style>
<script>
// @ is an alias to /src

export default {
  name: "Title",
  props: {
    text: String
  }
};
</script>
