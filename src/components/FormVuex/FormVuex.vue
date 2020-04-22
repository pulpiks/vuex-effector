<template>
  <div>
    <requests-list></requests-list>
    <Filters @onChange="changeFilter" :selected="statuses"></Filters>
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
import Filters from '../Filters/Filters.vue'
import { createRequest } from '../../store/actions/request'
import { changeFilter } from '@/store/actions/filters'
import RequestsList from '../RequestsList/RequestsList.vue'
import { statuses } from '../../constants/filters'

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
        ],
        status: [
          (v: number) => !!v || 'Status is required'
        ]
      }
    }
  },

  computed: {
    counter (): number { return this.$store.state.requests.length },
    statuses (): string[] {
      const state = this.$store.state
      return state.filters.statuses
    }
  },

  methods: {
    validate (isValid: boolean) {
      this.isValid = isValid
    },
    submit () {
      this.$store.dispatch(createRequest, { ...this.formValues })
    },
    clear () {
      this.$refs.form.reset()
    },
    changeFilter (selectedTypes: string[]) {
      this.$store.dispatch(changeFilter, {
        filter: 'statuses',
        values: selectedTypes
      })
    }
  }
}
</script>
