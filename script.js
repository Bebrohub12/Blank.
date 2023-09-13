let btns = document.querySelectorAll("input");
let dice = document.querySelector(".dice-box")
let sc = document.getElementById("score")
let screenone = document.querySelector(".screen1")
let screentwo = document.querySelector(".screen2")
let btnStart = document.getElementById("btn-start")
let imgbox=document.getElementById("img-box")


let img=["one.jpg","two.jpg","three.jpg","Four.jpg","five.jpg","six.jpg"];


btnStart.onclick = () => {
    screenone.style.display = "none"
    screentwo.style.display = "flex"
}


let y = 0;

for (let i = 0; i < btns.length; i++) {
    
    btns[i].addEventListener("click", function () {

        let x = Math.floor(Math.random() * 6)
        imgbox.src =img[x]


        if (btns[i].value == x) {
            imgbox.src =img[x]

            y = y + 20
            sc.innerHTML = y
        }
        else {
            imgbox.src =img[x]

            y = y - 5
            sc.innerHTML = y

        }
    })
}






























