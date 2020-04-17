<template>
  <div>
    <v-badge
      color="green"
      content="6"
    >
      Counter of Submits
    </v-badge>
    <v-form
      ref="form"
      v-model="isValid"
      @submit.prevent="submit"
      @input="validate"
    >
      <v-text-field
        v-model="title"
        :error-messages="errors['title']"
        :counter="30"
        :rules="rules['title']"
        label="Title"
        required
      ></v-text-field>
      <v-text-field
        v-model="description"
        :error-messages="errors['description']"
        label="Description"
        required
        :rules="rules['description']"
      ></v-text-field>

      <v-btn class="mr-4" type="submit" color="success" :disabled="!isValid">submit</v-btn>
      <v-btn @click="clear">clear</v-btn>
    </v-form>
  </div>
</template>

<script lang="ts">
/* eslint-disable no-debugger */

export default {

  data: () => ({
    title: '',
    description: '',
    errors: {},
    isValid: false,
    rules: {
      title: [
        (v: string) => !!v || 'Title is required',
        (v: string) => (v && v.length <= 30) || 'Title must be less than 10 characters'],
      description: [
        (v: string) => !!v || 'Description is required'
      ]
    }
  }),

  computed: {
  },

  methods: {
    validate (isValid: boolean) {
      console.log(isValid)
      const formValues = {
        title: this.title,
        description: this.description
      }
      console.log(formValues)
      // eslint-disable-next-line no-debugger
      debugger
    },
    submit () {
      debugger
      console.log(123)
      // submit
    },
    clear () {
      this.$refs.form.reset()
      // clear form
    }
  }
}
</script>
