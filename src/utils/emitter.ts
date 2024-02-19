// 引入mitt
import mitt from 'mitt'

// 调用mitt得到emitter，emitter能：绑定事件、触发事件
const emitter = mitt()
/*
// 绑定事件
emitter.on('test1', () => {
  console.log('test1')
})

emitter.on('test2', () => {
  console.log('test2')
})
// 触发事件
setInterval(() => {
  emitter.emit('test1')
  emitter.emit('test2')
}, 1000);
// 解绑事件test1
setTimeout(() => {
  emitter.off('test1')
}, 3000);
// 清空所有事件
setTimeout(() => {
  emitter.all.clear()
}, 5000);
*/
// 暴露emitter
export default emitter