let seed = 0

/**
 * 生成不重复的id
 * @param {String} prefix 生成的uuid的前缀
 * @returns {String} 生成的uuid
 */
export function uuid (prefix) {
  if (prefix) {
    return `${prefix}-${seed++}`
  }
  return `cm-${seed++}`
}

