
<template>
  <div ref="data">
    from parent pass {{ data }}
    <slot name="one"></slot>
    <button @click="news()">go</button>
    <slot name="two"></slot>
    <slot name="three"></slot>
    <router-link to="/Form">Form</router-link>
    <router-link to="/Route/5">Route 5</router-link>
  </div>
</template>

<script>
export default {
  name: "Pass",
  created() {},
  data() {
    return {};
  },
  props: ["data"],
  methods: {
    news() {
      this.$emit("send", 100);
    },
  },
  watch: {
    data: function () {
      this.$refs.data.style.color = "#09c";
    },
  },
};
</script>

<style lang="scss" scoped>
</style>

