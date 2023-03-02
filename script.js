

let arr = [
    {
        name: 'alex',
        age: 18 
    },
    {
        name: 'refat',
        age: 19
    },
    {
        name: 'amal',
        age: 14
    },
    {
        name: 'shoxrux',
        age: 17
    },
    {
        name: 'abdulvosid',
        age: 16
    },
    {
        name: 'jamshed',
        age: 18
    },
    {
        name: 'manuchexr',
        age: 18
    },
    {
        name: 'faxriddin',
        age: 24
    },
    {
        name: 'shakhnoza',
        age: 15
    },
    {
        name: 'timur',
        age: 17
    },
]

let overEightTeen = arr.filter(adult => adult.age >= 18)
arr.sort((a, b) => a.name > b.name ? a : b)
console.log(overEightTeen)
let underEightTeen = arr.filter(teen => teen.age < 18)
arr.sort((a, b) => a.name > b.name ? a : b)
console.log(underEightTeen);















