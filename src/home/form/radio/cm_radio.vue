<template>
  <label class="cm-radio-container" :class="{'is-bordered': bordered, 'is-checked': isChecked, 'is-disabled': disabled}">
    <span class="cm-radio-input" :class="{'is-checked': isChecked, 'is-disabled': disabled}">
      <span class="cm-radio-input--inner" @click="changeInput"></span>
      <input class="cm-radio-input--original" 
       type="radio" 
       @change="emitInput" 
       ref="main" 
       :value="realValue" 
       :disabled="disabled"
      >
    </span>
    <span class="cm-radio-input--label" :class="{'is-checked': isChecked}">{{displayText}}</span>
  </label>
</template>

<script>
/**
 * @author coma
 * @description 单选框组件
 */

import {uuid} from '@/util/uuid'

export default {
  mounted () {

  },
  props: {
    value: {

    },
    bordered: {
      type: Boolean
    },
    displayText: {
      type: String
    },
    realValue: {
      
    },
    univerName: {
      type: String,
      default: uuid(this.value)
    },
    disabled: {
      type: Boolean
    }
  },
  data () {
    return {
      isChecked: false,
      el: {}
    }
  },
  methods: {
    emitInput (e) {
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
    changeInput () {
      this.$refs.main.click()
    }
  },
  watch: {
    value () {
      if (this.value !== this.realValue) {
        this.isChecked = false
        this.$refs.main.checked = false
      }
    }
  }
}
</script>

<style lang="scss">
@import '../../common/color_set.scss';

$void: 4px;
.cm-radio-container {
  position: relative;
  display: inline-block;
  height: 20px;
  &.is-bordered {
    padding: 12px 20px;
    border: 1px solid $border_color;
    border-radius: 5px;
    &.is-checked {
      border-color: $high_light;
    }
  }
  &+.cm-radio-container {
    margin-left: 30px;
  }
}
.cm-radio-input {
  white-space: nowrap;
  outline: none;
  cursor: pointer;
  display: inline-block;
  height: 14px;

  &.is-checked {
    .cm-radio-input--inner {
      border-color: $high_light;
      background: $high_light;

      &:after {
        transform: translate(-50%, -50%) scale(1);
      }
    }
  }
}
.cm-radio-input--inner {
  display: inline-block;
  border-radius: 100%;
  position: relative;
  width: 14px;
  height: 14px;
  cursor: pointer;
  border: 1px solid $font_color;
  box-sizing: border-box;

  &:hover {
    border: 1px solid $high_light;
  }
  &:after {
    width: $void;
    height: $void;
    content: '';
    border-radius: 100%;
    background: {
      color: #fff;
    }
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%) scale(0);
    transition: transform .15s cubic-bezier(.71,-.46,.88,.6);
  }
}
.cm-radio-input--original {
  opacity: 0;
  outline: none;
  position: absolute;
  z-index: -1;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: 0;
}

.cm-radio-input--label {
  color: $font_color;
  margin-left: 8px;
  &.is-checked {
    color: $high_light;
  }
}
</style>
