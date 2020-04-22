<template>
  <v-container fluid>
    <v-checkbox v-model="selectedValues" v-for="item in options" :key="item.id" :label="item.name" :value="item.id" >
    </v-checkbox>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'
import { statuses } from '../../constants/filters'
// import { Component, Prop } from "vue-property-decorator";
export default Vue.extend({
  props: {
    selected: {
      type: Array,
      default: () => []
    },
    onChange: {
      type: Function
    }
  },
  data () {
    return {
      options: statuses,
      selectedValues: this.selected
    }
  },
  watch: {
    selectedValues (values) {
      this.$emit('onChange', values)
    }
  }
})
// @Component
// export default class App extends Vue {
//   @Prop({ default: [] })
//   selected: Array<[]>
// }
</script>

<style scoped></style>
