const numbers1 = [43, 45, 2, 34, 56, 32]
const numbers2 = new Array(22, 34, 5, 67, 43)

let val

val = numbers1.length
val = numbers2.length

val = numbers1[3]
val = numbers1.indexOf(43)

val = Array.isArray(numbers2)

numbers1.push(256)
numbers1.pop()
numbers1.unshift(120)
numbers1.shift()

val = numbers1.concat(numbers1)

val = numbers1.sort()


console.log(numbers1)
