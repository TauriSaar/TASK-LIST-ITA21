const fristname = 'Tauri'
const surname = 'Saar'
const email = 'tauri.saar@voco.ee'
const department = 'IKT'

let result = '<ul>' +
    '<li></li>' +
    '<li></li>' +
    '<li></li>' +
    '<li></li>' +
    '</ul>'


result = `<ul>
<li><b>Name: </b${firstname}></li>
<li><b>Surname: </b${surname}></li>
<li><b>Email: </b${email}></li>
<li><b>Department: </b${department}></li>
<ul/>`

console.log(result)