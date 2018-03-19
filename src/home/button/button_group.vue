<template>
  <div class="cm-button-group">
    <slot></slot>
  </div>
</template>

<script>
/**
 * @author coma
 * @description 按钮组 组件
 */


export default {

}
</script>

<style lang="scss">
  $radius: 5px;
  .cm-button-group {
    display: flex;
    padding: 1rem 1.2rem;
    .basic-btn {
      border-radius: 0;
    }
    .basic-btn:first-child {
      border-top-left-radius: $radius;
      border-bottom-left-radius: $radius;
    }
    .basic-btn:last-child {
      border-top-right-radius: $radius;
      border-bottom-right-radius: $radius;
    }
  }
</style>
