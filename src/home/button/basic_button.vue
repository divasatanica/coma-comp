<template>
  <button class="basic-btn transition-01" 
  :class="{[`cm-button-${type}`]: true, 
            'is-disabled': realDisabled,
            [`cm-button--${size}`]: true}"
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
      type: Function,
      default: function () {}
    },
    size: {
      type: String,
      default: 'default'
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
  margin: 0;
  border-radius: 3px;
  cursor: pointer;
  color: #fff;
  outline: none;
}

.is-disabled {
  cursor: not-allowed;
}

@import './color_sets.scss';

.cm-button--mini {
  padding: 7px 15px;
  font-size: 12px;
}
.cm-button--small {
  padding: 9px 15px;
  font-size: 12px;
}
.cm-button--medium {
  padding: 10px 20px;
  font-size: 14px;
}
.cm-button--default {
  padding: 12px 20px;
  font-size: 14px;
}

</style>
