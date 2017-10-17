
/**
 * Created by simonesacchi on 13/09/2017.
 */

"use strict";

import Vue from 'vue';


document.write(require("html-loader!./index.html"));


document.addEventListener("DOMContentLoaded", function() {

    // one way (just declare the component)
    Vue.component('child', {
        template: require("html-loader!./template.html")
    });

    // alternative way (store a component in a variable)
    var CommentComponent = {
        data: function () {
            return {
                commentpost: "a comment"
            };
        },
        template: "#comment-template"
    };

    new Vue({
        el: "#app",
        components: {
            "comment": CommentComponent
        }
    });


});