import Vue from 'vue'

export default Vue.component('cm-vmodel', {
  props: {
    value: {

    },
    displayText: {
      type: String
    },
    realValue: {

    },
    disabled: {
      type: Boolean
    },
    size: {
      type: String,
      default: 'default'
    }
  },
  data() {
    return {
      isChecked: false,
      isDisabled: this.disabled
    }
  },
  methods: {
    emitInput(e) {
      this.isChecked = true
      /*
      input: 实现v-model需要触发
      change: 留出一个异步事件的接口
      univer: 给radio-group组件使用为了处理选中状态
      */
      this.$emit('input', this.$refs.main.value)
      this.$emit('change', this.$refs.main.value)
      this.$emit('univer', this)
    },
    changeInput() {
      this.$refs.main.click()
    }
  }
})