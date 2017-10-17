
/**
 * Created by simonesacchi on 13/09/2017.
 */

"use strict";

import Vue from 'vue';


document.write(require("html-loader!./index.html"));


document.addEventListener("DOMContentLoaded", function() {


    new Vue({
        el: '#app',
        data: {
            items: [
                'thingie',
                'another thingie',
                'lots of stuff',
                'yadda yadda'
            ]
        }
    });



});