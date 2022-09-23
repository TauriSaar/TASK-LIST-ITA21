/*
if(condition) {
    // if statments
} else {
    // else statments
}

== equal   -> ===
!= not equal -> !==
 */

let personID;

if(typeof personID === 'undefined'){
    console.log('id is not correct')
} else {
    console.log('id is ${personID}')
}

/*
if(condition) {
    // if statments
} else if(condition){
    // else statments
} else {
    else condition
}
 */

if(color === 'red'){
    console.log('STOP!')
} else if(color === 'yellow'){
    console.log('Attention!')
}else if(color === 'green'){
    console.log('Go!')
} else {
    console.log('Error!')
}

const name = 'Kadi'
const age = 40

if(age > 0 && age <= 12){
    console.log('${name} on laps')
} else if(age > 12 && age <= 118){
    console.log('${name} on nooruk')
} else {
    console.log('${name} on täiskasvanud')
}

let id = 5

if(id === 100){
    console.log('Ok')
} else {
    console.log('Not')
}

// ? - ternari
console.log(id === 100 ? 'Ok' : 'Not')

//switch
const color = 'red'

console.log(personID)