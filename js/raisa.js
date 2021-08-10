// const { response } = require("express")

const sjk = () => {
    location.assign(`${window.location.origin}/sjk`)
}
const show = async() => {
    const val = document.querySelector("input").value
    // console.log(data)
    const url = `${window.location.origin}/api/${val}`
    await fetch(url)
    .then((Response)=> Response.json())
    .then((back)=>{
        // console.log(back)
        document.querySelector(".print").innerHTML=`${back.data.msg}`
    })
}

const lastpage = () => {
    location.assign(`${window.location.origin}/end`)
}

const insta = () => {
    window.open('https://www.instagram.com/__riceaa__/')
}