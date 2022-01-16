#!/usr/bin/env node
const program = require('commander')
const api = require('./index.js')

program
  .option('-x, --xxx', 'what the x')

program
  .command('add')
  .description('添加一个任务')
  .action((...args) => {
    const words = args.slice(0, -1).join(' ')
    api.add(words).then(
      () => {console.log('添加成功')},
      () => {console.log('添加失败')})
  })
program
  .command('clear')
  .description('清除所有任务')
  .action(() => {
    api.clear().then(
      () => {console.log('清空完毕')},
      () => {console.log('清空失败')}
    )
  })

program.parse(process.argv)

if (process.argv.length === 2) {
  void api.showAll() // void 是没有意义的，我只是为了消除警告
}