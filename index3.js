const express = require ("express")
const app = new express()

const fs = require("fs")
const util = require("util")

const readFileP = util.promisify(fs.readFile)

console.log("ciao")
for (let i = 0; i < 10; i++ ){
    const testo = fs.readFile("./testo.txt", "utf-8", (err, testo) => {
        console.log(testo)
    })
}

console.log("mare")

