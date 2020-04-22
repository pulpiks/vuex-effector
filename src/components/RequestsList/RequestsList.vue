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
import { mapState } from 'vuex'
export default Vue.extend({
  computed: mapState({
    requests: state => state.requests,
    filters: state => { return state.filters },
    items: (state) => {
      return state.requests.filter(r => state.filters.statuses.find(s => s === r.status))
    }
  })

})
</script>

<style scoped></style>
