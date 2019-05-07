
/**
 * buffer
 * 
 * 处理 二进制的流数据
 */

const buf1 = Buffer.alloc(10)

console.log(buf1)

const buf2 = Buffer.from('abc')

console.log(buf2) // [61, 62, 63] 0x

console.log(buf2.toString())
