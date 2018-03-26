<template>
  <div class="form-container">
    <h1>{{car}}</h1>
    <cm-radio v-model="car" :bordered="true" :display-text="'车'" :real-value="'car'"/>
    <cm-radio v-model="car" :bordered="true" :display-text="'鸟'" :real-value="'bird'"/>
    <div class="radio-group">
      <h1>{{group}}</h1>
      <!-- <cm-radio-group v-model="group" :disabled="fuck">
        <cm-radio :display-text="'篮球'" :bordered="true" :real-value="'basketball'"/>
        <cm-radio :display-text="'足球'" :bordered="true" :real-value="'football'"/>
        <cm-radio :display-text="'排球'" :bordered="true" :real-value="'vollyball'"/>
      </cm-radio-group> -->
      <cm-radio-group v-model="group" :disabled="fuck">
        <cm-radio-button :display-text="'篮球'" :bordered="true" :real-value="'basketball'"/>
        <cm-radio-button :display-text="'足球'" :bordered="true" :real-value="'football'"/>
        <cm-radio-button :display-text="'排球'" :bordered="true" :real-value="'vollyball'"/>
      </cm-radio-group>
      <button @click="toggle">TOGGLE</button>
    </div>
    
  </div>
</template>

<script>
/**
 * @author coma
 * @description 表单组件集
 */

import {cmRadio, cmRadioGroup, cmRadioButton} from './radio/index'
export default {
  components: {
    cmRadio,
    cmRadioGroup,
    cmRadioButton
  },
  data () {
    return {
      bird: 'Form',
      car: 'Radio',
      group: 'Ball',
      fuck: false
    }
  },
  methods: {
    toggle () {
      this.fuck = !this.fuck
      console.log(this.fuck)
    }
  }
}
</script>

<style>
.radio-group {
  margin: 20px auto;
  padding: 10px 20px;
}
</style>
