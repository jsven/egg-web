const egg = require('egg')
let port = 80
let processNum = 1
const workers = Number(processNum || process.argv[2] || require('os').cpus().length)
console.log(workers)
egg.startCluster({
  port,
  workers,
  baseDir: __dirname
})