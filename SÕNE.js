const firstname = 'tauri'
const surname = 'saar'

let val = firstname + surname

val = 'tauri'
val += surname
val = firstname.toUpperCase()
val = surname.toUpperCase()

val = surname[0]
val = surname.indexOf('t')
val = surname.lastIndexOf('i')

val = surname.charAt(2)
val = surname.charAt(surname.length - 1)

val = surname.substring(0, 4)
val = surname.slice(0, 4)
val = surname.slice(-3)

const tags = 'Js, HTML, CSS'
val = tags.split(',')

console.log(val[1].trim())