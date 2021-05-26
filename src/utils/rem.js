const baseSize = 18
// 设置 rem 函数
function setRem () {
  // eslint-disable-next-line no-unused-vars
  let rootWidth
  const rootHtml = document.documentElement
  // 限制展现页面的最小宽度
  // eslint-disable-next-line prefer-const
  rootWidth = rootHtml.clientWidth < 3840 ? 3840 : rootHtml.clientWidth
  // 当前页面宽度相对于 1920宽的缩放比例，可根据自己需要修改。
  const scale = rootWidth / 3840
  // 设置页面根节点字体大小（“Math.min(scale, 2)” 指最高放大比例为2，可根据实际业务需求调整）
  document.documentElement.style.fontSize = baseSize * Math.min(scale, 2) + 'px'
}
// 初始化
setRem()
// 改变窗口大小时重新设置 rem
window.onresize = function () {
  setRem()
}
