const person = {
    firstname:  'Kadi',
    surname: 'Tamm',
    age: 40,
    email: 'kadi.tamm@gmail.com',
    hobbies: ['tennis', 'korvpall'],
    address: {
        city: 'Võru',
        country: 'Võrumaa'
    },
    getBirthYear: function () {
        return 2022 - this.age
    }

}

let val
val = person
val = person.firstname
val = person['surname']
val = person['hobbies'][1]
val = person.hobbies[0]
val = person.address.city
val = person.address['city']
val = person.getBirthYear()
console.log(val)

//for(let i = 0; 1 < person.hobbies.length; i++){
    //console.log(person.hobbies[i])
//}

person.hobbies.forEach(function (hobbies, index) {
    console.log(hobbies + " on element indekiga* " + index)
    console.log(hobbies)
})

person.hobbies.forEach((hobbies, index) => {
    console.log(hobbies + " on element indeksiga " + index)
})
