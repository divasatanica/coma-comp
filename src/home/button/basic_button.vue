<template>
  <button class="basic-btn transition-03" 
  :class="{[`cm-button-${type}`]: true, 'is-disabled': realDisabled}"
  :disabled="realDisabled"
  @click="action"
  >
    <i class="fa" :class="{[realIconClass]: true}"></i>
    <slot></slot>
  </button>
</template>

<script>
/**
 * @author coma
 * @description 基本按钮组件
 */


export default {
  props: {
    iconClass: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'default'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },
    action: {
      type: Function
    }
  },
  data () {
    return {
      name: 'cm-button',
      realIconClass: this.iconClass,
      realDisabled: this.disabled,
      bufferClass: ''
    }
  },
  methods: {
    test () {
      this.action();
    }
  },
  watch: {
    loading () {
      if (this.realIconClass.indexOf('fa-spin') < 0) {
        this.bufferClass = this.realIconClass
        this.realIconClass = 'fa-spin fa-spinner'
        this.realDisabled = true
      } else {
        this.realIconClass = this.bufferClass
        this.realDisabled = false
      }
    }
  }
}
</script>

<style lang="scss">

.basic-btn {
  padding: 0.4rem 0.5rem;
  border-radius: 3px;
  cursor: pointer;
  color: #fff;
}

.is-disabled {
  cursor: not-allowed;
}

@import './color_sets.scss';



</style>
