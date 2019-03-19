

let handler = {
    get(target, name) {
        console.log('执行了get操作，获取对象的属性值')
        // console.log(target[name] || 11);
        return name in target ? target[name] : 11
    }
}


let p = new Proxy({}, handler)

p.a = 1;

console.log(p.b)