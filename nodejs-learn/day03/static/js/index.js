document.querySelector('span').innerText = new Date().toLocaleString()
setInterval(()=>{
    document.querySelector('span').innerText = new Date().toLocaleString()
},1000)