<template>
  <label class="cm-radio-button" :class="{'is-checked': isChecked, 'is-disabled': isDisabled}" @click="changeInput">
    <input 
    class="cm-radio-button--origin-radio"
    type="radio"
    @change="emitInput" 
    ref="main"
    :value="realValue"
    :disabled="isDisabled"
    >
    <span class="cm-radio-button--inner transition-03" :class="{'is-checked': isChecked, 'is-disabled': isDisabled, [`cm-radio-button--${size}`]: true}">{{displayText}}</span>
  </label>
</template>

<script>
/**
 * @author coma
 * @description 单选按钮
 */

import radioMixin from './mixins'

export default {
  mixins: [radioMixin]
}
</script>

<style lang="scss">
$border_R: 4px;
$disabled_checked_bgc: #c0c4cc;
$disabled_bgc: #f5f7fa;
$disabled_border: #ebeef5;
@import '../../common/color_set.scss';

.cm-radio-button {
  cursor: pointer;
  position: relative;
  outline: none;
  display: inline-block;
  & .cm-radio-button--inner {
    border-left: none;
  }
  &:first-child .cm-radio-button--inner{
    border-left: 1px solid $border_color;
    border-radius: $border_R 0 0 $border_R;
  }
  &:last-child .cm-radio-button--inner{
    border-radius: 0 $border_R $border_R 0; 
  }
  &.is-disabled {
    cursor: not-allowed;
  }
}
.cm-radio-button--origin-radio {
  opacity: 0;
  outline: none;
  position: absolute;
  left: 0;
  z-index: -1;
}
.cm-radio-button--inner {
  display: inline-block;
  padding: 12px 20px;
  white-space: nowrap;
  background: #fff;
  border: 1px solid $border_color;
  &:hover {
    color: $high_light;
  }
  &.is-checked {
    color: #fff;
    background: {
      color: $high_light;
    }
    &.is-disabled {
      background: $disabled_bgc;
      color: $disabled_checked_bgc;
    }
  }
  &.is-disabled {
    background: #fff;
    color: $disabled_checked_bgc;
  }
}

.cm-radio-button--mini {
  padding: 7px 15px;
  font-size: 12px;
}
.cm-radio-button--small {
  padding: 9px 15px;
  font-size: 12px;
}
.cm-radio-button--medium {
  padding: 10px 20px;
  font-size: 14px;
}
.cm-radio-button--default {
  padding: 12px 20px;
  font-size: 14px;
}
</style>
