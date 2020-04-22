<template>
  <div>
    <requests-list></requests-list>
    <Filters @onChange="changeFilter" :selected="state.filters.statuses"></Filters>
    <div class="mt-3">
      <v-badge
      color="success"
      :content="state.counter"
      data-test="counter"
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
      <v-col class="d-flex" cols="12" sm="6">
        <v-select
          :items="items"
          v-model="formValues.status"
          label="Choose status"
          outlined
        ></v-select>
      </v-col>
      <v-btn class="mr-4" type="submit" color="success" :disabled="!isValid">submit</v-btn>
      <v-btn @click="clear">clear</v-btn>
    </v-form>
  </div>
</template>

<script lang="ts">
import { combine } from 'effector'
import {
  store, counter, createRequestEvent, resetRequestEvent, createFilterEvent, filtersStore
} from '@/storeEffector'
import { statuses } from '../../constants/filters'
import Filters from '../Filters/Filters.vue'
import RequestsList from '../RequestsList/RequestsListEffector.vue'

export default {
  components: {
    Filters,
    RequestsList
  },
  data () {
    return {
      formValues: {
        title: '',
        description: '',
        status: ''
      },
      errors: {},
      isValid: false,
      items: statuses.map(s => ({ text: s.name, value: s.id })),
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
    return combine(
      counter,
      store,
      filtersStore,
      (counter, store, filtersStore) => {
        return {
          ...store,
          counter,
          filters: filtersStore
        }
      }
    )
  },

  methods: {
    validate (isValid: boolean) {
      this.isValid = isValid
    },
    submit () {
      createRequestEvent({ ...this.formValues })
    },
    clear () {
      // clear form
      resetRequestEvent()
    },
    changeFilter (selectedTypes: number[]) {
      createFilterEvent({
        filter: 'statuses',
        values: selectedTypes
      })
    }
  }
}
</script>
