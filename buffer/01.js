
// 安全和稳定问题，已废弃
// const buf1 = new Buffer(10); //默认给的初始值是0

// alloc()

const buf2 = Buffer.alloc(10,0xba) //创建长度10，初始值为0xba

console.log(buf2)

// 根据数组来创建
console.log(Buffer.from([1,2,3]))//Buffer.from()

// 默认是u8编码，动态字节，字母数组1个字母1个字节，1个汉字占据3到4个字节
console.log(Buffer.from('中国'))