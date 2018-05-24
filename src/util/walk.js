import Vue from 'vue'

/**
 * @param {Object} root 要访问插槽的根实例
 * @param {Function} callback 对每个插槽子组件进行的回调操作
 * @param {String} slotName 插槽名 默认访问无名插槽即default
 */
function forEachSlotChild(callback, slotName = 'default') {
  Vue.nextTick(() => {
    let arr = Array.from(this.$slots[slotName])
    let ele
    for (let i = 0, len = arr.length; i < len; i++) {
      ele = arr[i].componentInstance
      if (ele) {
        callback(ele, this)
      }
    }
  })
}

export {
  forEachSlotChild
}