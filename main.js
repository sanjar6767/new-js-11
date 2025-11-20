let boss = document.getElementById("boss")

let stick = document.createElement("div")

boss.appendChild(stick)

stick.className = "stick"
stick.style.transition = "0.5s"

let gradus = 6

let second = setInterval(() =>{
    let date = new Date()
    date.getMinutes()
    gradus += 6
    stick.style.transformOrigin = "1px 1px"
    stick.style.transform = `rotate(${gradus}deg)`
},1000 )

