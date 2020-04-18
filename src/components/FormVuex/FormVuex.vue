<template>
  <div>
    <div class="mt-3">
      <v-badge
      data-test="counter"
      color="success"
      :content="counter"
      dark
      grow
    >
      Total requests
    </v-badge>
    </div>

    <v-form
      ref="form"
      v-model="isValid"
      @submit.prevent="submit"
      @input="validate"
    >
      <v-text-field
        id="title"
        v-model="formValues.title"
        :error-messages="errors['title']"
        :counter="30"
        :rules="rules['title']"
        label="Title"
        required
      ></v-text-field>
      <v-text-field
        id="description"
        v-model="formValues.description"
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
import { createRequest } from '../../store/actions/request'
/* eslint-disable no-debugger */

export default {

  data () {
    const state = this.$store.state
    return {
      formValues: {
        title: '',
        description: ''
      },
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
    }
  },

  computed: {
    counter (): number { return this.$store.state.requests.length }
  },

  methods: {
    validate (isValid: boolean) {
      this.isValid = isValid
    },
    submit () {
      this.$store.dispatch(createRequest, this.formValues)
    },
    clear () {
      this.$refs.form.reset()
    }
  }
}
</script>
