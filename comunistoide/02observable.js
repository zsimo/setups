/**
 * Created by simonesacchi on 30/08/2018.
 */


var observable = require("observable");


var v = observable();

v(1);


v(function(v){
    console.log('Was changed to', v);
});

setTimeout(function () {
    v(v() + 1);
}, 1000);