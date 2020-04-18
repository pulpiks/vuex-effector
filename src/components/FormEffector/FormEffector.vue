<template>
  <div>
    <div class="mt-3">
      <v-badge
      v-if="counter>0"
      color="success"
      :content="counter"
      :value="state.counter"
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
        v-model="formValues.title"
        :error-messages="errors['title']"
        :counter="30"
        :rules="rules['title']"
        label="Title"
        required
      ></v-text-field>
      <v-text-field
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
import { combine } from 'effector'
import {
  store, counter, createRequestEvent, resetRequestEvent
} from '@/storeEffector'
/* eslint-disable no-debugger */

export default {

  data () {
    debugger
    const state = this.$store.state
    console.log(state.requests.length)
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
  effector () {
    // would create `state` in template
    debugger
    return combine(
      counter,
      store,
      (counter, store) => {
        debugger
        return {
          ...store,
          counter
        }
      }
    )
  },

  computed: {
    counter (): number { return this.$store.state.requests.length }
  },

  methods: {
    validate (isValid: boolean) {
      console.log(isValid)
      console.log(this.formValues)
      // eslint-disable-next-line no-debugger
      debugger
    },
    submit () {
      createRequestEvent(this.formValues)
    },
    clear () {
      // clear form
      resetRequestEvent()
    }
  }
}
</script>
