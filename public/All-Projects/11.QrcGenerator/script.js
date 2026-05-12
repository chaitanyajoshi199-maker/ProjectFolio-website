let hide = document.getElementById("div-send")
hide.style.display = 'none'
let input = document.getElementById("input")
let output = document.getElementById("qrc")


function generator() {
    let insert = input.value
    if (insert === '') return
    output.innerHTML = ""



    new QRCode(output, {
        text: insert,
        width: 200,
        height: 200,
        colorDark: "#0073ff",
    })
}
function download() {
    let link = document.createElement('a')
    link.download = 'qrcode.png'
    link.href = document.querySelector('#qrc img').src
    link.click()
}

// if(input===""){

// }
document.getElementById("btn").addEventListener('click', generator)

input.addEventListener('input', function () {
    if (input.value !== '') {
        hide.style.display = 'block'
    }
    else {
        hide.style.display = 'none'
    }
})



