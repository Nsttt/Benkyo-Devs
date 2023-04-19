"use strict";
const fs = require("fs").promises;
const fetch = require("node-fetch");
console.log("fuera de getCard");

const data = fetch("http://localhost:3000/muestra.json")
  .then((promesaFetch) => promesaFetch.json())
  .then((contenido) => console.log(contenido));

const getData = async () => {
  try {
    const data = await fetch("./muestra.json").then();
    return JSON.parse(data);
  } catch (err) {
    return [];
  }
};

const listCard = async () => {
  try {
    const data = await getData();
    for (let i = 0; i < data.lenght; i++) {}

    console.log("data");
    console.log(data);
  } catch (err) {
    console.log(err.message);
    next(err);
  }
};
listCard();
