const express = require ("express")
const app = new express()

const fs = require("fs")

console.log("ciao")

const testo = fs.readFile("./testo.txt", "utf-8", (err, testo) => {
    console.log(testo)
})

console.log("mare")