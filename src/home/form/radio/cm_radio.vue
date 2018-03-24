<template>
  <label :for="univerName" class="cm-radio-container">
    <span class="cm-radio-input" :class="{'is-checked': isChecked}">
      <span class="cm-radio-input--inner" @click="changeInput"></span>
      <input class="cm-radio-input--original" type="radio" :name="univerName" @change="emitInput" ref="main" :value="realValue">
    </span>
    <span class="cm-radio-input--label">{{displayText}}</span>
  </label>
</template>

<script>
/**
 * @author coma
 * @description 单选框组件
 */


export default {
  mounted () {

  },
  props: {
    value: {

    },
    displayText: {
      type: String
    },
    realValue: {
      
    },
    univerName: {
      type: String,
      default () {
        return this.value
      }
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
      this.$emit('input', this.$refs.main.value)
    },
    changeInput () {
      this.$refs.main.click()
    }
  },
  watch: {
    value () {
      if (this.value !== this.realValue) {
        this.isChecked = false
      }
    }
  }
}
</script>

<style lang="scss">
$void: 5px;
.cm-radio-container {
  position: relative;
  display: inline-block;
  height: 20px;
}
.cm-radio-input {
  white-space: nowrap;
  outline: none;
  cursor: pointer;
  display: inline-block;
  height: 14px;

  &.is-checked {
    .cm-radio-input--inner {
      border-color: #409eff;
      background: #409eff;

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
  border: 1px solid #dcdfe6;
  box-sizing: border-box;

  &:hover {
    border: 1px solid #409eff;
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
  color: #606266;
}
</style>
