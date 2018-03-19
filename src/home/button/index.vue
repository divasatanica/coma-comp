<template>
  <cm-button-group>
    <cm-button
    @click="test"  
    :loading="loading"
    iconClass="fa-upload"
    type="primary">Upload</cm-button>
    <cm-button iconClass="fa-plus">Add</cm-button>
    <cm-button iconClass="fa-thumbs-up"></cm-button>
  </cm-button-group>
</template>

<script>
/**
 * @author coma
 */

import {cmButton, cmButtonGroup} from './index.js'

export default {
  components: {
    cmButton,
    cmButtonGroup
  },
  data () {
    return {
      loading: false
    }
  },
  methods: {
    test () {
      this.loading = true
      this.getData()
    },
    async getData () {
      let response = await this.$http.get('https://comacc.top/article/newest/1')
      this.loading = false
      console.log(response)
    }
  }
}
</script>

<style>

</style>
