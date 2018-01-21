/**
 * Created by Simone.Sacchi on 1/21/2018.
 */

"use strict";


module.exports = function (bus, state) {

    bus.on("increment", function () {
        state.count ++;
        bus.emit("update");
    });

};