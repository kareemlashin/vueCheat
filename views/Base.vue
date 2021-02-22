<template>
  <div>
    <div>Base</div>
    {{ name | convert }}
    {{ getfullname }}
    <!---// image-->
    <img :src="logo" ref="img" alt="" srcset="" />
    <input type="text" v-model="name" name="" id="" />
    <Pass :data="name" @send="data = $event">
      <div slot="one">slot one</div>
      <div slot="two">slot two</div>
      <div slot="three">slot three</div>
    </Pass>
    <div>from child {{ data }}</div>
    Kilometers : <input type="text" v-model="kilometers" /> Meters :
    <input type="text" v-model="meters" />

    <div v-bind:class="text">bind class</div>
    <div v-bind:id="text">bind class</div>
    <div v-html="html"></div>
    <div v-text="bindText"></div>
    <div v-if="isAdmin">isAdmin isAdmin</div>
    <div v-else>is ! Admin</div>

    <div v-if="isAdmin">isAdmin isAdmin</div>
    <div v-else-if="Admin">else</div>
    <div v-else>is ! Admin</div>

    <div :class="{ active: Admin, text: 5 == 5 }">active</div>
    <div :class="[Admin ? 'text' : 'active']">{{ name }}</div>

    <div :style="[Admin ? { 'font-size': '50px' } : { 'font-size': '10px' }]">
      {{ name }}
    </div>
    <div :style="{ color: activeColor, fontSize: fontSize + 'px' }">
      {{ name }}
      <input type="text" v-model="val" />
      {{ val }}
      <ul>
        <li v-for="(fruit,index) in fruits" :key="fruit+'-'+index">{{index}} {{fruit}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import Pass from "../components/Pass";

// image
import allMixin from "../mixin/mixin.js";

export default {
  mixins: [allMixin],
  components: {
    Pass,
  },
};
</script>

<style lang="scss" scoped>
.text {
  color: red !important;
}
.active {
  color: #4f8a10;
  background-color: #dff2bf;
}
</style>