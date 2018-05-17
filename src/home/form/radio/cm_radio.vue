<template>
  <label class="cm-radio-container" :class="{'is-bordered': bordered, 'is-checked': isChecked, 'is-disabled': isDisabled, [`cm-radio--${size}`]: true}">
    <span class="cm-radio-input" :class="{'is-checked': isChecked, 'is-disabled': isDisabled}">
      <span class="cm-radio-input--inner" :class="{'is-disabled': isDisabled}" @click="changeInput"></span>
      <input class="cm-radio-input--original" 
       type="radio" 
       @change="emitInput" 
       ref="main" 
       :value="realValue" 
       :disabled="isDisabled"
      >
    </span>
    <span class="cm-radio-input--label" :class="{'is-checked': isChecked, 'is-disabled': isDisabled}">
      <slot></slot>
    </span>
  </label>
</template>

<script>
/**
 * @author coma
 * @description 单选框组件
 */

import formMix from '../v_model'

export default {
  mixins: [formMix],
  props: {
    bordered: {
      type: Boolean
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
$disabled_checked_bgc: #c0c4cc;
$disabled_bgc: #f5f7fa;
$disabled_border: #ebeef5;

.cm-radio-container {
  position: relative;
  display: inline-flex;

  cursor: pointer;
  &.is-bordered {
    padding: 12px 20px;
    border: 1px solid $border_color;
    border-radius: 5px;
    &.is-checked {
      border-color: $high_light;
    }
    &.is-disabled {
      border-color: $disabled_border;
    }
  }
  &.is-disabled {
    cursor: not-allowed;
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
      &.is-disabled {
        background: $disabled_bgc;
        border-color: $disabled_bgc;
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
  &.is-disabled {
    cursor: not-allowed;
    border: 1px solid $disabled_bgc;
    &:hover {
      border: 1px solid $disabled_bgc;
    }
    &:after {
      background: {
        color: $disabled_checked_bgc;
      }
    }
  }
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
  line-height: 1;
  &.is-checked {
    color: $high_light;
  }
  &.is-disabled {
    color: $disabled_bgc;
    cursor: not-allowed;
  }
}
.is-bordered {
  &.cm-radio--mini {
    padding: 7px 15px;
    font-size: 12px;
  }
  &.cm-radio--small {
    padding: 9px 15px;
    font-size: 12px;
  }
  &.cm-radio--medium {
    padding: 10px 20px;
    font-size: 14px;
  }
  &.cm-radio--default {
    padding: 12px 20px;
    font-size: 14px;
  }
}

</style>
