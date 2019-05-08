/**
 * 单实例的nodejs运行在 单线程上，为了利用多核心cpu，可以使用nodejs进程集群
 * 
 * cluster集群模块 可以很方便的创建子进程，共享一个服务端口
 * 
 */

 
 const cluster = require('cluster')
 const http = require('http')

const numcpus = require('os').cpus().length;

if(cluster.isMaster) {
    console.log(`master ${process.pid} is running`)

    for(let i=0;i<numcpus;i++) {
        cluster.fork()
    }

    cluster.on('exit', (worker,code, signal) => {
        console.log(`worker ${worker.process.pid} died`)
    })
}else {
    http.createServer((req, res) => {
        res.writeHead(200);
        res.end('hello world')
    }).listen(8000)

    console.log(`worker ${process.pid} started`)
}

