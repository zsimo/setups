
/**
 * Created by simonesacchi on 13/09/2017.
 */

"use strict";

import Vue from 'vue';


document.write(require("html-loader!./index.html"));


document.addEventListener("DOMContentLoaded", function() {

    Vue.component('child', {
        template: require("html-loader!./template.html")
    });

    new Vue({
        el: "#app"
    });


});