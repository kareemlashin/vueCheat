<template>
  <div>{{ $route.params.id}} <button @click="go()">base</button></div>
</template>

<script>
export default {
  name: "Route",
  created() {},
  data() {
    return {};
  },
  props: {},
  methods: {
    go(){
      this.$router.push('/base');
    }
  },
};
</script>

<style lang="scss" scoped></style>