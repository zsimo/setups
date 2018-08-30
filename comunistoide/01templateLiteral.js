/**
 * Created by simonesacchi on 30/08/2018.
 */



var count = 5;

console.log(tag`
        ciao
        ${count}
        !
`);


function tag(string) {
    return arguments;
}
