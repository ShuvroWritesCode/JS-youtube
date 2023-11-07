// singleton
// Object.create

// objects literals
const mySym = Symbol("key1")


const account = {
    name: "Shuvro",
    "full name": "ShuvroWritesCode",
    age: 19,
    [mySym]: "mykey1",
    location: "Dhaka",
    isLoggedIn: false,
    lastLoginDays: ["monday", "saturday"]
}

console.log(account.location)
console.log(account["full name"])
console.log(account[mySym])
console.log(account.name)

account.name = "Samir"
Object.freeze(account)