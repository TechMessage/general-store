/**
 *  a stream 
 */

const stream = require('stream')

/**
 * 
 * writable  fs.createWriteStream()
 * readable  fs.createReadStream()
 * duplex     双向 readable wrieable
 * transform   
 */

// const http = require('http')

// const server = http.createServer((req, res) => {

//     let body = '';
//     req.setEncoding('utf8')

//     req.on('data', chunk => {
//         body += chunk;
//     })

//     req.on('end', () => {
//         try {
//             const data = JSON.parse(body)
//             res.write(typeof data)
//             res.end()
//         } catch (error) {
//             res.statusCode = 400
//             return res.end(`error: ${error.message}`)
//         }
//     })

// })

// server.listen(1337)






