const express = require ("express")
const app = new express()

const fs = require("fs")

console.log("ciao")

const testo = fs.readFileSync("./testo.txt", "utf-8")
console.log(testo)

console.log("mare")