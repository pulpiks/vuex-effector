<template>
  <v-container fluid>
    <v-list>
      <v-subheader inset>Requests</v-subheader>

      <v-list-item
        v-for="item in items"
        :key="item.title"
      >
        <v-list-item-content>
          <v-list-item-title v-text="item.title"></v-list-item-title>
          <v-list-item-subtitle v-text="item.description"></v-list-item-subtitle>
        </v-list-item-content>

      </v-list-item>
    </v-list>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'
import { combine } from 'effector'
import {
  requestsStore, filtersStore
} from '@/storeEffector'

const items = combine(
  requestsStore,
  filtersStore,
  (requests, filters) => {
    return requests.filter(r => filters.statuses.find(s => s === r.status))
  }
)

export default Vue.extend({
  effector: {
    items
  }
})
</script>

<style scoped></style>
