<template>
  <div>
    <form @submit.prevent="sub()">
      <input v-model="form.name" value="" type="text" name="name" />
      <div class="error" v-if="!$v.form.name.required && $v.form.name.$touch()">
        Field is required
      </div>
      <div class="error" v-if="!$v.form.name.minLength">
        Name must have at least
        {{ $v.form.name.$params.minLength.min }} letters.
      </div>

      <input v-model="form.age" value="" type="number" name="age" />

      <div class="error" v-if="!$v.form.age.between">
        Must be between {{ $v.form.age.$params.between.min }} and
        {{ $v.form.age.$params.between.max }}
      </div>

      <input v-model="form.radio" type="radio" value="1" name="radio" />
      <input v-model="form.radio" type="radio" value="2" name="radio" />

      <div class="error" v-if="!$v.form.radio.required && valid">
        Must be required
      </div>
      <input
        v-model="form.skills"
        value="skills1"
        name="skills"
        type="checkbox"
      />
      <input
        v-model="form.skills"
        value="skills2"
        name="skills"
        type="checkbox"
      />
      <input
        v-model="form.skills"
        value="skills3"
        name="skills"
        type="checkbox"
      />
      <input
        v-model="form.skills"
        value="skills4"
        name="skills"
        type="checkbox"
      />
      <input
        v-model="form.skills"
        value="skills5"
        name="skills"
        type="checkbox"
      />
      <div v-if="valid">valid valid</div>
      <ul class="list__ul" v-if="valid">
        <li v-if="$v.form.name.$invalid">Field A is <kbd>$invalid</kbd>.</li>
        <li v-if="$v.form.name.$error">
          Field A has <kbd>$error</kbd> and <kbd>$anyError</kbd>.
        </li>
        <li v-if="$v.form.name.$invalid">Field B is <kbd>$invalid</kbd>.</li>
        <li v-if="$v.form.name.$error">
          Field B has <kbd>$error</kbd> and <kbd>$anyError</kbd>.
        </li>
        <li v-if="$v.form.$invalid">Form is <kbd>$invalid</kbd>.</li>
        <li v-if="$v.form.$error">
          <strong>Form has <kbd>$error</kbd>.</strong>
        </li>
        <li v-if="$v.form.$anyError">
          <strong>Form has <kbd>$anyError</kbd>.</strong>
        </li>
      </ul>
      <!-- :disabled="$v.form.$invalid"-->
      <button>submit</button>
    </form>
  </div>
</template>

<script>
import { required, minLength, between } from "vuelidate/lib/validators";

export default {
  name: "Form",
  created() {},
  data() {
    return {
      valid: false,
      form: {
        name: "",
        skills: [],
        radio: "",
        age: null,
      },
    };
  },
  props: {},
  methods: {
    sub() {
      this.$v.form.$touch();
      // if its still pending or an error is returned do not submit
      if (this.$v.form.$invalid) {
        this.valid = true;
      } else {
        this.valid = false;
        console.log(this.form);
      }
    },
  },
  validations: {
    form: {
      name: {
        required,
        minLength: minLength(4),
      },
      age: {
        required,
        between: between(20, 30),
      },
      radio: {
        required,
      },
      skills: {},
    },
  },
};
</script>

<style lang="scss" scoped></style>