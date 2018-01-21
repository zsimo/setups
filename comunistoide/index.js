/**
 * Created by Simone.Sacchi on 1/21/2018.
 */

"use strict";


// yo-yo is an axtraction on top of bel
var html = require("yo-yo");
//var html = require('bel')

var EventEmitter = require("events");
var bus = new EventEmitter();

var state = {
    count : 0
};

var root = document.body.appendChild(document.createElement("div"));
require("./reduce.js")(bus, state);



bus.on("update", update);

setInterval(function () {
//setTimeout(function () {
    bus.emit("increment");
}, 1000);

function click () {
    bus.emit("increment");
}

function update () {

    html.update(root, html`
        <div>
            <h1>${state.count}</h1>
            <button onclick="${click}">click</button>
        </div>
    `);
// toString()
}
